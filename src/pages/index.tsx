import React, { ReactElement } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../assets/index.css";
import Img from "gatsby-image";

const IndexPage = ({ data }): ReactElement => {
  const image = data?.file?.childImageSharp?.fixed;

  return (
    <Layout>
      <SEO title="Steve Gray" description="Software Engineer" />
      <section className="hero is-fullheight has-text-centered has-background-black-bis">
        <div className="hero-body">
          <div className="container">
            {image && <Img className="p-1 logo" fixed={image} />}
            <h1 className="block text-5xl mt-4">Steve Gray</h1>
            <h2 className="block text-4xl text-gray-500">Software Engineer</h2>
            <div className="justify-center grid gap-4 grid-flow-col auto-cols-max">
              <div className="lg:text-2xl text-xl">
                <Link to="/projects">Projects</Link>
              </div>
              <div className="lg:text-2xl text-xl">
                <Link to="/til">Today I Learned</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
