const {execSync} = require("child_process");
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://carlosnavarrete.cl";

// Sitemap settings per page. `sources` are the files a page is rendered from:
// its <lastmod> is the date of the last commit that touched any of them, so
// search engines only recrawl a page when its content actually changed.
// Pages not listed here fall back to the defaults at the bottom.
const SITEMAP_PAGES = {
  "/": {
    priority: 1.0,
    changefreq: "weekly",
    sources: ["src/pages/index.js", "src/data", "src/components", "static/gallery"],
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

const BUILD_DATE = new Date().toISOString();

function lastModified(sources) {
  try {
    const date = execSync(`git log -1 --format=%cI -- ${sources.join(" ")}`, {
      cwd: __dirname,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return date || BUILD_DATE;
  } catch {
    return BUILD_DATE;
  }
}

// Image sitemap entries for the homepage: the portrait and every photo in the
// archive, so they can surface in image search for his name.
function homepageImages() {
  const dir = path.join(__dirname, "static/gallery");
  const gallery = fs.existsSync(dir)
    ? fs
      .readdirSync(dir)
      .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
      .sort()
      .map((file) => `${SITE_URL}/gallery/${file}`)
    : [];
  return [`${SITE_URL}/carlos-navarrete.jpg`, ...gallery].map((url) => ({url}));
}

module.exports = {
  siteMetadata: {
    title: "Carlos Navarrete — Generative AI and the future of society",
    description:
      "Carlos Navarrete is Assistant Professor at the Faculty of Engineering, Universidad de Concepción, deputy director of its Center for Data and Artificial Intelligence (CDIA) and associate researcher at the Millennium Nucleus MEPOP. He studies generative AI as the industrial revolution of our time — its effects on work, education, public debate and democracy.",
    author: "Carlos Navarrete",
    siteUrl: SITE_URL,
    image: "/carlos-navarrete.jpg",
    twitterUsername: "@cnavarreteliz",
  },
  trailingSlash: "always",
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-15VXRGSWZR", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          // gatsby-plugin-sass still calls the legacy Sass JS API; silence that
          // deprecation noise (our own SCSS already uses modern @use).
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404/", "/404.html", "/dev-404-page/"],
        serialize: ({path: pagePath}) => {
          const page = SITEMAP_PAGES[pagePath] || {};
          return {
            url: pagePath,
            lastmod: lastModified(page.sources || [`src/pages${pagePath.replace(/\/$/, "")}*`]),
            changefreq: page.changefreq || "monthly",
            priority: page.priority ?? 0.5,
            ...(pagePath === "/" && {img: homepageImages()}),
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carlos Navarrete",
        short_name: "C. Navarrete",
        start_url: "/",
        background_color: "#edf2f7",
        theme_color: "#2e6f9e",
        display: "minimal-ui",
        icon: "src/assets/icon.png"
      }
    },
  ],
};
