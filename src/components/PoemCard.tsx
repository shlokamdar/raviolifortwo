import Link from "next/link";
import { Poem } from "@/types/poem";
import { cn } from "@/lib/utils";

interface PoemCardProps {
    poem: Poem;
    className?: string;
}

export function PoemCard({ poem, className }: PoemCardProps) {
    const accentColor = {
        'general': 'var(--accent-general)',
        'archives-from-instagram': 'var(--accent-archive)',
        'letters-to-robin': 'var(--accent-robin)',
        'letters-to-peter': 'var(--accent-peter)',
    }[poem.category] || 'var(--accent-general)';

    return (
        <Link
            href={`/poems/${poem.slug}`}
            style={{ '--hover-accent': accentColor } as React.CSSProperties}
            className={cn(
                "group relative block py-8 px-7 md:px-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-cozy)] shadow-[var(--shadow-soft)] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[var(--shadow-lift)]",
                className
            )}
        >
            <div
                className="pointer-events-none absolute inset-0 rounded-[var(--radius-cozy)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(520px 220px at 20% 0%, color-mix(in srgb, var(--hover-accent) 16%, transparent), transparent 60%)",
                }}
            />
            <h3 className="card-title mb-4 leading-snug">
                {poem.cardLine}
            </h3>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
                {poem.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className="text-[0.65rem] font-body text-[var(--color-ink-faint)]"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
