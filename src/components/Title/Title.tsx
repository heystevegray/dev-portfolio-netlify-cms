import React, { ReactElement } from "react";

interface Props {
  title: string;
}

const Title = ({ title }: Props): ReactElement => {
  return (
    <div className="place-self-center">
      <h1 className="text-4xl text-center">{title}</h1>
    </div>
  );
};

export default Title;
