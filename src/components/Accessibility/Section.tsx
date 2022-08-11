import React, { FunctionComponent } from "react";

interface Props {
  label: string;
}

const Section: FunctionComponent<Props> = ({ label, children }: Props) => {
  return (
    <section aria-label={label} tabIndex={0}>
      {children}
    </section>
  );
};

export default Section;
