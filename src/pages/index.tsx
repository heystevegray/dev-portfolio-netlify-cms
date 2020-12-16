import React, { ReactElement } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../assets/index.css";
import Headshot from "../components/Headshot/Headshot";

const IndexPage = (): ReactElement => {
  return (
    <Layout isHome={true}>
      <SEO title="Steve Gray" description="Software Engineer" />
      <section className="hero is-fullheight has-text-centered has-background-black-bis">
        <div className="hero-body">
          <div className="container">
            <Headshot />
            <h1 className="block text-5xl mt-4">Steve Gray</h1>
            <h2 className="block text-4xl text-gray-500">Software Engineer</h2>
            <div className="justify-center lg:text-2xl md:text-xl text-md grid gap-4 grid-flow-col auto-cols-max">
              <div className="">
                <Link to="/projects">Projects</Link>
              </div>
              <div className="">
                <Link to="/til">Today I Learned</Link>
              </div>
              <div className="">
                <Link to="/about">About</Link>
              </div>
              <div className="">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
