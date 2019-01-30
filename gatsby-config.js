require('dotenv').config({ path: './.env.development' })
module.exports = {
  siteMetadata: {
    title: `Tom Settle`,
    description: `This site is about Tom Settle`,
    author: `tom settle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
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
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GATSBY_API_URL,
        query: `{
            posts(orderBy: createdAt_DESC) {
              id
              createdAt
              title
              authorPost {
                id
                name
                avatar {
                  url
                }
              }
              slug
              content
              tags
              coverImage {
                url
              }
            },
            authors {
              id
              name
              bibliography
              avatar {
                url
              }
              posts {
                slug
                title
                createdAt
              }
            }
        }`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
