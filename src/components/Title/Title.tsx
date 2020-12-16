import React, { ReactElement } from "react";

interface Props {
  title: string;
}

const Title = ({ title }: Props): ReactElement => {
  return (
    <div className="mt-40 mb-10">
      <h2 className="text-4xl text-center">{title}</h2>
    </div>
  );
};

export default Title;
