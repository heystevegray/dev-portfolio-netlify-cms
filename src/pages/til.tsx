import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Preview from "../components/Preview";
import { FormControlLabel, Switch } from "@material-ui/core";

import "../assets/styles.css";

const localStorageKey = "heystevegray-tldr";

export default function til({ data }) {
  const initialState =
    JSON.parse(localStorage.getItem(localStorageKey)) || false;
  const [isTldr, setIsTldr] = useState(initialState);

  const handleToggle = (): void => {
    const value = !isTldr;
    setIsTldr(value);
    localStorage.setItem(localStorageKey, `${value}`);
  };

  return (
    <Layout>
      <SEO title="Today I Learned" />
      <section className="has-text-centered">
        <div className="container til-header">
          <h1 className="has-text-weight-bold is-size-1">Today I Learned</h1>
          <section className="section card-body">
            <FormControlLabel
              value="top"
              control={
                <Switch
                  checked={isTldr}
                  onChange={handleToggle}
                  name="checkedB"
                  color="primary"
                />
              }
              label="TLDR"
              labelPlacement="top"
            />
          </section>
        </div>
      </section>
      <div className="container post">
        <section className="section body">
          <div className="container">
            {data &&
              data?.allMarkdownRemark.edges?.map(({ node }) => {
                const { frontmatter, fields, rawMarkdownBody } = node;
                const regex = /# TLDR[^|]*$/;
                const tldr = regex.exec(rawMarkdownBody) || "";
                const final = tldr.toString().replace("# TLDR", "");

                return (
                  <Preview
                    key={fields.slug}
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
