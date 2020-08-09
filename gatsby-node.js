/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

async function getPageData(graphql) {
  return await graphql(`
    {
      tilPosts: allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              publish_date
              updated
              image
              tags
            }
            html
          }
        }
      }
    }
  `)
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await getPageData(graphql)
  data.tilPosts.edges.forEach(({ node }) => {
    const { slug } = node.fields
    console.log(`Found post /til${slug}`)
    actions.createPage({
      path: `/til${slug}`,
      component: path.resolve("./src/components/templates/TilPost.tsx"),
      context: { slug: slug },
    })
  })
}
