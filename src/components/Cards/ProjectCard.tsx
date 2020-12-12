import React from "react";
import Img from "gatsby-image";
import dayjs from "dayjs";
import { Fields, Frontmatter } from "../Preview";
import Tags from "../Tags";
import { mdiGit } from "@mdi/js";
import Icon from "@mdi/react";

interface Props {
  frontmatter: Frontmatter;
}

export default function ProjectCard({ frontmatter }: Props) {
  const image = frontmatter.image;

  console.log({ image });

  return (
    <div className="card">
      <div className="bg-red-900 p-2">
        <div className="rounded p-10">
          {image && <Img fixed={image.childImageSharp.fixed} />}
        </div>
        <div className="">
          <div className="">
            <p>{dayjs(frontmatter.publish_date).format("MMM D, YYYY")}</p>
            <p className="">{frontmatter.title}</p>
            <p className="">{frontmatter.description}</p>
            {frontmatter.github && (
              <a
                className="socials__link"
                aria-label="steve gray on npm"
                href="https://www.npmjs.com/~heystevegray"
                target="_blank"
              >
                <Icon className="column is-primary" path={mdiGit} size={3} />
              </a>
            )}
            <Tags tags={frontmatter.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
