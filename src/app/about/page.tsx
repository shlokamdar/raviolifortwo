import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { DustSpecks } from "@/components/ornaments/DustSpecks";
import { RevealOnScroll } from "@/components/ornaments/RevealOnScroll";
import {
    CandleSvg,
    LeafSvg,
    TeaCupSvg,
    WindowSvg,
} from "@/components/ornaments/NotebookIllustrations";

export default function AboutPage() {
    return (
        <PageContainer maxWidth="about">
            <header className="mb-20">
                <span className="eyebrow block">who i am</span>
            </header>

            <article className="relative mb-24 max-w-[560px]">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 watercolor-layer opacity-70 rounded-[var(--radius-cozy)]"
                    style={{ filter: "blur(0px)" }}
                />
                <DustSpecks className="absolute inset-0 -z-10 opacity-80" />

                {/* scattered notebook illustrations */}
                <TeaCupSvg
                    aria-hidden="true"
                    className="absolute -z-10 hidden sm:block"
                    style={{
                        width: 120,
                        height: 120,
                        left: -46,
                        top: 64,
                        opacity: 0.35,
                    }}
                />
                <CandleSvg
                    aria-hidden="true"
                    className="absolute -z-10 hidden md:block"
                    style={{
                        width: 120,
                        height: 140,
                        right: -54,
                        top: 190,
                        opacity: 0.32,
                    }}
                />
                <LeafSvg
                    aria-hidden="true"
                    className="absolute -z-10 hidden sm:block"
                    style={{
                        width: 110,
                        height: 110,
                        right: -42,
                        top: 28,
                        opacity: 0.26,
                        transform: "rotate(8deg)",
                    }}
                />
                <WindowSvg
                    aria-hidden="true"
                    className="absolute -z-10 hidden md:block"
                    style={{
                        width: 140,
                        height: 140,
                        left: -56,
                        bottom: 90,
                        opacity: 0.22,
                        transform: "rotate(-3deg)",
                    }}
                />

                <div className="font-display text-[1.15rem] text-[var(--color-ink)] leading-[1.85] space-y-10">
                    <section className="rounded-[var(--radius-cozy)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-soft)] px-6 py-6 md:px-7 md:py-7">
                        <p>
                            i spend a lot of time noticing things<br />
                            the way light sits on the floor for a while before leaving<br />
                            how coffee tastes different depending on who i’m thinking about<br />
                            how some days feel too full, and some feel like an empty room
                        </p>
                    </section>

                    <section className="rounded-[var(--radius-cozy)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-soft)] px-6 py-6 md:px-7 md:py-7">
                        <p>
                            i think poems are just ways of saying<br />
                            <em className="italic block text-center text-[clamp(1.55rem,3.2vw,1.85rem)] leading-tight tracking-tight my-3 text-[var(--accent-general)]">
                                i was here
                            </em>
                            to moments that don’t stay long enough
                        </p>
                    </section>

                    <section className="rounded-[var(--radius-cozy)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-soft)] px-6 py-6 md:px-7 md:py-7">
                        <p>
                            raviolifortwo started on a quiet afternoon<br />
                            the kind where nothing happens<br />
                            but everything feels like it almost could
                        </p>
                    </section>

                    <section className="rounded-[var(--radius-cozy)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-soft)] px-6 py-6 md:px-7 md:py-7">
                        <p>
                            it became a place for things that {"don't"} fit anywhere else<br />
                            not quite conversations, not quite silence<br />
                            just something in between
                        </p>
                    </section>

                    <section className="rounded-[var(--radius-cozy)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-soft)] px-6 py-6 md:px-7 md:py-7">
                        <p>
                            i don’t always know who i’m writing to<br />
                            but it feels like leaving the door open<br />
                            in case someone arrives<br />
                            looking for the same thing
                        </p>
                    </section>

                    <RevealOnScroll offsetY={12}>
                        <p className="pt-10 italic text-[1rem] text-[var(--color-ink-muted)] text-center">
                            stay as long as you need<br />
                            the tea is still warm
                        </p>
                    </RevealOnScroll>

                    <div className="pt-12 text-[0.85rem] text-[var(--color-ink-faint)] tracking-widest uppercase">
                        — Shloka Kamadar
                    </div>
                </div>
            </article>

            <footer className="mt-32 pb-24 border-t border-[var(--color-border)] pt-12">
                <nav className="flex flex-col gap-4">
                    <Link href="/" className="text-[0.85rem] font-body text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors underline underline-offset-4 decoration-[var(--color-border)]">
                        &larr; take me back
                    </Link>
                </nav>
            </footer>
        </PageContainer>
    );
}
