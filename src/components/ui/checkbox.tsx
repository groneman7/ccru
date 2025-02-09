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
            "form-control has-focus-ring data-[state=checked]:border-primary data-[state=checked]:bg-primary text-white! data-[state=indeterminate]:text-black! peer h-4 w-4 shrink-0 cursor-pointer justify-center rounded-sm border transition-all data-[state=unchecked]:bg-white data-[state=checked]:duration-150",
            className
        )}
        {...props}>
        <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center")}>
            <Check
                className="h-3 w-3 transition-all"
                strokeWidth={4}
                strokeDasharray={24}
            />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
