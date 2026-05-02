"use client";

import Link from "next/link";
import { Poem } from "@/types/poem";
import { cn } from "@/lib/utils";

interface PoemCardProps {
    poem: Poem;
    className?: string;
    rotation?: number;
}

// Deterministic rotation from poem slug
function slugToRotation(slug: string): number {
    const n = slug.charCodeAt(0) + slug.charCodeAt(slug.length - 1);
    const directions = [-2.1, -1.4, -0.7, 0.8, 1.5, 2.2];
    return directions[n % directions.length];
}

// Tape colour cycling
const tapeColors = [
    'rgba(226, 198, 154, 0.58)',   // warm amber
    'rgba(221, 171, 179, 0.50)',   // dusty rose
    'rgba(158, 190, 154, 0.50)',   // sage
    'rgba(166, 187, 210, 0.48)',   // pale blue
    'rgba(198, 173, 216, 0.44)',   // lavender
];

function slugToTape(slug: string): string {
    const n = slug.charCodeAt(1) + slug.charCodeAt(2);
    return tapeColors[n % tapeColors.length];
}

export function PoemCard({ poem, className, rotation }: PoemCardProps) {
    const accentColor = {
        'general': 'var(--accent-general)',
        'archives-from-instagram': 'var(--accent-archive)',
        'letters-to-robin': 'var(--accent-robin)',
        'letters-to-peter': 'var(--accent-peter)',
        'letters': 'var(--accent-robin)',
    }[poem.category as string] || 'var(--accent-general)';

    const rot = rotation ?? slugToRotation(poem.slug);
    const tapeColor = slugToTape(poem.slug);
    // Alternate tape position L/R
    const tapeLeft = poem.slug.charCodeAt(0) % 2 === 0;

    return (
        <Link
            href={`/poems/${poem.slug}`}
            className={cn("poem-card-link group block relative", className)}
            style={{
                "--scrap-rotation": `${rot}deg`,
                "--scrap-hover-rotation": `${rot * 0.3}deg`,
            } as React.CSSProperties}
        >
            {/* Tape strip */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: '-11px',
                    [tapeLeft ? 'left' : 'right']: '22px',
                    width: '52px',
                    height: '20px',
                    background: tapeColor,
                    borderRadius: '1px',
                    transform: `rotate(${tapeLeft ? -1.2 : 0.9}deg)`,
                    zIndex: 2,
                    boxShadow: '0 1px 3px rgba(60,40,20,0.10)',
                }}
            />

            {/* Paper scrap */}
            <div
                className="paper-scrap px-6 py-7 md:px-7 md:py-8"
            >
                {/* Category accent dot */}
                <div
                    aria-hidden="true"
                    style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: accentColor,
                        opacity: 0.6,
                        marginBottom: '14px',
                    }}
                />

                <h3 className="card-title mb-5 leading-snug">
                    {poem.cardLine}
                </h3>

                {/* Tags as small handwritten annotations */}
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {poem.tags.map((tag: string) => (
                        <span
                            key={tag}
                            style={{
                                fontFamily: 'var(--font-script)',
                                fontSize: '0.72rem',
                                color: 'var(--color-ink-faint)',
                                letterSpacing: '0.02em',
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Hover radial glow */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(400px 200px at 25% 0%, color-mix(in srgb, ${accentColor} 10%, transparent), transparent 60%)`,
                        transition: 'opacity 600ms ease',
                    }}
                />
            </div>
        </Link>
    );
}
