"use client";

import { useState } from "react";
import { Poem } from "@/types/poem";
import { PageContainer } from "@/components/PageContainer";
import { PoemCard } from "@/components/PoemCard";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
            <header className="mb-20">
                <span className="eyebrow block mb-2">what i wrote</span>
                <h1 className="font-display text-4xl text-[var(--color-ink)]">archive</h1>
            </header>

            <div className="mb-20">
                {/* Primary filters — by feeling */}
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {feelings.map((feeling) => (
                        <button
                            key={feeling}
                            onClick={() => setActiveTag(feeling)}
                            className={cn(
                                "text-[0.75rem] font-body tracking-wide transition-all duration-200 decoration-[var(--color-border)] hover:decoration-[var(--color-ink-muted)]",
                                activeTag === feeling
                                    ? "text-[var(--color-ink)] underline underline-offset-8"
                                    : "text-[var(--color-ink-faint)] hover:text-[var(--color-ink-muted)]"
                            )}
                        >
                            {feeling.toLowerCase()}
                        </button>
                    ))}
                </div>

                {/* Secondary filters — by collection */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-12 pt-8 border-t border-[var(--color-border)]/10">
                    <span className="text-[0.65rem] font-body text-[var(--color-ink-faint)] mr-2">collections /</span>
                    {sources.map((source) => (
                        <button
                            key={source.id}
                            onClick={() => setActiveCategory(source.id)}
                            className={cn(
                                "text-[0.65rem] font-body transition-all duration-200",
                                activeCategory === source.id
                                    ? "text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-border)]"
                                    : "text-[var(--color-ink-faint)] hover:text-[var(--color-ink-muted)]"
                            )}
                        >
                            {source.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Anthology Preface */}
            {activeCategory === "archives-from-instagram" && (
                <div className="max-w-xl text-left border-y border-[var(--color-border)] py-6 mb-10">
                    <p className="font-display text-[0.85rem] text-[var(--color-ink-muted)] mb-2">
                        — archives from instagram
                    </p>
                    <p className="font-body text-[0.9rem] text-[var(--color-ink-muted)] leading-relaxed">
                        &quot;these are poems from my teenage years. each one a fragment of a version of me i was still becoming.&quot;
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start archive-grid">
                <AnimatePresence mode="popLayout">
                    {filteredPoems.map((poem) => (
                        <motion.div
                            key={poem.slug}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.3 }}
                            transition={{ duration: 0.2 }}
                        >
                            <PoemCard poem={poem} className="hover:-translate-y-[4px]" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredPoems.length === 0 && (
                <div className="py-24">
                    <p className="font-body text-[var(--color-ink-faint)] text-lg">nothing found in this shelf.</p>
                </div>
            )}
        </PageContainer>
    );
}
