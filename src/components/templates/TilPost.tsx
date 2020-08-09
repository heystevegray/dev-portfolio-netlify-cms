import React, { ReactElement } from "react"
import { graphql } from "gatsby"

export const TilPostTemplateQuery = graphql`
  query TilPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        image
        Publish_Date
        updated
        tags
      }
      html
    }
  }
`

const TilPost = ({ data }): ReactElement => {
  return (
    <div>
      <div>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <div> {data.markdownRemark.frontmatter.description}</div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </div>
  )
}
export default TilPost
