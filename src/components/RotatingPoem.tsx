"use client";

import { Poem } from "@/types/poem";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface RotatingPoemProps {
    poems: Poem[];
}

export function RotatingPoem({ poems }: RotatingPoemProps) {
    const [randomPoem, setRandomPoem] = useState<Poem | null>(null);

    useEffect(() => {
        if (poems.length > 0) {
            const randomIndex = Math.floor(Math.random() * poems.length);
            setRandomPoem(poems[randomIndex]);
        }
    }, [poems]);

    if (!randomPoem) return null;

    // Get the first few lines of the poem for the excerpt
    const excerpt = randomPoem.fullPoem
        .split('\n')
        .filter(line => line.trim().length > 0)
        .slice(0, 3)
        .join('\n');

    return (
        <div className="max-w-[420px] opacity-0 animate-fade-in fill-mode-forwards" style={{ animationDelay: '400ms' }}>
            <div className="mb-8 border-l border-[var(--color-border)] pl-6 py-1">
                <blockquote className="font-display italic text-[1.1rem] text-[var(--color-ink)] leading-relaxed whitespace-pre-line mb-4">
                    {excerpt}
                </blockquote>

                <div className="flex items-center gap-4">
                    <cite className="font-body text-[0.7rem] text-[var(--color-ink-faint)] tracking-wider uppercase not-italic">
                        — from {randomPoem.title.toLowerCase()}
                    </cite>
                    <Link
                        href={`/poems/${randomPoem.slug}`}
                        className="text-[0.75rem] font-body text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors underline underline-offset-4 decoration-[var(--color-border)]"
                    >
                        read &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
