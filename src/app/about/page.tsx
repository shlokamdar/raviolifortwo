import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { EyebrowLabel } from "@/components/EyebrowLabel";
import { SectionBreak } from "@/components/SectionBreak";

export default function AboutPage() {
    return (
        <PageContainer maxWidth="about">
            <header className="mb-20">
                <span className="eyebrow block">who i am</span>
            </header>

            <article className="font-display text-[1.15rem] text-[var(--color-ink)] leading-[1.8] mb-24 space-y-12 max-w-[540px]">
                <p>
                    i spend a lot of time noticing things<br />
                    the way light sits on the floor for a while before leaving<br />
                    how coffee tastes different depending on who i’m thinking about<br />
                    how some days feel too full, and some feel like an empty room
                </p>

                <p>
                    i think poems are just ways of saying<br />
                    <em className="italic">i was here</em><br />
                    to moments that don’t stay long enough
                </p>

                <p>
                    raviolifortwo started on a quiet afternoon<br />
                    the kind where nothing happens<br />
                    but everything feels like it almost could
                </p>

                <p>
                    it became a place for things that don't fit anywhere else<br />
                    not quite conversations, not quite silence<br />
                    just something in between
                </p>

                <p>
                    i don’t always know who i’m writing to<br />
                    but it feels like leaving the door open<br />
                    in case someone arrives<br />
                    looking for the same thing
                </p>

                <p className="pt-8 italic text-[1rem] text-[var(--color-ink-muted)]">
                    stay as long as you need<br />
                    the tea is still warm
                </p>

                <div className="pt-12 text-[0.85rem] text-[var(--color-ink-faint)] tracking-widest uppercase">
                    — Shloka Kamadar
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
