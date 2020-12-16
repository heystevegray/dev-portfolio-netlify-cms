import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Preview from "../components/Preview";
import { FormControlLabel, Switch } from "@material-ui/core";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";

import "../assets/styles.css";
import "../assets/sass/components/til.scss";
import Title from "../components/Title/Title";

const localStorageKey = "heystevegray-tldr";
const windowGlobal = typeof window !== "undefined" && window;

const CustomSwitch = withStyles((theme: Theme) =>
  createStyles({
    switchBase: {
      color: "var(--accent-color)",
      "&$checked": {
        color: "var(--accent-color)",
      },
      "&$checked + $track": {
        backgroundColor: "var(--accent-color)",
      },
    },
    checked: {},
    track: {
      backgroundColor: theme.palette.grey[500],
    },
  })
)(Switch);

export default function til({ data }) {
  const [isTldr, setIsTldr] = useState(false);

  const handleToggle = (): void => {
    const value = !isTldr;
    setIsTldr(value);

    try {
      windowGlobal?.localStorage?.setItem(localStorageKey, `${value}`);
    } catch (error) {}
  };

  useEffect(() => {
    const storage = windowGlobal?.localStorage?.getItem(localStorageKey);
    const initialState = JSON.parse(storage ?? "false");
    setIsTldr(initialState);
  }, []);

  return (
    <Layout>
      <SEO title="Steve Gray" description="Today I Learned" />
      <Title title="Today I Learned" />
      <div className="tldr-switch">
        <FormControlLabel
          value="top"
          control={
            <CustomSwitch
              checked={isTldr}
              size="medium"
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
      filter: { fields: { slug: { regex: "/til/" } } }
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
