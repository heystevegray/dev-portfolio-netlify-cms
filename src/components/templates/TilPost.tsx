import React, { ReactElement } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"
import Layout from "../layout"
import Tags from "../Tags"
import SEO from "../seo"
import { mdiCalendar, mdiCalendarSync } from "@mdi/js"
import "../../assets/sass/components/tilpost.scss"
import Icon from "@mdi/react"

export const TilPostTemplateQuery = graphql`
  query TilPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fixed(width: 125, height: 125) {
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
      <section className="section">
        <div className="container post">
          <section className="hero has-text-centered is-small has-background-black-bis">
            <div className="hero-body">
              <div className="column">
                {image && <Img fixed={image.childImageSharp.fixed} />}
              </div>
              <div className="columns is-vcentered">
                <div className="column">
                  <h1 className="title">{title}</h1>
                  {description && <h2 className="subtitle">{description}</h2>}
                  <div className="column">
                    <div className="columns is-centered">
                      <div className="column is-narrow">
                        {publish_date && (
                          <div className="columns">
                            <div className="column is-narrow">
                              <Icon
                                path={mdiCalendar}
                                title="Published"
                                size={1}
                              />
                            </div>
                            <div className="column is-narrow">
                              <p>
                                {dayjs(publish_date).format(
                                  "MMMM D, YYYY @ h:mm A"
                                )}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="column is-narrow">
                        {updated && (
                          <div className="columns">
                            <div className="column is-narrow">
                              <Icon
                                path={mdiCalendarSync}
                                title="Published"
                                size={1}
                              />
                            </div>
                            <div className="column is-narrow">
                              <p>
                                {dayjs(updated).format("MMMM D, YYYY @ h:mm A")}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            {html && (
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}
          </section>
          <Tags tags={tags} />
        </div>
      </section>
    </Layout>
  )
}
export default TilPost
