import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
    maxWidth?: "reading" | "archive" | "letters" | "about";
}

const maxWidths = {
    reading: "max-w-[680px]",
    archive: "max-w-[1100px]",
    letters: "max-w-[680px]",
    about: "max-w-[620px]",
};

export function PageContainer({ children, className, maxWidth = "reading" }: PageContainerProps) {
    return (
        <main className={cn(
            "w-full mx-auto page-content",
            maxWidths[maxWidth],
            maxWidth === "reading" && "poem-container",
            className
        )}>
            {children}
        </main>
    );
}
