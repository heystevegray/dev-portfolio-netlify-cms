import React from "react";
import Headshot from "../components/Headshot/Headshot";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "../components/Link/Link";

const about = () => {
  return (
    <Layout title="About" showHeadshot>
      <SEO title="Steve Gray" description="About me" />
      <div className="text-white flex justify-center mb-20">
        <div className="px-5 max-w-md">
          <p className="mt-6 text-lg">
            Hey I'm Steve Gray. I build web applications with{" "}
            {<Link text="React" href="https://reactjs.org/" />},{" "}
            {<Link text="TypeScript" href="https://www.typescriptlang.org/" />},
            and {<Link text="GraphQL" href="https://graphql.org/" />}. I enjoy
            learning about web development and sharing my knowledge with others.
          </p>
          <p className="mt-4 text-lg">
            Outside of coding I'm an EDM producer, drummer, pianist, and
            professional Netflix-er. I have also been teaching myself about
            photography and video editing.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
