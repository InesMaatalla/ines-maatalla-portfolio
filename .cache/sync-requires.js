const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/About.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/Projects.js"))),
  "component---src-pages-stacks-js": hot(preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/Stacks.js"))),
  "component---src-pages-videos-js": hot(preferDefault(require("/Users/inesmaatalla/ines-maatalla-portfolio/src/pages/Videos.js")))
}

