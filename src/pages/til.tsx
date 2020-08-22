import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../assets/styles.css"
import Tags from "../components/Tags"
import SEO from "../components/seo"
import Preview from "../components/Preview"

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
  const [showTil, setShowTil] = useState(false)
  return (
    <Layout>
      <SEO title="Today I Learned" />
      <div className="container post">
        <section className="section has-text-centered">
          <div className="container">
            <h1 className="has-text-weight-bold is-size-1">Today I Learned</h1>
            <section className="section has-background-primary">
              <button
                className="button is-large is-dark"
                onClick={() => setShowTil(!showTil)}
              >
                TLDR
              </button>
            </section>
          </div>
        </section>
        <section className="section body">
          <div className="container">
            {data &&
              data?.allMarkdownRemark.edges?.map(({ node }) => {
                return (
                  <Preview
                    title={node.frontmatter.title}
                    description={node.frontmatter.description}
                    publish_date={node.frontmatter.publish_date}
                    image={node.frontmatter.image}
                    slug={node.fields.slug}
                    showTil={showTil}
                    tldr={node.frontmatter.tldr}
                  />
                )
              })}
          </div>
        </section>
      </div>
    </Layout>
  )
}
