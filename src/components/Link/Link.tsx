import React, { ReactElement } from "react";

interface Props {
  text: string;
  href: string;
  ariaLabel?: string;
}

const Link = ({ text, href, ariaLabel = "" }: Props): ReactElement => {
  const aria = ariaLabel || text;

  return (
    <a
      className="socials__link"
      aria-label={`${aria}`}
      href={`${href}`}
      target="_blank"
      rel="noopener"
    >
      {text}
    </a>
  );
};

export default Link;
