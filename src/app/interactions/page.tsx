import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { SectionBreak } from "@/components/SectionBreak";

const interactiveItems = [
    {
        id: "receipt-builder",
        title: "Receipt Builder",
        description: "A way to itemize what was lost.",
        links: [{ label: "see it in a poem →", href: "/poems/order-for-one" }]
    },
    {
        id: "prayer-wall",
        title: "Prayer Wall",
        description: "A stack of quiet pleas.",
        links: [{ label: "see it in a poem →", href: "/poems/saddest-movie-scene" }]
    },
    {
        id: "lunchbox",
        title: "Lunchbox",
        description: "Packing up sunlight and small joys.",
        links: [{ label: "see it in a poem →", href: "/poems/the-little-lunchbox" }]
    },
    {
        id: "spotify-sync",
        title: "Soundscape Sync",
        description: "Bringing the atmosphere of the room to the reading experience.",
        links: [{ label: "read with music →", href: "/poems/fridge-notes-love" }]
    },
    {
        id: "bento-box",
        title: "Bento Box",
        description: "Holding tight to the things that might break.",
        links: []
    },
    {
        id: "delayed-letters",
        title: "Delayed Letter System",
        description: "A mechanism for words that need time to arrive.",
        links: []
    }
];

export default function InteractionsPage() {
    return (
        <PageContainer maxWidth="reading">
            <header className="mb-24">
                <span className="eyebrow mb-4 block">small experiments</span>
                <h1 className="font-display text-3xl text-[var(--color-ink)] mt-2 mb-6">
                    interactions
                </h1>
                <p className="font-body text-[0.95rem] text-[var(--color-ink-muted)] leading-relaxed max-w-[480px]">
                    things that respond. code built for quiet participation.
                </p>
            </header>

            <div className="flex flex-col gap-12">
                {interactiveItems.map((item) => (
                    <div key={item.id} className="group border-t border-[var(--color-border)]/10 pt-8">
                        <h3 className="font-display text-lg text-[var(--color-ink)] mb-3">
                            {item.title.toLowerCase()}
                        </h3>
                        <p className="font-body text-[0.85rem] text-[var(--color-ink-muted)] leading-relaxed mb-4">
                            {item.description.toLowerCase()}
                        </p>
                        <div className="flex flex-col gap-2">
                            {item.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[0.75rem] font-body text-[var(--color-ink-faint)] hover:text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-border)] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <section className="mt-32 mb-24">
                <Link
                    href="/"
                    className="text-[0.85rem] font-body text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors underline underline-offset-4"
                >
                    &larr; back to the room
                </Link>
            </section>
        </PageContainer>
    );
}
