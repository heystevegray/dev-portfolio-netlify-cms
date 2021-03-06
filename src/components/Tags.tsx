import React, { ReactElement } from "react";

export interface Tag {
  label: string;
}

interface Props {
  tags: Tag[];
  maxTags?: number;
  className?: string;
}

export default function Tags({
  className = "",
  tags = [],
  maxTags,
}: Props): ReactElement {
  const items: Tag[] = maxTags ? tags.slice(0, maxTags) : tags;

  return (
    <div className="w-full">
      {tags && tags.length ? (
        <ul className={`flex flex-wrap ${className}`}>
          {items.map((label, index) => (
            <li
              key={index}
              className="rounded mr-2 my-1 text-xs p-2 text-center has-background-black-ter items-center"
            >
              {label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
