import { PageContainer } from "@/components/PageContainer";
import { getPoemsByCategory } from "@/lib/poems";
import { EnvelopeSvg } from "@/components/ornaments/NotebookIllustrations";
import { LetterScrapItem } from "@/components/LetterScrapItem";

function EmptyState({ message, subMessage }: { message: string; subMessage: string }) {
    return (
        <div
            className="paper-scrap px-6 py-7 relative inline-flex flex-col items-start gap-3"
            style={{ transform: 'rotate(-0.8deg)', maxWidth: '280px' }}
        >
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute', top: '-9px', left: '20px',
                    width: '44px', height: '16px',
                    background: 'rgba(220,200,160,0.50)',
                    borderRadius: '1px', transform: 'rotate(-0.5deg)',
                }}
            />
            <EnvelopeSvg aria-hidden="true" className="envelope-sway w-[80px] h-auto opacity-50" />
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-ink-faint)', fontSize: '0.95rem' }}>
                {message}
            </p>
            <p style={{ fontFamily: 'var(--font-script)', fontSize: '0.82rem', color: 'var(--color-ink-faint)', opacity: 0.7 }}>
                {subMessage}
            </p>
        </div>
    );
}

export default async function LettersPage() {
    const generalLetters = await getPoemsByCategory('letters');
    const robinLetters = await getPoemsByCategory('letters-to-robin');
    const peterLetters = await getPoemsByCategory('letters-to-peter');

    return (
        <PageContainer maxWidth="reading" className="opacity-0 animate-fade-in fill-mode-forwards">

            <header style={{ marginBottom: '52px' }}>
                {/* eyebrow in script */}
                <span
                    style={{
                        display: 'block',
                        fontFamily: 'var(--font-script)',
                        fontSize: '0.85rem',
                        color: 'var(--color-ink-faint)',
                        marginBottom: '10px',
                        transform: 'rotate(-0.6deg)',
                        letterSpacing: '0.04em',
                    }}
                >
                    things i meant to say
                </span>
                <h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                        color: 'var(--color-ink)',
                        lineHeight: 1.15,
                        marginBottom: '14px',
                    }}
                >
                    letters i kept
                </h1>
                <p
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        color: 'var(--color-ink-muted)',
                        transform: 'rotate(-0.2deg)',
                        display: 'inline-block',
                    }}
                >
                    some things are easier to say when you name them.
                </p>
            </header>

            {/* ── From the mailbox ── */}
            <section id="mailbox" style={{ marginBottom: '64px' }}>
                <div style={{ marginBottom: '28px' }}>
                    <span
                        className="scrap-label"
                        style={{ color: 'var(--accent-archive)', transform: 'rotate(-0.5deg)', display: 'inline-block' }}
                    >
                        from the mailbox
                    </span>
                    <p
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.82rem',
                            color: 'var(--color-ink-faint)',
                            marginTop: '5px',
                            transform: 'rotate(-0.2deg)',
                        }}
                    >
                        sent sometimes. no schedule. only when ready.
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {generalLetters.length > 0
                        ? generalLetters.map((l, i) => <LetterScrapItem key={l.slug} letter={l} accentColor="var(--accent-archive)" index={i} />)
                        : <EmptyState message="the mailbox is empty for now." subMessage="something is being written." />
                    }
                </div>
            </section>

            <div className="section-divider" />

            {/* ── Letters to Robin ── */}
            <section id="robin" style={{ marginBottom: '64px', marginTop: '28px' }}>
                <div style={{ marginBottom: '28px' }}>
                    <span
                        className="scrap-label"
                        style={{ color: 'var(--accent-robin)', transform: 'rotate(0.4deg)', display: 'inline-block' }}
                    >
                        letters to robin
                    </span>
                    <p
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.82rem',
                            color: 'var(--color-ink-faint)',
                            marginTop: '5px',
                            transform: 'rotate(0.2deg)',
                        }}
                    >
                        for the ones who stay quietly
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {robinLetters.length > 0
                        ? robinLetters.map((l, i) => <LetterScrapItem key={l.slug} letter={l} accentColor="var(--accent-robin)" index={i + 3} />)
                        : <EmptyState message="the drawer is empty for now." subMessage="something is being written." />
                    }
                </div>
            </section>

            <div className="section-divider" />

            {/* ── Letters to Peter ── */}
            <section id="peter" style={{ marginBottom: '80px', marginTop: '28px' }}>
                <div style={{ marginBottom: '28px' }}>
                    <span
                        className="scrap-label"
                        style={{ color: 'var(--accent-peter)', transform: 'rotate(-0.3deg)', display: 'inline-block' }}
                    >
                        letters to peter
                    </span>
                    <p
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.82rem',
                            color: 'var(--color-ink-faint)',
                            marginTop: '5px',
                        }}
                    >
                        {`for the ones you couldn't stop thinking about`}
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {peterLetters.length > 0
                        ? peterLetters.map((l, i) => <LetterScrapItem key={l.slug} letter={l} accentColor="var(--accent-peter)" index={i + 6} />)
                        : (
                            <div
                                className="paper-scrap px-6 py-7 relative inline-flex flex-col items-start gap-3"
                                style={{ transform: 'rotate(0.7deg)', maxWidth: '280px' }}
                            >
                                <div
                                    aria-hidden="true"
                                    style={{
                                        position: 'absolute', top: '-9px', right: '20px',
                                        width: '44px', height: '16px',
                                        background: 'rgba(200,180,180,0.46)',
                                        borderRadius: '1px', transform: 'rotate(0.8deg)',
                                    }}
                                />
                                <EnvelopeSvg
                                    aria-hidden="true"
                                    className="envelope-sway w-[80px] h-auto opacity-50"
                                    strokeColor="color-mix(in srgb, var(--accent-peter) 75%, var(--color-ink-muted))"
                                />
                                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--color-ink-faint)', fontSize: '0.95rem' }}>
                                    no envelopes here yet.
                                </p>
                                <p style={{ fontFamily: 'var(--font-script)', fontSize: '0.82rem', color: 'var(--color-ink-faint)', opacity: 0.7 }}>
                                    something is being written.
                                </p>
                            </div>
                        )
                    }
                </div>
            </section>
        </PageContainer>
    );
}
