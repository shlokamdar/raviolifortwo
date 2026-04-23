import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { SectionBreak } from "@/components/SectionBreak";
import { BookSpineSvg } from "@/components/ornaments/NotebookIllustrations";
import { TypewriterReveal } from "@/components/ornaments/TypewriterReveal";

const shelfItems = [
    {
        id: "instagram-archive",
        title: "instagram archive",
        description: "poems from my teenage years. each one a fragment of a version of me i was still becoming.",
        status: "active",
        links: [{ label: "view the fragments →", href: "/archive?category=archives-from-instagram" }]
    }
];

export default function ShelfPage() {
    return (
        <PageContainer maxWidth="reading">
            <header className="mb-24">
                <span className="eyebrow mb-4 block">the shelf</span>
                <h1 className="font-display text-3xl text-[var(--color-ink)] mt-2 mb-6">
                    collections
                </h1>
                <p className="font-body text-[0.95rem] text-[var(--color-ink-muted)] leading-relaxed max-w-[480px]">
                    this is where i keep the books.
                    grouped thoughts that wanted to stay together.
                </p>
            </header>

            <div className="flex flex-col gap-16">
                {shelfItems.map((item) => (
                    <div key={item.id} className="group border-t border-[var(--color-border)] pt-12 flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3">
                            <span className="text-[0.6rem] font-body uppercase tracking-wider text-[var(--color-ink-faint)]">
                                {item.status}
                            </span>
                            <h3 className="font-display text-xl text-[var(--color-ink)] mt-2 mb-4 group-hover:text-[var(--accent-general)] transition-colors">
                                {item.title}
                            </h3>
                        </div>

                        <div className="md:w-2/3">
                            <p className="font-body text-[0.9rem] text-[var(--color-ink-muted)] leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <div className="flex flex-col gap-2">
                                {item.links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-[0.8rem] font-body text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-[var(--color-ink-muted)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <section className="mt-16 border-t border-[var(--color-border)] pt-12">
                <span className="text-[0.6rem] font-body uppercase tracking-wider text-[var(--color-ink-faint)]">
                    coming soon
                </span>
                <div className="mt-6 flex items-start gap-6">
                    <BookSpineSvg aria-hidden="true" className="book-breathe w-[54px] h-auto opacity-65 shrink-0" />
                    <div>
                        <p className="font-display italic text-[clamp(1.3rem,2.8vw,1.7rem)] text-[var(--color-ink)] leading-relaxed max-w-[520px]">
                            i kept your place
                        </p>
                        <p className="mt-2 font-body text-[0.85rem] text-[var(--color-ink-muted)] leading-relaxed max-w-[520px]">
                            a book, being written.
                        </p>
                    </div>
                </div>
            </section>

            <SectionBreak texture className="mt-32 mb-24" />

            <section className="mb-24">
                <p className="font-display text-[1rem] text-[var(--color-ink-faint)] mt-24">
                    <TypewriterReveal text={'"there are so many rooms in this house i haven\'t built yet."'} />
                </p>
                <div className="mt-12 flex flex-col gap-4">
                    <Link
                        href="/"
                        className="text-[0.85rem] font-body text-[var(--color-ink-faint)] hover:text-[var(--color-ink-muted)] transition-colors underline underline-offset-4 decoration-[var(--color-border)]"
                    >
                        &larr; back to the room
                    </Link>
                </div>
            </section>
        </PageContainer>
    );
}
