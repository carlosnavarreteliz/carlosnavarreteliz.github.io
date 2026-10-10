const {execSync} = require("child_process");
const fs = require("fs");
const path = require("path");

// Sitemap
//
// Written here rather than with gatsby-plugin-sitemap so the output is exactly
// what search engines need and nothing else: one /sitemap.xml with only the
// sitemap and image namespaces, pages ordered by importance, a real <lastmod>
// per page and the photographs attached to the page that shows them.
//
// /sitemap-index.xml is kept (it is what robots.txt and Search Console knew
// before) and simply points at /sitemap.xml. /sitemap.xsl renders both as a
// readable table when opened in a browser; crawlers ignore it.

const SITE_URL = "https://carlosnavarrete.cl";

// One entry per public page. `sources` are the files the page is rendered
// from: its <lastmod> is the date of the last commit touching any of them, so
// crawlers only revisit a page when its content really changed. A page Gatsby
// builds that is missing here still goes in the sitemap, with the defaults.
const PAGES = {
  "/": {
    priority: 1.0,
    changefreq: "weekly",
    sources: ["src/pages/index.js", "src/data", "src/components", "static/gallery", "static/carlos-navarrete.jpg"],
    images: () => ["/carlos-navarrete.jpg", ...galleryImages()],
  },
  "/research/": {
    priority: 0.9,
    changefreq: "monthly",
    sources: ["src/pages/research.jsx"],
  },
  "/op-ed/": {
    priority: 0.8,
    changefreq: "monthly",
    sources: ["src/pages/op-ed.jsx", "src/data/columns.js"],
  },
  "/courses/": {
    priority: 0.7,
    changefreq: "monthly",
    sources: ["src/pages/courses.jsx"],
  },
};

const EXCLUDE = [/^\/404/, /^\/dev-404-page/];

const TODAY = new Date().toISOString().slice(0, 10);

function lastModified(sources) {
  if (!sources || !sources.length) return TODAY;
  try {
    const date = execSync(`git log -1 --format=%cs -- ${sources.map((s) => `"${s}"`).join(" ")}`, {
      cwd: __dirname,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return date || TODAY;
  } catch {
    return TODAY;
  }
}

function galleryImages() {
  const dir = path.join(__dirname, "static/gallery");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort()
    .map((file) => `/gallery/${file}`);
}

const escapeXml = (value) =>
  String(value).replace(/[<>&'"]/g, (c) => ({"<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;"})[c]);

exports.onPostBuild = async ({graphql, reporter}) => {
  const {data, errors} = await graphql("{ allSitePage { nodes { path } } }");
  if (errors) {
    reporter.panic("sitemap: could not query pages", errors);
    return;
  }

  const entries = data.allSitePage.nodes
    .map(({path: pagePath}) => pagePath)
    .filter((pagePath) => !EXCLUDE.some((re) => re.test(pagePath)))
    .map((pagePath) => {
      const page = PAGES[pagePath] || {};
      return {
        loc: `${SITE_URL}${pagePath}`,
        lastmod: lastModified(page.sources || [`src/pages${pagePath.replace(/\/$/, "")}.js`, `src/pages${pagePath.replace(/\/$/, "")}.jsx`]),
        changefreq: page.changefreq || "monthly",
        priority: page.priority ?? 0.5,
        images: page.images ? page.images() : [],
      };
    })
    .sort((a, b) => b.priority - a.priority || a.loc.localeCompare(b.loc));

  const urls = entries
    .map((e) =>
      [
        "  <url>",
        `    <loc>${escapeXml(e.loc)}</loc>`,
        `    <lastmod>${e.lastmod}</lastmod>`,
        `    <changefreq>${e.changefreq}</changefreq>`,
        `    <priority>${e.priority.toFixed(1)}</priority>`,
        ...e.images.map((src) => `    <image:image><image:loc>${escapeXml(SITE_URL + src)}</image:loc></image:image>`),
        "  </url>",
      ].join("\n"),
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

  const newest = entries.map((e) => e.lastmod).sort().pop() || TODAY;
  const index = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${newest}</lastmod>
  </sitemap>
</sitemapindex>
`;

  const out = path.join(__dirname, "public");
  fs.writeFileSync(path.join(out, "sitemap.xml"), sitemap);
  fs.writeFileSync(path.join(out, "sitemap-index.xml"), index);
  reporter.info(`sitemap: ${entries.length} pages, ${entries.reduce((n, e) => n + e.images.length, 0)} images`);
};
