import { PageContainer } from "@/components/PageContainer";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import Link from "next/link";
import { getPoemsByCategory } from "@/lib/poems";

export default async function LettersPage() {
    const robinLetters = await getPoemsByCategory('letters-to-robin');
    const peterLetters = await getPoemsByCategory('letters-to-peter');

    return (
        <PageContainer maxWidth="reading" className="opacity-0 animate-fade-in fill-mode-forwards pt-12 md:pt-32">
            <header className="mb-20">
                <span className="eyebrow block mb-4">THINGS I MEANT TO SAY</span>
                <h1 className="font-display italic text-4xl text-[var(--color-ink)] leading-tight">
                    letters i kept
                </h1>
                <p className="font-display italic text-lg text-[var(--color-ink-muted)] mt-4">
                    some things are easier to say when you name them.
                </p>
            </header>

            <section id="robin" className="mb-24">
                <h2 className="font-body text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-robin)] mb-2">LETTERS TO ROBIN</h2>
                <p className="font-body italic text-[0.9rem] text-[var(--color-ink-muted)] mb-10">
                    for the ones who stay quietly
                </p>

                <div className="flex flex-col gap-10">
                    {robinLetters.length > 0 ? (
                        robinLetters.map(letter => (
                            <Link
                                key={letter.slug}
                                href={`/poems/${letter.slug}`}
                                className="group flex flex-col gap-1"
                            >
                                <span className="font-display italic text-xl text-[var(--color-ink)] group-hover:text-[var(--accent-robin)] transition-colors underline-offset-4 group-hover:underline decoration-[var(--accent-robin)]/30">
                                    {letter.title}
                                </span>
                                <span className="font-body text-[0.9rem] text-[var(--color-ink-faint)]">
                                    {letter.eyebrow}
                                </span>
                            </Link>
                        ))
                    ) : (
                        <p className="font-display italic text-[var(--color-ink-faint)]">the drawer is empty for now.</p>
                    )}
                </div>
            </section>

            <section id="peter" className="mb-32">
                <h2 className="font-body text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-peter)] mb-2">LETTERS TO PETER</h2>
                <p className="font-body italic text-[0.9rem] text-[var(--color-ink-muted)] mb-10">
                    for the ones you couldn't stop thinking about
                </p>

                <div className="flex flex-col gap-10">
                    {peterLetters.length > 0 ? (
                        peterLetters.map(letter => (
                            <Link
                                key={letter.slug}
                                href={`/poems/${letter.slug}`}
                                className="group flex flex-col gap-1"
                            >
                                <span className="font-display italic text-xl text-[var(--color-ink)] group-hover:text-[var(--accent-peter)] transition-colors underline-offset-4 group-hover:underline decoration-[var(--accent-peter)]/30">
                                    {letter.title}
                                </span>
                                <span className="font-body text-[0.9rem] text-[var(--color-ink-faint)]">
                                    {letter.eyebrow}
                                </span>
                            </Link>
                        ))
                    ) : (
                        <p className="font-display italic text-[var(--color-ink-faint)]">no envelopes here yet.</p>
                    )}
                </div>
            </section>
        </PageContainer>
    );
}
