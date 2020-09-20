import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Preview from "../components/Preview";
import { FormControlLabel, Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "../assets/styles.css";
import "../assets/sass/components/til.scss";

const localStorageKey = "heystevegray-tldr";

const CustomSwitch = withStyles({
  switchBase: {
    color: "#1abc9c",
    "&$checked": {
      color: "#1abc9c",
    },
    "&$checked + $track": {
      backgroundColor: "#1abc9c",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function til({ data }) {
  const initialState =
    JSON.parse(window?.localStorage?.getItem(localStorageKey)) || false;
  const [isTldr, setIsTldr] = useState(initialState);

  const handleToggle = (): void => {
    const value = !isTldr;
    setIsTldr(value);

    try {
      window?.localStorage?.setItem(localStorageKey, `${value}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <SEO title="Today I Learned" />
      <section className="section has-text-centered card-body">
        <div className="container">
          <section className="section card-body">
            <h1 className="til-header has-text-weight-bold is-size-1">
              Today I Learned
            </h1>
          </section>
        </div>
      </section>
      <div className="tldr-switch">
        <FormControlLabel
          value="top"
          control={
            <CustomSwitch
              checked={isTldr}
              onChange={handleToggle}
              name="checkedB"
              color="primary"
            />
          }
          label="TLDR"
          labelPlacement="end"
        />
      </div>
      <div className="container til-card-container post">
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
