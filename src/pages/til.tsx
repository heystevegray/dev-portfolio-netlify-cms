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
            description
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
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
            <div className="container">
              {data &&
                data?.allMarkdownRemark.edges?.map(({ node }) => {
                  const image = node.frontmatter.image
                  console.log({ node })

                  return (
                    <Link
                      to={`/til${node.fields.slug}`}
                      className="box tilPreview"
                      key={node.fields.slug}
                    >
                      <div className="card has-background-black-bis">
                        <div className="card-image">
                          {image && <Img fluid={image.childImageSharp.fluid} />}
                        </div>
                        <div className="card-content">
                          <p className="title is-centered is-4">
                            {node.frontmatter.title}
                          </p>
                          <p className="subtitle is-6">
                            {node.frontmatter.description}
                          </p>
                          <p>
                            {dayjs(node.frontmatter.publish_date).format(
                              "MMM D, YYYY"
                            )}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}
