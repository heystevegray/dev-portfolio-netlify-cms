import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"
import "../assets/styles.css"
import Tags from "../components/Tags"
import SEO from "../components/seo"

export const TilPostTemplateQuery = graphql`
  query allTilPostsQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___publish_date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fixed(width: 100, grayscale: true) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            publish_date
            tags
          }
        }
      }
    }
  }
`

export default function til({ data }) {
  return (
    <Layout>
      <SEO title="Today I Learned" />
      <section className="section">
        <div className="container post">
          <div className="has-text-centered">
            <div className="full-width-image-container margin-top-0">
              <h1 className="has-text-weight-bold is-size-1">
                Today I Learned
              </h1>
            </div>
          </div>
          <section className="section">
            {data &&
              data?.allMarkdownRemark.edges?.map(({ node }) => {
                return (
                  <Link
                    to={`/til${node.fields.slug}`}
                    className="box tilPreview"
                    key={node.fields.slug}
                  >
                    <div className="columns is-vcentered">
                      <div className="column">
                        <p className="title is-4">{node.frontmatter.title}</p>
                        <p className="subtitle is-6">
                          {dayjs(node.frontmatter.publish_date).format(
                            "dddd, MMMM D, YYYY h:mm A"
                          )}
                        </p>
                        <div className="column">
                          <Tags maxTags={4} tags={node.frontmatter.tags} />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </section>
        </div>
      </section>
    </Layout>
  )
}
