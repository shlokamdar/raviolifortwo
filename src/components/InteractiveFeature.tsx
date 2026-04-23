"use client";

import { cn } from "@/lib/utils";

interface InteractiveFeatureProps {
    slug: string;
    type: string | null;
    className?: string;
}

export function InteractiveFeature({ slug, type, className }: InteractiveFeatureProps) {
    if (!type || type === "NONE") return null;

    if (type.startsWith("spotify:")) {
        const trackId = type.split(":")[1];
        return (
            <iframe
                style={{
                    borderRadius: '8px',
                    marginTop: '40px',
                    opacity: 0.85,
                    border: 'none',
                }}
                src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        );
    }

    if (type.startsWith("prompt:")) {
        const promptText = type.replace("prompt:", "");
        return (
            <div
                className={cn(
                    "w-full py-14 md:py-16 px-7 md:px-8 bg-[var(--color-surface-warm)] border border-[var(--color-border)] rounded-[var(--radius-cozy)] shadow-[var(--shadow-soft)] flex flex-col items-center justify-center text-center",
                    className
                )}
            >
                <span className="eyebrow block mb-6 opacity-40">a question to carry with you</span>
                <p className="font-display italic text-[clamp(1.35rem,3.4vw,1.9rem)] text-[var(--color-ink)] leading-tight max-w-[560px]">
                    &quot;{promptText}&quot;
                </p>
                <div className="mt-8 text-[10px] font-body text-[var(--color-ink-faint)] uppercase tracking-[0.2em] opacity-70">
                    — raviolifortwo
                </div>
            </div>
        );
    }

    const featureContent = {
        'receipt-builder': { icon: '📝', label: 'receipt builder', desc: 'itemizing the ghosts of love' },
        'prayer-wall': { icon: '🕯️', label: 'prayer wall', desc: 'a stack of quiet pleas' },
        'lunchbox': { icon: '🍱', label: 'lunchbox', desc: 'packing small joys for later' },
        'bento-box': { icon: '📦', label: 'bento box', desc: 'holding tight to what breaks' },
    }[type as string] || { icon: '✨', label: type, desc: 'something i\'m building' };

    return (
        <div
            className={cn(
                "w-full min-h-[260px] md:min-h-[300px] md:aspect-[16/9] bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center rounded-[var(--radius-cozy)] p-8 md:p-12 shadow-[var(--shadow-soft)] transition-warmth hover:bg-[var(--color-surface-strong)]",
                className
            )}
        >
            <div className="text-center max-w-[300px]">
                <div className="text-3xl mb-6 opacity-80">{featureContent.icon}</div>
                <span className="eyebrow block mb-3 opacity-40">{featureContent.label}</span>
                <p className="font-display italic text-[1.05rem] text-[var(--color-ink-muted)] leading-relaxed mb-6">
                    &quot;{featureContent.desc}&quot;
                </p>
                <div className="h-[1px] w-8 bg-[var(--color-border)] mx-auto mb-6" />
                <p className="text-[10px] font-body text-[var(--color-ink-faint)] uppercase tracking-[0.2em] opacity-70">
                    slug: {slug}
                </p>
            </div>
        </div>
    );
}
