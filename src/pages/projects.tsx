import React, { ReactElement } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../assets/styles.css";
import "../assets/sass/index.scss";
import ProjectCard from "../components/Cards/ProjectCard";

const ProjectsPage = ({ data }): ReactElement => {
  console.log({ data });

  return (
    <Layout>
      <SEO title="Projects" />
      <section className="hero is-fullheight has-text-centered has-background-black-bis">
        <div className="hero-body">
          <div className="container til-card-container post">
            <section className="section body">
              <div className="container">
                {data &&
                  data?.allMarkdownRemark.edges?.map(
                    ({ node }, index: number) => {
                      const { frontmatter } = node;
                      console.log({ frontmatter });

                      return (
                        <ProjectCard key={index} frontmatter={frontmatter} />
                      );
                    }
                  )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;

export const ProjectstTemplateQuery = graphql`
  query allProjects {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/projects/" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            updated
            tags
            github
            demo
            image {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
