"use client";

import { Poem } from "@/types/poem";
import { useEffect, useState } from "react";
import Link from "next/link";

interface RotatingPoemProps {
    poems: Poem[];
}

export function RotatingPoem({ poems }: RotatingPoemProps) {
    const [randomPoem, setRandomPoem] = useState<Poem | null>(null);

    useEffect(() => {
        if (poems.length === 0) return;
        const t = window.setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * poems.length);
            setRandomPoem(poems[randomIndex] ?? null);
        }, 0);
        return () => window.clearTimeout(t);
    }, [poems]);

    if (!randomPoem) return null;

    const excerpt = randomPoem.fullPoem
        .split('\n')
        .filter(line => line.trim().length > 0)
        .slice(0, 3)
        .join('\n');

    return (
        <div
            className="opacity-0 animate-fade-in fill-mode-forwards"
            style={{ animationDelay: '500ms', maxWidth: '400px', position: 'relative' }}
        >
            {/* Paper fragment for the quote */}
            <div
                className="paper-scrap relative px-6 py-6"
                style={{ transform: 'rotate(0.8deg)' }}
            >
                {/* Tape */}
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute', top: '-10px', left: '50%',
                        transform: 'translateX(-50%) rotate(-1.2deg)',
                        width: '52px', height: '18px',
                        background: 'rgba(220,200,160,0.50)',
                        borderRadius: '1px',
                    }}
                />

                {/* Quote mark */}
                <span
                    aria-hidden="true"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        color: 'var(--color-ink-faint)',
                        lineHeight: 1,
                        display: 'block',
                        marginBottom: '-8px',
                        opacity: 0.35,
                    }}
                >
                    &ldquo;
                </span>

                <blockquote
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        color: 'var(--color-ink)',
                        lineHeight: 1.85,
                        whiteSpace: 'pre-line',
                        marginBottom: '18px',
                        fontWeight: 300,
                    }}
                >
                    {excerpt}
                </blockquote>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <cite
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.78rem',
                            color: 'var(--color-ink-faint)',
                            fontStyle: 'normal',
                            letterSpacing: '0.02em',
                        }}
                    >
                        — from {randomPoem.title.toLowerCase()}
                    </cite>
                    <Link
                        href={`/poems/${randomPoem.slug}`}
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.82rem',
                            color: 'var(--color-ink-muted)',
                            textDecoration: 'underline',
                            textDecorationColor: 'rgba(120,100,76,0.25)',
                            textUnderlineOffset: '3px',
                            transition: 'color 400ms ease',
                        }}
                    >
                        read →
                    </Link>
                </div>
            </div>
        </div>
    );
}
