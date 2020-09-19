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
    <div className="card has-background-black-ter">
      <div className="card-image">
        {image && <Img fluid={image.childImageSharp.fluid} />}
      </div>
      <div className="card-content card-body">
        <p>{dayjs(frontmatter.publish_date).format("MMM D, YYYY")}</p>
        <p className="title is-4">{frontmatter.title}</p>
        {frontmatter.description && (
          <p className="subtitle is-6">{frontmatter.description}</p>
        )}
      </div>
    </div>
  );
}
