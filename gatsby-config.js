module.exports = {
  siteMetadata: {
    title: "Carlos Navarrete — Generative AI and the future of society",
    description:
      "Carlos Navarrete is Assistant Professor at the Faculty of Engineering, Universidad de Concepción, board member of its Center for Data and Artificial Intelligence (CDIA) and associate researcher at the Millennium Nucleus MEPOP. He studies generative AI as the industrial revolution of our time — its effects on work, education, public debate and democracy.",
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
