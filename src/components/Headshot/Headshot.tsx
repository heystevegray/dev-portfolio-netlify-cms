import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";
import { JOB_TITLE, NAME } from "../../lib/config";

const Headshot = () => {
  return (
    <div>
      <StaticQuery
        query={graphql`
          query {
            file(relativePath: { eq: "logo.jpeg" }) {
              childImageSharp {
                fixed(width: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={(data) => {
          const image = data?.file?.childImageSharp?.fixed;
          return (
            <div className="text-center">
              <Img className="rounded-full" fixed={image} />
              <p className="m-0 block text-4xl mt-2">{NAME}</p>
              <p className="block text-2xl text-gray-400">{JOB_TITLE}</p>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Headshot;
