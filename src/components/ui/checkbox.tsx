"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "~/lib/utils";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "peer form-control flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-sm border text-white transition-all data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:duration-150 data-[state=indeterminate]:text-black data-[state=unchecked]:bg-white",
            className
        )}
        {...props}>
        <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}>
            <Check
                className="size-3 transition-all peer-data-[state=unchecked]:opacity-0 data-[state=checked]:animate-draw-check data-[state=checked]:opacity-50"
                strokeWidth={4}
                strokeDasharray={24}
            />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
