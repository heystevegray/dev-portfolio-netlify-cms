import React, { ReactElement } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../assets/styles.css";
import "../assets/sass/index.scss";
import ProjectCard from "../components/Cards/ProjectCard";
import { Tag } from "../components/Tags";

export interface Project {
  image: any;
  updated: string;
  description: string;
  title: string;
  demo: string;
  github: string;
  tags: Tag[];
}

const ProjectsPage = ({ data }): ReactElement => {
  return (
    <Layout title="Projects">
      <SEO description="Projects" />
      <div className="w-full place-items-center flex flex-col px-2 mb-20">
        {data &&
          data?.allMarkdownRemark.edges?.map(({ node }, index: number) => {
            const { frontmatter } = node;
            return <ProjectCard key={index} project={frontmatter} />;
          })}
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const ProjectTemplateQuery = graphql`
  query allProjects {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
      sort: { fields: frontmatter___updated, order: DESC }
    ) {
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
              publicURL
              extension
            }
          }
        }
      }
    }
  }
`;
