import { notFound } from "next/navigation";
import Link from "next/link";
import { getPoemBySlug } from "@/lib/poems";
import { PageContainer } from "@/components/PageContainer";
import { getAllPoems } from "@/lib/poems";

export async function generateStaticParams() {
    const poems = await getAllPoems();
    return poems.map((poem) => ({
        slug: poem.slug,
    }));
}

interface PoemPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function PoemPage({ params }: PoemPageProps) {
    const { slug } = await params;
    const poem = await getPoemBySlug(slug);

    if (!poem) {
        notFound();
    }

    const isLetter = poem.category === 'letters-to-robin' || poem.category === 'letters-to-peter';
    const accentColor = isLetter ? 'var(--accent-robin)' : 'var(--accent-general)';

    return (
        <PageContainer maxWidth="reading" className="opacity-0 animate-fade-in fill-mode-forwards">
            <div style={{ maxWidth: '560px', marginLeft: '-2px' }}>

                {/* Paper fragment feel — slight offset */}
                <div
                    className="paper-scrap relative px-7 py-9 md:px-9 md:py-11"
                    style={{
                        transform: 'rotate(-0.3deg)',
                        marginBottom: '48px',
                    }}
                >
                    {/* Tape top-left */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute', top: '-11px', left: '28px',
                            width: '56px', height: '20px',
                            background: 'rgba(220,200,160,0.52)',
                            borderRadius: '1px',
                            transform: 'rotate(-1deg)',
                        }}
                    />
                    {/* Tape top-right (thin) */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute', top: '-9px', right: '36px',
                            width: '34px', height: '16px',
                            background: 'rgba(200,180,180,0.44)',
                            borderRadius: '1px',
                            transform: 'rotate(0.8deg)',
                        }}
                    />

                    {/* eyebrow */}
                    {isLetter && (
                        <span
                            style={{
                                display: 'block',
                                fontFamily: 'var(--font-script)',
                                fontSize: '0.78rem',
                                color: accentColor,
                                opacity: 0.7,
                                marginBottom: '12px',
                                transform: 'rotate(-0.4deg)',
                                letterSpacing: '0.04em',
                            }}
                        >
                            a letter i kept
                        </span>
                    )}

                    <header style={{ marginBottom: '36px' }}>
                        <h1
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontStyle: 'italic',
                                fontWeight: 300,
                                fontSize: 'clamp(1.6rem, 4vw, 2.3rem)',
                                color: 'var(--color-ink)',
                                lineHeight: 1.2,
                                letterSpacing: '-0.01em',
                                marginBottom: '18px',
                            }}
                        >
                            {poem.title}
                        </h1>

                        {poem.headerQuote && (
                            <p
                                style={{
                                    fontFamily: 'var(--font-script)',
                                    fontSize: '0.95rem',
                                    color: 'var(--color-ink-muted)',
                                    lineHeight: 1.6,
                                    transform: 'rotate(-0.3deg)',
                                    display: 'inline-block',
                                    marginBottom: '24px',
                                }}
                                className="header-quote"
                            >
                                {poem.headerQuote}
                            </p>
                        )}

                        {/* hand-drawn em-dash */}
                        <div style={{
                            color: 'var(--color-ink-faint)',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.1rem',
                            marginTop: '24px',
                            opacity: 0.6,
                        }}>
                            —
                        </div>
                    </header>

                    {/* Poem body — each stanza on a slightly different indent */}
                    <div className="poem-body mb-8">
                        {poem.fullPoem.split('\n\n').map((stanza, index) => (
                            <div
                                key={index}
                                className="mb-7"
                                style={{
                                    // Tiny organic indent variation per stanza
                                    paddingLeft: `${[0, 4, 0, 8, 0, 2][index % 6]}px`,
                                }}
                            >
                                {stanza}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back link — like a note at the bottom of the page */}
                <div style={{ marginTop: '16px', marginLeft: '6px', marginBottom: '80px' }}>
                    <Link
                        href={isLetter ? "/letters" : "/archive"}
                        className="text-[var(--color-ink-faint)] hover:text-[var(--color-ink-muted)] transition-colors duration-400"
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.95rem',
                            textDecoration: 'underline',
                            textDecorationColor: 'rgba(120,100,76,0.22)',
                            textUnderlineOffset: '4px',
                            display: 'inline-block',
                            transform: 'rotate(-0.3deg)',
                        }}
                    >
                        ← back to {isLetter ? "letters i kept" : "what i wrote"}
                    </Link>
                </div>
            </div>
        </PageContainer>
    );
}
