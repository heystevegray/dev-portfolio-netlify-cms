import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="mt-40 flex flex-col text-2xl text-white text-center">
      <h1 className="text-center text-5xl">Whoops...</h1>
      <p className="text-center mt-5">
        Um.. this is not the page you are looking for{" "}
        <span role="img" aria-label="hand wave">
          👋
        </span>
      </p>
      <div className="text-center my-10">
        <Link to="/">← Go Home</Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
