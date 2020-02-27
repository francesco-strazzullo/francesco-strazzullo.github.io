module.exports = {
  siteMetadata: {
    title: `Francesco Strazzullo`,
    description: `Francesco Strazzullo personal website`,
    author: `@TheStrazz86`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Francesco Strazzullo WebSite`,
        short_name: `Francesco Strazzullo`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#00589B`,
        display: `minimal-ui`,
        icon: `src/images/strazz-icon.png` // This path is relative to the root of the site.
      }
    }
  ]
}
