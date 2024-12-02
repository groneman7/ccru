"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-75 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer select-none",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent active:bg-accent-hover",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary-interaction/50 active:bg-secondary-interaction/75",
                ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent-hover",
                link: "text-link underline-offset-2 hover:underline !px-1 !py-0 -ml-1",
            },
            size: {
                sm: "h-8 rounded-md px-3 [&_svg]:size-4",
                md: "h-9 px-4 py-2 [&_svg]:size-4",
                lg: "h-12 rounded-md px-8 text-md [&_svg]:size-6",
                icon: "h-6 w-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ size, variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
