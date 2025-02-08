import { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function FullPageMessage({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={cn("page-wrapper self-center", className)}>{children}</div>;
}
