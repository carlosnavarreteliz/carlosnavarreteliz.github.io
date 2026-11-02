<?xml version="1.0" encoding="UTF-8"?>
<!-- Renders /sitemap.xml and /sitemap-index.xml as a readable page in a
     browser. Crawlers read the XML and ignore this stylesheet. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="s image">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap — Carlos Navarrete</title>
        <style>
          :root { --bg: #edf2f7; --card: #fff; --ink: #14324a; --muted: #5b7187; --accent: #2e6f9e; --line: #d6e1eb; }
          @media (prefers-color-scheme: dark) { :root { --bg: #0e1a24; --card: #15263a; --ink: #e3edf5; --muted: #93a9bd; --accent: #7fb4dc; --line: #24394f; } }
          * { box-sizing: border-box; }
          body { margin: 0; padding: 48px 16px; background: var(--bg); color: var(--ink); font: 15px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
          main { max-width: 880px; margin: 0 auto; }
          h1 { font-size: 28px; font-weight: 600; margin: 0 0 4px; }
          p { color: var(--muted); margin: 0 0 24px; }
          .card { background: var(--card); border: 1px solid var(--line); border-radius: 18px; overflow-x: auto; }
          table { width: 100%; border-collapse: collapse; }
          th, td { text-align: left; padding: 12px 16px; border-bottom: 1px solid var(--line); vertical-align: top; }
          tr:last-child td { border-bottom: 0; }
          th { font: 600 11px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }
          a { color: var(--accent); text-decoration: none; word-break: break-all; }
          a:hover { text-decoration: underline; }
          .num { font-variant-numeric: tabular-nums; white-space: nowrap; }
          .imgs { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
          .imgs img { width: 56px; height: 40px; object-fit: cover; border-radius: 6px; border: 1px solid var(--line); }
        </style>
      </head>
      <body>
        <main>
          <xsl:choose>
            <xsl:when test="s:sitemapindex">
              <h1>Sitemap index</h1>
              <p><xsl:value-of select="count(s:sitemapindex/s:sitemap)"/> sitemap(s) · carlosnavarrete.cl</p>
              <div class="card">
                <table>
                  <tr><th>Sitemap</th><th>Last modified</th></tr>
                  <xsl:for-each select="s:sitemapindex/s:sitemap">
                    <tr>
                      <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                      <td class="num"><xsl:value-of select="s:lastmod"/></td>
                    </tr>
                  </xsl:for-each>
                </table>
              </div>
            </xsl:when>
            <xsl:otherwise>
              <h1>Sitemap</h1>
              <p><xsl:value-of select="count(s:urlset/s:url)"/> pages · <xsl:value-of select="count(s:urlset/s:url/image:image)"/> images · carlosnavarrete.cl</p>
              <div class="card">
                <table>
                  <tr><th>Page</th><th>Priority</th><th>Updates</th><th>Last modified</th></tr>
                  <xsl:for-each select="s:urlset/s:url">
                    <tr>
                      <td>
                        <a href="{s:loc}"><xsl:value-of select="s:loc"/></a>
                        <xsl:if test="image:image">
                          <div class="imgs">
                            <xsl:for-each select="image:image">
                              <a href="{image:loc}"><img src="{image:loc}" alt="" loading="lazy"/></a>
                            </xsl:for-each>
                          </div>
                        </xsl:if>
                      </td>
                      <td class="num"><xsl:value-of select="s:priority"/></td>
                      <td><xsl:value-of select="s:changefreq"/></td>
                      <td class="num"><xsl:value-of select="s:lastmod"/></td>
                    </tr>
                  </xsl:for-each>
                </table>
              </div>
            </xsl:otherwise>
          </xsl:choose>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
