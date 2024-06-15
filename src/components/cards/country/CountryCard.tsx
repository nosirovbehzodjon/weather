import React, { ComponentProps } from "react";

interface ICountryCard extends ComponentProps<"div"> {
  to: string;
  title: string;
  description: string;
}

export const CountryCard = (props: ICountryCard) => {
  const { description, title, to, ...rest } = props;
  return (
    <div {...rest}>
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </div>
  );
};
