"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const inputVariants = cva(
  "flex h-10 rounded bg-background px-2 py-1 text-slate-900 placeholder:text-slate-400 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-[width,color,background-color,border-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;] duration-150 placeholder:select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
        ghost:
          "hover:bg-accent hover:text-accent-foreground active:bg-accent-hover",
      },
      inputSize: {
        sm: "h-8 rounded-md px-3 [&_svg]:size-4",
        md: "h-9 px-4 py-2 [&_svg]:size-4",
        lg: "h-12 rounded-md px-8 text-md [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md",
    },
  },
);

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  iconClassName?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      iconClassName,
      iconLeft,
      iconRight,
      inputSize,
      type,
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={`relative flex items-center ${
          inputSize === "sm"
            ? "[&_svg]:size-3"
            : inputSize === "lg"
              ? "[&_svg]:size-5"
              : "[&_svg]:size-4"
        }`}
      >
        {iconLeft && (
          <div className={`absolute left-3 ${iconClassName}`}>{iconLeft}</div>
        )}

        <input
          type={type}
          className={cn(
            inputVariants({ variant, inputSize, className }),
            iconLeft && inputSize === "sm"
              ? "pl-8"
              : inputSize === "lg"
                ? "pl-11"
                : "pl-9",
            iconRight && "pr-8",
            className,
          )}
          ref={ref}
          {...props}
        />

        {iconRight && (
          <div className={`absolute right-3 ${iconClassName}`}>{iconRight}</div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
