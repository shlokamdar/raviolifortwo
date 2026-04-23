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
            <div className={cn("w-full py-16 px-8 bg-cream border border-shadow flex flex-col items-center justify-center text-center", className)}>
                <span className="eyebrow block mb-6 opacity-40">a question to carry with you</span>
                <p className="font-eb-garamond italic text-2xl md:text-3xl text-ink leading-tight max-w-[500px]">
                    "{promptText}"
                </p>
                <div className="mt-8 text-[10px] font-dm-sans text-dust uppercase tracking-[0.2em] opacity-60">
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
                "w-full min-h-[300px] md:aspect-[16/9] bg-cream/50 border border-shadow/50 flex items-center justify-center rounded-sm p-12 transition-warmth hover:bg-cream/80",
                className
            )}
        >
            <div className="text-center max-w-[300px]">
                <div className="text-3xl mb-6 opacity-80">{featureContent.icon}</div>
                <span className="eyebrow block mb-3 opacity-40">{featureContent.label}</span>
                <p className="font-eb-garamond italic text-[18px] text-dust leading-relaxed mb-6">
                    "{featureContent.desc}"
                </p>
                <div className="h-[1px] w-8 bg-shadow/60 mx-auto mb-6" />
                <p className="text-[10px] font-dm-sans text-dust/40 uppercase tracking-[0.2em]">
                    slug: {slug}
                </p>
            </div>
        </div>
    );
}
