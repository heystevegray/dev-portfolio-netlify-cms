import React, { ReactElement } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const App = (): ReactElement => {
  return (
    <Layout isHome={true} title="Home" showHeadshot fullHeight>
      <SEO title="Steve Gray" description="Software Engineer" />
      <div className="justify-center text-2xl grid xs:gap-6 gap-4 grid-flow-col auto-cols-max mt-6">
        <Link to="/projects">Projects</Link>
        <Link to="/til">TIL</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </Layout>
  );
};

export default App;
