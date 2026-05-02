"use client";

import Link from "next/link";

type LetterScrapItemProps = {
    letter: { slug: string; title: string; eyebrow?: string };
    accentColor: string;
    index: number;
};

function slugToRotation(slug: string, offset = 0): number {
    const n = slug.charCodeAt(0) + slug.charCodeAt(slug.length - 1) + offset;
    const dirs = [-1.8, -1.0, -0.4, 0.5, 1.2, 1.8];
    return dirs[n % dirs.length];
}

const tapeColors = [
    "rgba(226, 198, 154, 0.58)",
    "rgba(221, 171, 179, 0.50)",
    "rgba(158, 190, 154, 0.50)",
    "rgba(177, 188, 216, 0.48)",
    "rgba(198, 173, 216, 0.44)",
];

function slugToTape(slug: string): string {
    return tapeColors[(slug.charCodeAt(0) + slug.charCodeAt(1)) % tapeColors.length];
}

export function LetterScrapItem({ letter, accentColor, index }: LetterScrapItemProps) {
    const rot = slugToRotation(letter.slug, index);
    const tape = slugToTape(letter.slug);
    const tapeLeft = index % 2 === 0;

    return (
        <Link
            href={`/poems/${letter.slug}`}
            className="letter-scrap group relative block"
            style={{
                "--scrap-rotation": `${rot}deg`,
                "--scrap-hover-rotation": `${rot * 0.25}deg`,
                "--scrap-accent": accentColor,
            } as React.CSSProperties}
        >
            <div
                aria-hidden="true"
                className="tape-strip"
                style={{
                    top: "-9px",
                    left: tapeLeft ? "16px" : "auto",
                    right: tapeLeft ? "auto" : "16px",
                    width: "44px",
                    height: "16px",
                    background: tape,
                    transform: `rotate(${tapeLeft ? -1 : 0.8}deg)`,
                }}
            />
            <div className="paper-scrap px-5 py-5">
                <span className="letter-scrap-title">
                    {letter.title}
                </span>
                {letter.eyebrow && (
                    <span className="letter-scrap-note">
                        {letter.eyebrow}
                    </span>
                )}
            </div>
        </Link>
    );
}
