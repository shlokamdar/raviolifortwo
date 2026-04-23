"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TagFilterProps {
    tags: string[];
    activeTag: string | null;
    onTagSelect: (tag: string | null) => void;
    className?: string;
}

export function TagFilter({ tags, activeTag, onTagSelect, className }: TagFilterProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={scrollRef}
            className={cn(
                "flex gap-3 overflow-x-auto no-scrollbar pb-4 -mx-8 px-8 md:mx-0 md:px-0",
                className
            )}
        >
            <button
                onClick={() => onTagSelect(null)}
                className={cn(
                    "whitespace-nowrap px-4 py-2 text-[11px] font-dm-sans uppercase tracking-[0.1em] transition-colors rounded-full border border-shadow",
                    activeTag === null
                        ? "bg-gold text-ink border-gold"
                        : "bg-parchment text-dust hover:border-dust"
                )}
            >
                all
            </button>
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => onTagSelect(tag)}
                    className={cn(
                        "whitespace-nowrap px-4 py-2 text-[11px] font-dm-sans uppercase tracking-[0.1em] transition-colors rounded-full border border-shadow",
                        activeTag === tag
                            ? "bg-gold text-ink border-gold"
                            : "bg-parchment text-dust hover:border-dust"
                    )}
                >
                    {tag.replace(/-/g, ' ')}
                </button>
            ))}
        </div>
    );
}
