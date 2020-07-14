const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    {
      allContentfulBlog(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allContentfulBlog.edges.forEach(({ node }) => {
    if (node.slug) {
      createPage({
        path: `/blog/${node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
        }, // additional data can be passed via context
      })
    }
  })
}
