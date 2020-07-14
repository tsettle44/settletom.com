require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Tom Settle`,
    description: `This is a site about Tom Settle`,
    author: `Tom Settle`,
  },
  plugins: [
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6j9npvulkk9y`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tom Settle`,
        short_name: `tomsettle`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tom.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `settletom`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
