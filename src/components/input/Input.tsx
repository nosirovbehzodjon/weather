import cn from "classnames";
import React, { ComponentProps, ReactNode, forwardRef } from "react";

interface IInputProps extends ComponentProps<"input"> {
  message?: string;
}

export const Input = forwardRef(
  (props: IInputProps, ref: React.Ref<HTMLInputElement>) => {
    const { message, className, ...other } = props;
    return (
      <div className={cn("relative text-xs", className)}>
        <div className="flex items-center p-[0.875rem] pr-[1rem] rounded-[0.5rem] border border-[#ffffff1f] bg-[#ffffff0d]">
          <input
            className="w-full text-inherit text-base leading-[1.25rem] font-sans"
            {...other}
            ref={ref}
          />
        </div>
        {message && (
          <p className="absolute left-[0.85rem] top-[3.05rem] text-[0.8rem] text-[#622297]">
            {message}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
