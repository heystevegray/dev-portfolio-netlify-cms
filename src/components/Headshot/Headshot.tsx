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
          return <Img className="rounded-full p-4" fixed={image} />;
        }}
      />
    </div>
  );
};

export default Headshot;
