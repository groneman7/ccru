import { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function ActivityTitle({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return <span className={cn("mb-4 text-2xl font-semibold", className)}>{children}</span>;
}
