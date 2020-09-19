import React, { ReactElement } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import dayjs from "dayjs";
import Layout from "../layout";
import Tags from "../Tags";
import SEO from "../seo";
import { mdiCalendar, mdiCalendarSync } from "@mdi/js";
import "../../assets/sass/components/tilpost.scss";
import Icon from "@mdi/react";

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
`;

const TilPost = ({ data }): ReactElement => {
  const {
    title,
    description,
    publish_date,
    image,
    updated,
    tags,
  } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={`${title}`} />
      <div className="">
        <section className="section">
          <div className="container post">
            <section className="hero til-post-body has-navbar has-text-centered is-small has-background-black-ter">
              <div className="hero-body  ">
                <div className="column">
                  <div className="columns">
                    <div className="column">
                      <div className="column">
                        {image && <Img fixed={image.childImageSharp.fixed} />}
                      </div>
                      <h1 className="title">{title}</h1>
                      {description && (
                        <h2 className="subtitle">{description}</h2>
                      )}
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
                                      "MMM D, YYYY @ h:mm A"
                                    )}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
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
                                  {dayjs(updated).format(
                                    "MMM D, YYYY @ h:mm A"
                                  )}
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
              <Tags tags={tags} />
              <br />
              <br />
              {html && (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              )}
            </section>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default TilPost;
