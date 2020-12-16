import React from "react";
import Headshot from "../components/Headshot/Headshot";
import Layout from "../components/layout";
import Link from "../components/Link/Link";
import SEO from "../components/seo";
import Title from "../components/Title/Title";

const about = () => {
  return (
    <Layout>
      <SEO title="Steve Gray" description="About me" />
      <div className="text-white md:text-xl place-self-center max-w-2xl mb-40">
        <Title title="About me" />
        <div className="hero-body md:mt-20 items-center flex flex-col place-self-center md:flex-row">
          <div className="ml-4">
            <Headshot />
          </div>
          <div className="px-5 md:ml-4 pt-8 md:pt-0">
            <p>
              Hey I'm Steve Gray. I'm a Software Engineer currently interested
              in {<Link text="React" href="https://reactjs.org/" />},{" "}
              {
                <Link
                  text="TypeScript"
                  href="https://www.typescriptlang.org/"
                />
              }
              , and {<Link text="GraphQL" href="https://graphql.org/" />}. I
              really enjoy learning about web development, and sharing my
              knowledge with others.
            </p>
            <p className="pt-5">
              Outside of coding, I'm an EDM producer, drummer, pianist, and
              professional Netflix-er. I've also been teaching myself about
              photography and video editing.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
