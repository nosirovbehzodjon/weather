import cn from "classnames";
import React, { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button">;

const base =
  "text-sm flex uppercase items-center h-[45px] px-[1.875rem] leading-[1.375rem] text-light-1 font-medium bg-btn-linear-gradient cursor-pointer shadow-custom border rounded-[0.5rem] border-custom hover:shadow-custom-hover";

export const Button = (props: ButtonProps) => {
  const { children, className, ...other } = props;

  return (
    <button className={cn(base, className)} {...other}>
      {children}
    </button>
  );
};
