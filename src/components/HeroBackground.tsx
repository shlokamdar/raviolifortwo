"use client";

export function HeroBackground() {
    return (
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
            {/* Paper Texture using SVG feTurbulence */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <filter id="grainy">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#grainy)" />
                </svg>
            </div>

        </div>
    );
}
