import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"

export const TilPostTemplateQuery = graphql`
  query allTilPostsQuery {
    markdownRemark {
      fields {
        slug
      }
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 200) {
              src
            }
          }
        }
        publish_date
        tags
      }
    }
  }
`

export default function til({ data }) {
  const { title, publish_date, image, tags } = data.markdownRemark.frontmatter
  const { slug } = data.markdownRemark.fields
  console.log({ slug })

  return (
    <Layout>
      <div className="full-width-image-container margin-top-0">
        <h1 className="has-text-weight-bold is-size-1">New Lessons</h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="card">
              <div className="card-image">
                {image && <Img fixed={image.childImageSharp.fixed} />}
              </div>
              <div className="card-content">
                <div className="content">
                  <Link to={`/til${slug}`}>
                    <h3 className="title is-4">{title}</h3>
                    <time className="subtitle is-6">
                      {dayjs(publish_date).format("dddd, MMMM D, YYYY")}
                    </time>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
