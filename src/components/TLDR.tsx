import React from "react";
import { Frontmatter } from "./Preview";
import dayjs from "dayjs";
import Markdown from "markdown-to-jsx";

export default function TLDR(props: Partial<Frontmatter>) {
  const { title, description, publish_date, tldr } = props;

  return (
    <section className="section">
      {title && <p className="title is-centered is-4">{title}</p>}
      {publish_date && <p>{dayjs(publish_date).format("MMM D, YYYY")}</p>}
      {tldr && <Markdown>{tldr}</Markdown>}
    </section>
  );
}
