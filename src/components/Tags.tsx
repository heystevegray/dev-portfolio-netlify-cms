import React, { ReactElement } from "react";

export interface Tag {
  label: string;
}

interface Props {
  tags: Tag[];
  className?: string;
  centered?: boolean;
  maxTags?: number;
  background?: string;
}

export default function Tags({
  tags = [],
  className = "",
  centered = true,
  maxTags,
  background = "is-secondary",
}: Props): ReactElement {
  const items: Tag[] = maxTags ? tags.slice(0, maxTags) : tags;
  const centerTags = centered ? "tag-container" : "";

  return (
    <div className={`${className}`}>
      {tags && tags.length ? (
        <div className={`${centerTags}`}>
          <ul className="tags">
            {items.map((label, index) => (
              <li key={index}>
                <span className={`tag ${background}`}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
