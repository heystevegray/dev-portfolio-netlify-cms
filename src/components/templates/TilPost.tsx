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
      <div className="md:-mt-24 -mt-5">
        <section className="section">
          <div className="container post">
            <Link to="/til" className="">
              {"← Today I Learned"}
            </Link>
            <section className="hero til-post-body has-navbar has-text-centered is-small has-background-black-ter">
              <div className="hero-body">
                <div className="column">
                  <div className="columns">
                    <div className="column">
                      <div className="column">
                        {image && (
                          <Img
                            className="rounded-full"
                            fixed={image.childImageSharp.fixed}
                          />
                        )}
                      </div>
                      <h1 className="title">{title}</h1>
                      {description && (
                        <h2 className="subtitle">{description}</h2>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="flex justify-center mb-10">
                <Tags className="justify-center" tags={tags} />
              </div>
              <div className="columns is-centered">
                <div className="column is-narrow">
                  {publish_date && (
                    <div className="columns is-centered is-mobile">
                      <div className="column is-narrow">
                        <Icon path={mdiCalendar} title="Published" size={1} />
                      </div>
                      <div className="column is-narrow">
                        <p>
                          {dayjs(publish_date).format("MMM D, YYYY @ h:mm A")}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="column is-narrow">
                  {updated && (
                    <div className="columns is-centered is-mobile">
                      <div className="column is-narrow">
                        <Icon
                          path={mdiCalendarSync}
                          title="Published"
                          size={1}
                        />
                      </div>
                      <div className="column is-narrow">
                        <p>{dayjs(updated).format("MMM D, YYYY @ h:mm A")}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {html && (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              )}
              <div className="mt-20">
                <Link to="/til">{"← Today I Learned"}</Link>
              </div>
            </section>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default TilPost;

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
