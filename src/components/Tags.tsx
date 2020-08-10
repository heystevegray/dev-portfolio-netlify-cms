import React from "react"

export default function Tags({ tags }) {
  return (
    <>
      {tags && tags.length ? (
        <div>
          <ul className="taglist">
            {tags.map((tag: string, index) => (
              //   <li key={tag + `tag`}>
              //     <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              //   </li>
              <span className="tag is-primary is-light mr-1" key={index}>
                {tag}
              </span>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}
