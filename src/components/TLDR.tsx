import React from "react";
import { Frontmatter } from "./Preview";
import dayjs from "dayjs";
import Markdown from "markdown-to-jsx";
import Img from "gatsby-image";

interface Props {
  frontmatter: Frontmatter;
}

export default function TLDR({ frontmatter }: Props) {
  const { title, publish_date, tldr } = frontmatter;

  return (
    <div className="post">
      <div className="card has-background-black-ter tldr">
        <div className="card-body">
          <p>{dayjs(publish_date).format("MMM D, YYYY")}</p>
          <p className="title is-4">{title}</p>
          {tldr && <Markdown>{tldr}</Markdown>}
        </div>
      </div>
    </div>
  );
}
