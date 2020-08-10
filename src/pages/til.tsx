import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"
import "../assets/styles.css"

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
            fixed {
              ...GatsbyImageSharpFixed
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
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-5x5">
                  <Img fixed={image.childImageSharp.fixed} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <time>
                  {dayjs(publish_date).format("dddd, MMMM D, YYYY h:mm A")}
                </time>
              </div>
              <Link to={`/til${slug}`}>
                <button className="button is-primary">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
