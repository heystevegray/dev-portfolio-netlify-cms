import React from "react"
import Icon from "@mdi/react"
import { mdiGithub, mdiTwitter, mdiLinkedin } from "@mdi/js"

interface Props {
  iconSize?: number
}

export default function Socials({ iconSize = 3 }: Props) {
  return (
    <div className="columns is-centered">
      <div className="column is-one-fifth">
        <div className="columns is-mobile">
          <a href="https://github.com/heystevegray" target="_blank">
            <Icon className="column" path={mdiGithub} size={iconSize} />
          </a>
          <a href="https://twitter.com/heystevegray" target="_blank">
            <Icon className="column" path={mdiTwitter} size={iconSize} />
          </a>
          <a href="https://www.linkedin.com/in/stephengray191/" target="_blank">
            <Icon className="column" path={mdiLinkedin} size={iconSize} />
          </a>
        </div>
      </div>
    </div>
  )
}
