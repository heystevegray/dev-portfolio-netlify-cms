import React from "react";
import { Frontmatter } from "./Preview";
import dayjs from "dayjs";
import Markdown from "markdown-to-jsx";
import Section from "./Accessibility/Section";

interface Props {
  frontmatter: Frontmatter;
}

export default function TLDR({ frontmatter }: Props) {
  const { title, publish_date, tldr } = frontmatter;

  return (
    <Section label={title}>
      <div className="card has-background-black-ter">
        <div className="card-content">
          <p>{dayjs(publish_date).format("MMM D, YYYY")}</p>
          <p className="title is-4">{title}</p>
          {tldr && <Markdown>{tldr}</Markdown>}
        </div>
      </div>
    </Section>
  );
}
