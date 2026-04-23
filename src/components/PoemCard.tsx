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

    const badges: Record<string, { label: string; color: string }> = {
        'general': { label: 'new', color: 'var(--accent-general)' },
        'archives-from-instagram': { label: 'archive', color: 'var(--accent-archive)' },
    };

    const badge = badges[poem.category];

    return (
        <Link
            href={`/poems/${poem.slug}`}
            style={{ '--hover-accent': accentColor } as React.CSSProperties}
            className={cn(
                "group relative block bg-transparent py-10 border-t border-[var(--color-border)] transition-all duration-200 hover:pl-4",
                className
            )}
        >




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
