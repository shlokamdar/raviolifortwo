import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
    children: ReactNode;
    className?: string;
}

export function EyebrowLabel({ children, className }: EyebrowLabelProps) {
    return (
        <span className={cn("eyebrow block mb-2", className)}>
            {children}
        </span>
    );
}
