require('dotenv').config({ path: './.env.development' })
module.exports = {
  siteMetadata: {
    title: `tom settle`,
    description: `This is a site about tom settle`,
    author: `tom settle`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        mdx: true,
        basePath: `/photos`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134285442-1',
        // Puts tracking script in the head instead of the body
        head: false,
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
    `gatsby-plugin-offline`,
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: 'Blog',
    //     // This is field under which it's accessible
    //     fieldName: 'blog',
    //     // Url to query from
    //     url: process.env.GATSBY_API_URL,
    //   },
    // },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GATSBY_API_URL,
        query: `{
            posts(orderBy: dateAndTime_DESC) {
              id
              status
              dateAndTime
              title
              readTime
              preview
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
            projects {
              id
              name
              displayImage {
                url
              }
              description
              link
              sourceCode
            }
        }`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
