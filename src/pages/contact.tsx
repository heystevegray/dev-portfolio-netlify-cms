import React from "react";
import Contact from "../components/Contact/Contact";
import Layout from "../components/layout";
import SEO from "../components/seo";

const contact = () => {
  return (
    <Layout title="Contact me">
      <SEO description="Contact me" />
      <div className="mb-40">
        <Contact />
      </div>
    </Layout>
  );
};

export default contact;
