import { notFound } from "next/navigation";
import Link from "next/link";
import { getPoemBySlug } from "@/lib/poems";
import { PageContainer } from "@/components/PageContainer";
import { PoetNote } from "@/components/PoetNote";
import { InteractiveFeature } from "@/components/InteractiveFeature";
import { SectionBreak } from "@/components/SectionBreak";

interface PoemPageProps {
    params: {
        slug: string;
    };
}

export default async function PoemPage({ params }: PoemPageProps) {
    const { slug } = await params;
    const poem = await getPoemBySlug(slug);

    if (!poem) {
        notFound();
    }

    const accentColor = {
        'general': 'var(--accent-general)',
        'archives-from-instagram': 'var(--accent-archive)',
        'letters-to-robin': 'var(--accent-robin)',
        'letters-to-peter': 'var(--accent-peter)',
    }[poem.category] || 'var(--accent-general)';

    const isLetter = poem.category === 'letters-to-robin' || poem.category === 'letters-to-peter';
    const recipient = poem.category === 'letters-to-robin' ? 'Robin' : 'Peter';

    return (
        <PageContainer maxWidth="reading" className="opacity-0 animate-fade-in fill-mode-forwards pt-12 md:pt-32">
            <div className="max-w-[580px] px-4">
                <header className="mb-12">
                    <h1 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] text-[var(--color-ink)] leading-tight font-normal">
                        {poem.title}
                    </h1>

                    <div className="mt-4 text-[0.9rem] text-[var(--color-ink-muted)] font-body">
                        {poem.headerQuote}
                    </div>

                    <div className="mt-8 mb-8 text-[var(--color-ink-faint)]">
                        —
                    </div>
                </header>

                <div className="poem-body mb-20 leading-relaxed font-light">
                    {poem.fullPoem.split('\n\n').map((stanza, index) => (
                        <div key={index} className="mb-6">{stanza}</div>
                    ))}
                </div>

                <div className="mt-16 mb-24">
                    <Link
                        href={isLetter ? "/letters" : "/archive"}
                        className="font-body text-[0.85rem] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
                    >
                        &larr; back to {isLetter ? "letters i kept" : "what i wrote"}
                    </Link>
                </div>
            </div>
        </PageContainer>
    );
}
