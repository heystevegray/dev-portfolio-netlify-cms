import React from "react";
import Contact from "../components/Contact/Contact";
import Title from "../components/Title/Title";
import Layout from "../components/layout";
import SEO from "../components/seo";

const contact = () => {
  return (
    <Layout>
      <SEO title="Steve Gray" description="Contact me" />
      <Title title="Contact me" />
      <div className="mb-40">
        <Contact />
      </div>
    </Layout>
  );
};

export default contact;
