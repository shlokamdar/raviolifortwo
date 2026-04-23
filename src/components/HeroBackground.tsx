"use client";

export function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
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

            {/* Soft Radial Vignette - 8-12% darker at edges */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 30%, rgba(181, 168, 152, 0.08) 100%)'
                }}
            />
        </div>
    );
}
