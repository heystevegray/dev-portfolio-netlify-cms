import React from "react";
import Img from "gatsby-image";
import dayjs from "dayjs";
import { Fields, Frontmatter } from "../Preview";

interface Props {
  frontmatter: Frontmatter;
  fields: Fields;
  image: any;
}

export default function BlogCard({ frontmatter, image }: Props) {
  return (
    <div className="card">
      <div className="faded-image">
        {image && <Img fluid={image.childImageSharp.fluid} />}
      </div>
      <div className="faded-content card-body">
        <div className="card-content">
          <p>{dayjs(frontmatter.publish_date).format("MMM D, YYYY")}</p>
          <p className="title is-4">{frontmatter.title}</p>
          <p className="subtitle is-6">
            {frontmatter.description || "Click for more details."}
          </p>
        </div>
      </div>
    </div>
  );
}
