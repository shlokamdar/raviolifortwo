import { cn } from "@/lib/utils";

interface SectionBreakProps {
    className?: string;
    texture?: boolean;
}

export function SectionBreak({ className, texture = false }: SectionBreakProps) {
    return (
        <div
            className={cn(
                "h-20 w-full",
                texture && "bg-[radial-gradient(#E8E0D0_1px,transparent_1px)] [background-size:16px_16px] opacity-30",
                className
            )}
        />
    );
}
