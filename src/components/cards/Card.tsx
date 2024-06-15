import classNames from "classnames";
import React, { ComponentProps } from "react";

type ICountryCard = ComponentProps<"div">;

export const Card = (props: ICountryCard) => {
  const { children, className, ...rest } = props;
  const base =
    "group rounded-lg border  px-5 py-4 transition-colors border-neutral-700 hover:bg-neutral-800/30";
  return (
    <div {...rest} className={classNames(base, className)}>
      {children}
    </div>
  );
};
