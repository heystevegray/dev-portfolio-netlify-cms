import React, { ReactElement } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"
import { kebabCase } from "lodash"
import Layout from "../layout"

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
      <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
        {title}
      </h1>
      {image && <Img fixed={image.childImageSharp.fixed} />}
      <p>{dayjs(publish_date).format("dddd, MMMM D, YYYY h:mm A")}</p>
      {description && <div> {description}</div>}
      {html && (
        <div
          className="card-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      {tags && tags.length ? (
        <div>
          <h2>Tags</h2>
          <ul className="taglist">
            {tags.map((tag: string) => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Layout>
  )
}
export default TilPost
