import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "../components/Link/Link";
import { Button } from "@material-ui/core";
import { NAME } from "../lib/config";

const about = () => {
  return (
    <Layout title="About" showHeadshot>
      <SEO description="About me" />
      <div className="text-white flex justify-center">
        <div className="px-5 max-w-md mb-40">
          <p className="mt-6 text-lg">
            Hey I'm {NAME}. I build web applications with{" "}
            {<Link text="React" href="https://reactjs.org/" />},{" "}
            {<Link text="TypeScript" href="https://www.typescriptlang.org/" />},
            and {<Link text="GraphQL" href="https://graphql.org/" />}. I'm
            currently a big fan of{" "}
            {<Link text="Next.js" href="https://nextjs.org/" />},{" "}
            {<Link text="Prisma" href="https://www.prisma.io/" />}, and{" "}
            {<Link text="Material-UI" href="https://mui.com/" />}. I enjoy
            learning about web development and sharing my knowledge with others.
          </p>
          <p className="mt-4 text-lg">
            Outside of coding I'm an EDM producer, drummer, pianist, and
            professional Netflix-er. I have also been teaching myself about
            photography and video editing.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              color="primary"
              variant="contained"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1OU1LGi3M0ncCRIBptJVO2Pxey5r16zSn/view?usp=share_link",
                  "_blank"
                )
              }
            >
              View PDF Resume
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
