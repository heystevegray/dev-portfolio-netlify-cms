import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import dayjs from "dayjs";
import TLDR from "./TLDR";
import BlogCard from "../components/Cards/BlogCard";

import "../assets/styles.css";
import Tags, { Tag } from "./Tags";

export interface Preview {
  image: any;
  publish_date: string;
  description: string;
  title: string;
  tldr: string;
  tags: Tag[];
}

export interface Fields {
  slug: string;
}

export interface PreviewProps {
  frontmatter: Preview;
  fields: Fields;
  tldr: string;
  isTldr: boolean;
}

export default function Preview({ frontmatter, fields, isTldr }: PreviewProps) {
  const { image } = frontmatter;

  const body = (
    <div>
      {isTldr ? (
        <TLDR frontmatter={frontmatter} />
      ) : (
        <BlogCard frontmatter={frontmatter} fields={fields} image={image} />
      )}
      <div className="card-content">
        <Tags maxTags={4} tags={frontmatter.tags} />
      </div>
    </div>
  );

  return (
    <div>
      {isTldr ? (
        <div className="box">{body}</div>
      ) : (
        <Link
          to={`${fields.slug}`}
          className="box til-preview preview"
          key={fields.slug}
        >
          {body}
        </Link>
      )}
    </div>
  );
}
