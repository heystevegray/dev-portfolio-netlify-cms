import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import dayjs from "dayjs"
import TLDR from "./TLDR"

import "../assets/styles.css"

export interface PreviewProps {
  slug: string
  image: any
  publish_date: string
  description: string
  title: string
  showTil: boolean
  tldr: string
}

export default function Preview(frontmatter: PreviewProps) {
  const {
    slug,
    image,
    title,
    description,
    publish_date,
    showTil,
    tldr,
  } = frontmatter

  return (
    <Link to={`/til${slug}`} className="box preview" key={slug}>
      <div className="card has-background-black-ter">
        <div className="card-image">
          {!showTil && image && <Img fluid={image.childImageSharp.fluid} />}
        </div>
        <div className="card-content">
          {showTil ? (
            <TLDR
              title={title}
              tldr={tldr}
              publish_date={publish_date}
              description={description}
            />
          ) : (
            <>
              <p className="title is-centered is-4">{title}</p>
              <p className="subtitle is-6">{description}</p>
              <p>{dayjs(publish_date).format("MMM D, YYYY")}</p>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
