import React, { ReactElement } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"
import { kebabCase } from "lodash"
import Layout from "../layout"
import Tags from "../Tags"
import SEO from "../seo"

export const TilPostTemplateQuery = graphql`
  query TilPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 350) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        publish_date
        updated
        tags
      }
      html
    }
  }
`

const TilPost = ({ data }): ReactElement => {
  const {
    title,
    description,
    publish_date,
    image,
    tags,
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <SEO title={`Steve Gray | ${title}`} />
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="/til">Today I Learned</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              {title}
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
        {title}
      </h1>
      {image && <Img fixed={image.childImageSharp.fixed} />}
      <p>{dayjs(publish_date).format("dddd, MMMM D, YYYY h:mm A")}</p>
      {description && <div>{description}</div>}
      {html && (
        <div
          className="container content mt-4"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      <Tags tags={tags} />
    </Layout>
  )
}
export default TilPost
