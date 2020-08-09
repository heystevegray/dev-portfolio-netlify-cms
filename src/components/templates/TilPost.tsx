import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import dayjs from "dayjs"

export const TilPostTemplateQuery = graphql`
  query TilPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        image
        publish_date
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
        <p>
          {dayjs(data.markdownRemark.frontmatter.publish_date).format(
            "dddd, MMMM D, YYYY h:mm A"
          )}
        </p>
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
