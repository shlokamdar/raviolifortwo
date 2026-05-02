"use client";

import { useState } from "react";
import { Poem } from "@/types/poem";
import { PageContainer } from "@/components/PageContainer";
import { PoemCard } from "@/components/PoemCard";
import { motion, AnimatePresence } from "framer-motion";

interface ArchiveClientProps {
    initialPoems: Poem[];
}

export function ArchiveClient({ initialPoems }: ArchiveClientProps) {
    const [activeTag, setActiveTag] = useState<string>("ALL");
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const feelings = ["ALL", "EVERYDAY MAGIC", "SELF PORTRAIT", "YEARNING", "LOVE AND LONGING", "QUIET GRIEF"];
    const sources = [
        { id: "all", label: "all" },
        { id: "archives-from-instagram", label: "archives from instagram" },
        { id: "letters-to-robin", label: "letters to robin" },
        { id: "letters-to-peter", label: "letters to peter" },
        { id: "general", label: "general" },
    ];

    const filteredPoems = initialPoems.filter(poem => {
        const matchesTag = activeTag === "ALL"
            ? true
            : poem.tags.map(t => t.toUpperCase().replace(/-/g, ' ')).includes(activeTag);
        const matchesCategory = activeCategory === "all" ? true : poem.category === activeCategory;
        return matchesTag && matchesCategory;
    });

    return (
        <PageContainer maxWidth="reading">
            <header style={{ marginBottom: '48px' }}>
                <span
                    style={{
                        display: 'block',
                        fontFamily: 'var(--font-script)',
                        fontSize: '0.88rem',
                        color: 'var(--color-ink-faint)',
                        marginBottom: '10px',
                        transform: 'rotate(-0.6deg)',
                    }}
                >
                    what i wrote
                </span>
                <h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                        color: 'var(--color-ink)',
                        lineHeight: 1.15,
                    }}
                >
                    archive
                </h1>
            </header>

            {/* Filters — like index tabs in a journal */}
            <div style={{ marginBottom: '52px' }}>
                {/* Feeling filters */}
                <div
                    className="paper-scrap relative px-5 py-5"
                    style={{ transform: 'rotate(-0.3deg)', marginBottom: '24px' }}
                >
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute', top: '-9px', left: '20px',
                            width: '44px', height: '16px',
                            background: 'rgba(220,200,160,0.50)', borderRadius: '1px',
                        }}
                    />
                    <span
                        style={{
                            display: 'block',
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.72rem',
                            color: 'var(--color-ink-faint)',
                            marginBottom: '12px',
                            letterSpacing: '0.04em',
                        }}
                    >
                        by feeling
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
                        {feelings.map((feeling) => (
                            <button
                                key={feeling}
                                onClick={() => setActiveTag(feeling)}
                                style={{
                                    fontFamily: 'var(--font-script)',
                                    fontSize: '0.9rem',
                                    color: activeTag === feeling ? 'var(--color-ink)' : 'var(--color-ink-faint)',
                                    background: 'none',
                                    border: 'none',
                                    padding: '2px 0',
                                    cursor: 'pointer',
                                    textDecoration: activeTag === feeling ? 'underline' : 'none',
                                    textDecorationColor: 'rgba(120,100,76,0.4)',
                                    textUnderlineOffset: '4px',
                                    transition: 'color 400ms ease',
                                    letterSpacing: '0.01em',
                                }}
                            >
                                {feeling.toLowerCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Collection filters */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', alignItems: 'center', marginLeft: '4px' }}>
                    <span
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.72rem',
                            color: 'var(--color-ink-faint)',
                            marginRight: '4px',
                        }}
                    >
                        from /
                    </span>
                    {sources.map((source) => (
                        <button
                            key={source.id}
                            onClick={() => setActiveCategory(source.id)}
                            style={{
                                fontFamily: 'var(--font-script)',
                                fontSize: '0.8rem',
                                color: activeCategory === source.id ? 'var(--color-ink-muted)' : 'var(--color-ink-faint)',
                                background: 'none',
                                border: 'none',
                                padding: '2px 0',
                                cursor: 'pointer',
                                textDecoration: activeCategory === source.id ? 'underline' : 'none',
                                textDecorationColor: 'rgba(120,100,76,0.3)',
                                textUnderlineOffset: '4px',
                                transition: 'color 300ms ease',
                            }}
                        >
                            {source.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Instagram archives note */}
            {activeCategory === "archives-from-instagram" && (
                <div
                    className="paper-scrap px-6 py-5 relative"
                    style={{
                        transform: 'rotate(0.5deg)',
                        maxWidth: '420px',
                        marginBottom: '36px',
                    }}
                >
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute', top: '-9px', right: '20px',
                            width: '40px', height: '15px',
                            background: 'rgba(160,190,160,0.46)', borderRadius: '1px',
                        }}
                    />
                    <p
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            fontSize: '0.88rem',
                            color: 'var(--color-ink-muted)',
                            lineHeight: 1.65,
                        }}
                    >
                        &quot;these are poems from my teenage years. each one a fragment of a version of me i was still becoming.&quot;
                    </p>
                </div>
            )}

            {/* Grid — scattered, slightly off-alignment */}
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 archive-grid"
                style={{ alignItems: 'start' }}
            >
                <AnimatePresence mode="popLayout">
                    {filteredPoems.map((poem, i) => (
                        <motion.div
                            key={poem.slug}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
                            style={{ marginTop: i % 3 === 1 ? '24px' : i % 3 === 2 ? '8px' : 0 }}
                        >
                            <PoemCard poem={poem} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredPoems.length === 0 && (
                <div
                    className="paper-scrap inline-block px-6 py-6 relative"
                    style={{ transform: 'rotate(-0.8deg)', marginTop: '32px' }}
                >
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute', top: '-9px', left: '20px',
                            width: '40px', height: '15px',
                            background: 'rgba(220,200,160,0.48)', borderRadius: '1px',
                        }}
                    />
                    <p
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            color: 'var(--color-ink-faint)',
                            fontSize: '0.95rem',
                        }}
                    >
                        nothing found in this shelf.
                    </p>
                </div>
            )}
        </PageContainer>
    );
}
