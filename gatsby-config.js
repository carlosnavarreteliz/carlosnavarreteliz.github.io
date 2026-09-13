module.exports = {
  siteMetadata: {
    title: "Dr. Eng. Carlos Navarrete",
    description:
      "Carlos Navarrete is a faculty member at the Faculty of Engineering, Universidad de Concepción, and board member of the Center for Data and Artificial Intelligence (CDIA). He builds applied generative-AI systems and researches computational social science, electoral divisiveness, and innovation metrics.",
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
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Dr. Eng. Carlos Navarrete",
        short_name: "Dr. Navarrete",
        start_url: "/",
        background_color: "#faf8f5",
        theme_color: "#a41034",
        display: "minimal-ui",
        icon: "src/assets/icon.png"
      }
    },
  ],
};
