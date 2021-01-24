import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

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
              <Img className="rounded-full p-4" fixed={image} />
              <h2 className="block text-4xl mt-4">Steve Gray</h2>
              <h3 className="block text-3xl text-gray-400">
                Software Engineer
              </h3>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Headshot;
