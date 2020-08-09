import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"
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
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="card">
        <h2>{title}</h2>
        <p>{dayjs(publish_date).format("dddd, MMMM D, YYYY h:mm A")}</p>
        {description && <div> {description}</div>}
        {image && <Img fixed={image.childImageSharp.fixed} />}
        <div
          className="card-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}
export default TilPost
