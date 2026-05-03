"use client";

import { useState } from "react";
import Link from "next/link";
import { Poem } from "@/types/poem";

interface ArchiveClientProps {
    initialPoems: Poem[];
}

const getTapeColor = (tags: string[]) => {
  if (!tags || tags.length === 0) return 'var(--tape-warm)';
  const t = tags[0].toLowerCase();
  if (t === 'everyday-magic') return 'var(--tape-sage)';
  if (t === 'self-portrait') return 'var(--tape-lilac)';
  if (t === 'yearning') return 'var(--tape-warm)';
  if (t === 'love-and-longing') return 'var(--tape-rose)';
  if (t === 'quiet-grief') return 'var(--tape-cool)';
  return 'var(--tape-warm)';
};

// Rotations array to cycle through
const rotations = ['rotate(0deg)', 'rotate(0.8deg)', 'rotate(-1.2deg)', 'rotate(0.5deg)'];

// Spans for the 12 column grid
const spans = ['col-span-12 md:col-span-5', 'col-span-12 md:col-span-7', 'col-span-12 md:col-span-4'];

export function ArchiveClient({ initialPoems }: ArchiveClientProps) {
    const [activeTag, setActiveTag] = useState<string>("ALL");

    const feelings = ["ALL", "EVERYDAY MAGIC", "SELF PORTRAIT", "YEARNING", "LOVE AND LONGING", "QUIET GRIEF"];

    const filteredPoems = initialPoems.filter(poem => {
        if (activeTag === "ALL") return true;
        return poem.tags.map(t => t.toUpperCase().replace(/-/g, ' ')).includes(activeTag);
    });

    return (
        <div className="w-full pb-32">
            <style>{`
                .archive-card-hover:hover {
                    transform: translateY(-3px) rotate(0deg) !important;
                }
            `}</style>
            <header className="mb-12">
                <h1
                    style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        color: 'var(--ink)',
                        lineHeight: 1.15,
                    }}
                >
                    what i wrote
                </h1>
            </header>

            {/* Filters */}
            <div className="mb-16">
                <div className="mono mb-4 text-[var(--dust)]">by feeling</div>
                <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 md:flex-wrap">
                    {feelings.map((feeling) => {
                        const isActive = activeTag === feeling;
                        return (
                            <button
                                key={feeling}
                                onClick={() => setActiveTag(feeling)}
                                className={`mono whitespace-nowrap px-3 py-1.5 rounded-[2px] border transition-colors ${isActive ? 'bg-[var(--ink)] text-[var(--cream)] border-[var(--ink)]' : 'bg-transparent text-[var(--dust)] border-[var(--dust)] hover:border-[var(--ink)] hover:text-[var(--ink)]'}`}
                                style={{ fontSize: '10px', borderWidth: '0.5px' }}
                            >
                                {feeling.toLowerCase()}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-12 gap-6" style={{ alignItems: 'start' }}>
                {filteredPoems.map((poem, i) => {
                    const colSpan = spans[i % spans.length];
                    const rotation = rotations[i % rotations.length];
                    // Push cards around depending on index to create stagger
                    const marginClass = i % 2 !== 0 ? 'md:mt-12' : '';
                    
                    return (
                        <Link
                            key={poem.slug}
                            href={`/poems/${poem.slug}`}
                            className={`poem-card-base archive-card-hover block relative ${colSpan} ${marginClass}`}
                            style={{
                                padding: '24px 28px',
                                transform: rotation,
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            }}
                        >
                            {/* Tape strip */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-3px',
                                    right: '16px',
                                    width: '36px',
                                    height: '7px',
                                    backgroundColor: getTapeColor(poem.tags),
                                    zIndex: 2,
                                }}
                            />

                            <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>
                                {poem.title}
                            </h2>
                            <div className="mono" style={{ color: 'var(--dust)' }}>
                                {poem.tags?.[0] ? `#${poem.tags[0]}` : ''}
                            </div>
                            
                            {/* Show excerpt only for wider columns */}
                            {(colSpan.includes('col-span-7') || colSpan.includes('col-span-12')) && poem.cardLine && (
                                <p className="mt-4" style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--ink)', fontStyle: 'italic' }}>
                                    {poem.cardLine}
                                </p>
                            )}
                        </Link>
                    );
                })}
            </div>

            {filteredPoems.length === 0 && (
                <div className="mono text-[var(--dust)]">nothing found in this feeling.</div>
            )}
        </div>
    );
}
