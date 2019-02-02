/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    graphql(`
      {
        allPost {
          totalCount
          edges {
            node {
              title
              preview
              content
              slug
              tags
              dateAndTime(formatString: "DD MM YYYY")
              id
              coverImage {
                url
              }
              authorPost {
                id
                name
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Create blog post pages.
      result.data.allPost.edges.forEach(post => {
        createPage({
          // Path for this page — required
          path: `/blog/${post.node.slug}`,
          component: blogPostTemplate,
          context: {
            slug: post.node.slug,
          },
        })
      })
      resolve()
    })
  })
}
