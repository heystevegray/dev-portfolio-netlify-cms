import React from "react"
import Icon from "@mdi/react"
import { mdiGithub, mdiTwitter, mdiLinkedin } from "@mdi/js"

import "./Socials.scss"

interface Props {
  iconSize?: number
}

export default function Socials({ iconSize = 3 }: Props) {
  return (
    <div className="columns is-centered">
      <div className="column">
        <div className="columns is-mobile is-centered">
          <a
            className="socials__link"
            href="https://github.com/heystevegray"
            target="_blank"
          >
            <Icon
              className="column is-primary"
              path={mdiGithub}
              size={iconSize}
            />
          </a>
          <a
            className="socials__link"
            href="https://twitter.com/heystevegray"
            target="_blank"
          >
            <Icon
              className="column is-primary"
              path={mdiTwitter}
              size={iconSize}
            />
          </a>
          <a
            className="socials__link"
            href="https://www.linkedin.com/in/stephengray191/"
            target="_blank"
          >
            <Icon
              className="column is-primary"
              path={mdiLinkedin}
              size={iconSize}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
