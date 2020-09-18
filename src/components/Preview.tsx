import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import dayjs from "dayjs";
import TLDR from "./TLDR";
import BlogCard from "../components/Cards/BlogCard";

import "../assets/styles.css";
import Tags, { Tag } from "./Tags";

export interface Frontmatter {
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
  frontmatter: Frontmatter;
  fields: Fields;
  tldr: string;
  isTldr: boolean;
}

export default function Preview({ frontmatter, fields, isTldr }: PreviewProps) {
  const { image, title, description, publish_date, tldr } = frontmatter;
  const { slug } = fields;

  const body = (
    <div key={slug}>
      <div className="card has-background-black-ter">
        {isTldr ? (
          <TLDR
            title={title}
            tldr={tldr}
            publish_date={publish_date}
            description={description}
          />
        ) : (
          <BlogCard frontmatter={frontmatter} fields={fields} image={image} />
        )}
        <div className="card-content">
          <Tags centered={false} maxTags={4} tags={frontmatter.tags} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isTldr ? (
        <div className="box">{body}</div>
      ) : (
        <Link
          to={`/til${fields.slug}`}
          className="box til-preview preview"
          key={fields.slug}
        >
          {body}
        </Link>
      )}
    </>
  );
}
