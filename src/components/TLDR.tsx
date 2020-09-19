import React from "react";
import { Frontmatter } from "./Preview";
import dayjs from "dayjs";
import Markdown from "markdown-to-jsx";

interface Props {
  frontmatter: Frontmatter;
}

export default function TLDR({ frontmatter }: Props) {
  const { title, description, publish_date, tldr } = frontmatter;

  return (
    <div className="card has-background-black-ter">
      <div className="card-content card-body">
        <p>{dayjs(publish_date).format("MMM D, YYYY")}</p>
        <p className="title is-4">{title}</p>
        {tldr && <Markdown>{tldr}</Markdown>}
      </div>
    </div>
  );
}
