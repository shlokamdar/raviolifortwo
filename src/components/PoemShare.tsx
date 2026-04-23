'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { cn } from '@/lib/utils';

interface PoemShareProps {
    slug: string;
    cardLine: string;
}

export function PoemShare({ slug, cardLine }: PoemShareProps) {
    const [shareOpen, setShareOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    async function downloadShareCard(format: 'square' | 'story') {
        if (!cardRef.current) return;

        try {
            const canvas = await html2canvas(cardRef.current, {
                background: undefined, // use what is set in styles
                scale: 2,
                useCORS: true,
                allowTaint: true,
                logging: false,
            } as any);

            const targetWidth = 1080;
            const targetHeight = format === 'square' ? 1080 : 1920;

            const outputCanvas = document.createElement('canvas');
            outputCanvas.width = targetWidth;
            outputCanvas.height = targetHeight;
            const ctx = outputCanvas.getContext('2d')!;

            // Get background color from CSS variable
            const canvasColor = getComputedStyle(document.documentElement).getPropertyValue('--color-canvas').trim() || '#F7F2EA';
            ctx.fillStyle = canvasColor;
            ctx.fillRect(0, 0, targetWidth, targetHeight);

            const scale = Math.min(targetWidth / canvas.width, targetHeight / canvas.height) * 0.8;
            const x = (targetWidth - canvas.width * scale) / 2;
            const y = (targetHeight - canvas.height * scale) / 2;
            ctx.drawImage(canvas, x, y, canvas.width * scale, canvas.height * scale);

            const dataUrl = outputCanvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = `raviolifortwo-${format}.png`;
            a.click();
        } catch (error) {
            console.error('Image generation failed, falling back to copy link:', error);
            handleCopyLink();
        }
    }

    function handleCopyLink() {
        const url = window.location.origin + `/poems/${slug}`;
        navigator.clipboard.writeText(url).then(() => {
            alert('link copied to clipboard');
        });
    }

    return (
        <div className="mt-12">
            <button
                onClick={() => setShareOpen(!shareOpen)}
                className="font-body text-[0.85rem] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors underline underline-offset-4 decoration-[var(--color-border)] hover:decoration-[var(--color-ink-muted)]"
            >
                {shareOpen ? 'put it away' : 'share this →'}
            </button>

            <div
                className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    shareOpen ? "max-h-[1000px] opacity-100 mt-8" : "max-h-0 opacity-0"
                )}
            >
                <div>
                    <div
                        ref={cardRef}
                        className="bg-[var(--color-canvas)] p-10 border border-[var(--color-border)]/20"
                        style={{ maxWidth: '380px' }}
                    >
                        <p className="font-display italic text-[20px] text-[var(--color-ink)] mb-6 leading-relaxed">
                            {cardLine}
                        </p>
                        <p className="font-body text-[11px] text-[var(--color-ink-faint)] tracking-wider mb-1">
                            raviolifortwo
                        </p>
                        <p className="font-body text-[10px] text-[var(--color-ink-faint)] opacity-60">
                            raviolifortwo.com/poems/{slug}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <button
                            onClick={() => downloadShareCard('square')}
                            className="text-[0.8rem] font-body text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-border)]"
                        >
                            instagram
                        </button>
                        <span className="text-[var(--color-ink-faint)]">·</span>
                        <button
                            onClick={() => downloadShareCard('story')}
                            className="text-[0.8rem] font-body text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-border)]"
                        >
                            story
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
