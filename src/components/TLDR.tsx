import React from "react"
import { PreviewProps } from "./Preview"
import dayjs from "dayjs"

export default function TLDR(props: Partial<PreviewProps>) {
  const { title, description, publish_date, tldr } = props
  console.log({ tldr })

  return (
    <div>
      <>
        {title && <p className="title is-centered is-4">{title}</p>}
        {description && <p className="subtitle is-6">{description}</p>}
        <section className="section">
          {tldr && (
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: tldr }}
            />
          )}
        </section>
        {publish_date && <p>{dayjs(publish_date).format("MMM D, YYYY")}</p>}
      </>
    </div>
  )
}
