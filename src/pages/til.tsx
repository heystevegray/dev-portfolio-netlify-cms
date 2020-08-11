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
      <div className="full-width-image-container margin-top-0">
        <h1 className="has-text-weight-bold is-size-1">Today I Learned</h1>
      </div>
      <section className="section">
        {data &&
          data?.allMarkdownRemark.edges?.map(({ node }) => {
            return (
              <div className="box" key={node.fields.slug}>
                <div className="columns is-vcentered">
                  {/* <div className="column is-one-fifth">
                    <figure className="image is-100x100">
                      <Img
                        fixed={node.frontmatter.image.childImageSharp.fixed}
                      />
                    </figure>
                  </div> */}
                  <div className="column is-three-quarters">
                    <p className="title is-4">{node.frontmatter.title}</p>
                    <p className="subtitle is-6">
                      {dayjs(node.frontmatter.publish_date).format(
                        "dddd, MMMM D, YYYY h:mm A"
                      )}
                    </p>
                    <Tags tags={node.frontmatter.tags} />
                  </div>
                  <div className="column is-one-quarter">
                    <Link to={`/til${node.fields.slug}`}>
                      <button className="button is-primary is-large is-fullwidth">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
      </section>
    </Layout>
  )
}
