import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { NAME } from "../lib/config";

const Bacon = () => {
  return (
    <Layout title="🥓">
      <SEO description="Bacon" />
      <div className="w-full place-items-center flex px-2 mb-20 justify-center">
        <img
          className="w-full max-w-2xl"
          src="https://media.giphy.com/media/xTiIzL9Btjx9hegHT2/giphy.gif"
          alt="Darth Sidious saying good"
        />
      </div>
    </Layout>
  );
};

export default Bacon;
