import React from "react"

export default function Tags({ tags }) {
  return (
    <>
      {tags && tags.length ? (
        <div>
          <ul className="tags">
            {tags.map((tag: string, index) => (
              //   <li key={tag + `tag`}>
              //     <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              //   </li>
              <span className="tag is-secondary" key={index}>
                {tag}
              </span>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}
