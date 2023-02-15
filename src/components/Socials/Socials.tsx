import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiTwitter, mdiLinkedin, mdiNpm } from "@mdi/js";

import "./Socials.scss";
import { NAME } from "../../lib/config";

interface Props {
  iconSize?: number;
  className?: string;
}

export default function Socials({ className = "", iconSize = 3 }: Props) {
  return (
    <div className={`${className} columns is-centered`}>
      <div className="column">
        <div className="columns is-mobile is-centered">
          <a
            className="socials__link"
            aria-label={`${NAME} on npm`}
            href="https://www.npmjs.com/~heystevegray"
            target="_blank"
            rel="noopener"
          >
            <Icon className="column is-primary" path={mdiNpm} size={iconSize} />
          </a>
          <a
            className="socials__link"
            aria-label={`${NAME} on github`}
            href="https://github.com/heystevegray"
            target="_blank"
            rel="noopener"
          >
            <Icon
              className="column is-primary"
              path={mdiGithub}
              size={iconSize}
            />
          </a>
          {/* <a
            className="socials__link"
            aria-label={`${NAME} on twitter`}
            href="https://twitter.com/heystevegray"
            target="_blank"
            rel="noopener"
          >
            <Icon
              className="column is-primary"
              path={mdiTwitter}
              size={iconSize}
            />
          </a> */}
          <a
            className="socials__link"
            aria-label={`${NAME} on linked in`}
            href="https://www.linkedin.com/in/stephengray191/"
            target="_blank"
            rel="noopener"
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
  );
}
