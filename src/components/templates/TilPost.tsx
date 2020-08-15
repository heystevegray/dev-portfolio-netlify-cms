import React, { ReactElement } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"
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
    updated,
    tags,
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <SEO title={`${title}`} />
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/til">Today I Learned</Link>
          </li>
          <li className="is-active">
            <Link to="#" aria-current="page">
              {title}
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
        {title}
      </h1>
      {image && <Img fixed={image.childImageSharp.fixed} />}
      {publish_date && (
        <p>
          Published on {dayjs(publish_date).format("dddd, MMMM D, YYYY h:mm A")}
        </p>
      )}
      {updated && (
        <p>Updated on {dayjs(updated).format("dddd, MMMM D, YYYY h:mm A")}</p>
      )}
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
