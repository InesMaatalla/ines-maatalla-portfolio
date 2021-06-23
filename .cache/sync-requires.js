
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/About.js")),
  "component---src-pages-destinations-js": preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/Destinations.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/index.js")),
  "component---src-pages-western-canada-js": preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/WesternCanada.js"))
}

