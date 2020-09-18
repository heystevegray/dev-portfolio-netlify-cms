import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import dayjs from "dayjs";
import Tags from "../components/Tags";
import SEO from "../components/seo";

import "../assets/styles.css";

export const TilPostTemplateQuery = graphql`
  query allTilPostsQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___publish_date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
            tldr
            publish_date
            tags
          }
        }
      }
    }
  }
`;

export default function til({ data }) {
  const [showTil, setShowTil] = useState(false)
  return (
    <Layout>
      <SEO title="Today I Learned" />
      <div className="container post">
        <section className="section has-text-centered">
          <div className="container">
            <h1 className="has-text-weight-bold is-size-1">Today I Learned</h1>
            <section className="section has-background-primary">
              <button
                className="button is-large is-dark"
                onClick={() => setShowTil(!showTil)}
              >
                TLDR
              </button>
            </section>
          </div>
        </section>
        <section className="section body">
          <div className="container">
            {data &&
              data?.allMarkdownRemark.edges?.map(({ node }) => {
                const image = node.frontmatter.image;

                return (
                  <Link
                    to={`/til${node.fields.slug}`}
                    className="box til-preview"
                    key={node.fields.slug}
                  >
                    <div className="card has-background-black-ter">
                      <div className="card-image">
                        {image && <Img fluid={image.childImageSharp.fluid} />}
                      </div>
                      <div className="card-content">
                        <p>
                          {dayjs(node.frontmatter.publish_date).format(
                            "MMM D, YYYY"
                          )}
                        </p>
                        <p className="title is-4">{node.frontmatter.title}</p>
                        {node.frontmatter.description && (
                          <p className="subtitle is-6">
                            {node.frontmatter.description}
                          </p>
                        )}
                        <Tags
                          centered={false}
                          maxTags={4}
                          tags={node.frontmatter.tags}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
