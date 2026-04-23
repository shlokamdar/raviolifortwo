import { cn } from "@/lib/utils";

interface PoetNoteProps {
    note: string | null;
    className?: string;
}

export function PoetNote({ note, className }: PoetNoteProps) {
    if (!note) return null;

    return (
        <div className={cn("max-w-[640px] border-t border-[var(--color-border)] pt-8 mt-12", className)}>
            <h4 className="font-body text-[0.7rem] uppercase tracking-[0.1em] text-[var(--color-ink-faint)] mb-2">
                A NOTE
            </h4>
            <div className="font-body text-[0.9rem] leading-[1.8] text-[var(--color-ink-muted)]">
                {note}
            </div>
        </div>
    );
}
