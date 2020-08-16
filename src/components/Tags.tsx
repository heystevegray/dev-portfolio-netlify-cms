import React, { ReactElement } from "react"

export interface Tag {
  label: string
}

interface Props {
  tags: Tag[]
  maxTags?: number
}

export default function Tags({ tags, maxTags }: Props): ReactElement {
  const items: Tag[] = maxTags ? tags.slice(0, maxTags) : tags
  return (
    <>
      {tags && tags.length ? (
        <div>
          <ul className="tags">
            {items.map((label, index) => (
              <span className="tag is-secondary" key={index}>
                {label}
              </span>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}
