import React, { ReactElement } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../assets/index.css";
import "../assets/sass/index.scss";
import Img from "gatsby-image";

const IndexPage = ({ data }): ReactElement => {
  const image = data?.file?.childImageSharp?.fixed;

  return (
    <Layout>
      <SEO title="Developer Portfolio" />
      <section className="hero is-fullheight has-text-centered has-background-black-bis">
        <div className="hero-body">
          <div className="container">
            {image && <Img className="p-1 logo" fixed={image} />}
            <h1 className="title is-1">Steve Gray</h1>
            <div className="container">
              <h2 className="title is-2">Software Engineer</h2>
              <h3 className="subtitle">{`React | Typescript`}</h3>
              <div className="contents">
                <div className="">
                  <Link to="/projects">Projects</Link>
                </div>
                <div className="">
                  <Link to="/til">Today I Learned</Link>
                </div>
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
