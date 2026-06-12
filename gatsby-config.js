module.exports = {
  siteMetadata: {
    title: "Dr. Eng. Carlos Navarrete",
    description:
      "Carlos Navarrete is a faculty member at the Faculty of Engineering, Universidad de Concepción, and board member of the Center for Data and Artificial Intelligence (CDIA). His research spans computational social science, electoral divisiveness, innovation metrics, and AI applied to socio-economic systems.",
    author: "Carlos Navarrete",
    siteUrl: "https://carlosnavarrete.cl",
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
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Dr. Eng. Carlos Navarrete",
        short_name: "Dr. Navarrete",
        start_url: "/",
        background_color: "#05070d",
        theme_color: "#05070d",
        display: "minimal-ui",
        icon: "src/assets/icon.png"
      }
    },
  ],
};
