import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import dayjs from "dayjs";
import Tags from "../components/Tags";
import SEO from "../components/seo";

import "../assets/styles.css";
import Preview from "../components/Preview";
import { node } from "prop-types";

export const TilPostTemplateQuery = graphql`
  query allTilPostsQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___publish_date, order: DESC }
    ) {
      edges {
        node {
          rawMarkdownBody
          fields {
            slug
          }
          frontmatter {
            title
            description
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
  const [isTldr, setIsTldr] = useState(true);
  return (
    <Layout>
      <SEO title="Today I Learned" />
      <div className="container post">
        <section className="section has-text-centered">
          <div className="container">
            <h1 className="has-text-weight-bold is-size-1">Today I Learned</h1>
            <section className="section">
              <button
                className="button is-large is-dark"
                onClick={() => setIsTldr(!isTldr)}
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
                const { frontmatter, fields, rawMarkdownBody } = node;
                console.log({ frontmatter });
                const regex = /# TLDR[^|]*$/;
                const tldr = regex.exec(rawMarkdownBody) || "";
                console.log({ tldr });

                const final = tldr.toString().replace("# TLDR", "");
                console.log({ final });

                return (
                  <Preview
                    tldr={final}
                    frontmatter={frontmatter}
                    fields={fields}
                    isTldr={isTldr}
                  />
                );
              })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
