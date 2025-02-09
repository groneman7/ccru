"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const inputVariants = cva("form-control has-focus-ring", {
    variants: {
        variant: {
            default: "border border-border",
            ghost: "hover:bg-secondary/50",
        },
        inputSize: {
            sm: "h-7 text-sm px-3 ",
            md: "h-9 text-sm px-4 py-2 [&_svg]:w-4 [&_svg]:h-4",
            lg: "h-12 text-xl px-8 [&_svg]:w-6 [&_svg]:h-6",
        },
    },
    defaultVariants: {
        variant: "default",
        inputSize: "md",
    },
});

export interface InputProps
    extends React.ComponentProps<"input">,
        VariantProps<typeof inputVariants> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, iconLeft, iconRight, inputSize, type, variant, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "relative flex items-center",
                    inputSize === "sm" && "[&_svg]:h-4 [&_svg]:w-4",
                    (inputSize === "md" || !inputSize) && "[&_svg]:h-5 [&_svg]:w-5",
                    inputSize === "lg" && "[&_svg]:h-6 [&_svg]:w-6"
                )}>
                {iconLeft && <div className="text-placeholder absolute left-3">{iconLeft}</div>}

                <input
                    type={type}
                    className={cn(
                        inputVariants({ variant, inputSize, className }),
                        iconLeft && inputSize === "sm" && "pl-8",
                        iconLeft && (inputSize === "md" || !inputSize) && "pl-9",
                        iconLeft && inputSize === "lg" && "pl-11",
                        iconRight && "pr-8",
                        className
                    )}
                    ref={ref}
                    {...props}
                />

                {iconRight && (
                    <div className="text-placeholder absolute right-3">{iconRight}</div>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
