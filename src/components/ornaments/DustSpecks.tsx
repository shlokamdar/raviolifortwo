"use client";

import { useMemo } from "react";

type Speck = {
  id: string;
  left: string;
  top: string;
  size: number;
  opacity: number;
  driftX: number;
  duration: number;
  delay: number;
};

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function DustSpecks({
  count = 18,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const specks = useMemo(() => {
    const rand = mulberry32(1247);
    return Array.from({ length: count }).map((_, i): Speck => {
      const left = `${Math.round(rand() * 100)}%`;
      const top = `${Math.round(rand() * 100)}%`;
      const size = 1 + Math.round(rand() * 2);
      const opacity = 0.06 + rand() * 0.08;
      const driftX = (rand() - 0.5) * 38;
      const duration = 18 + rand() * 16;
      const delay = -rand() * duration;
      return {
        id: `speck-${i}`,
        left,
        top,
        size,
        opacity,
        driftX,
        duration,
        delay,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes dust-drift {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(var(--drift-x), -14px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .dust-speck {
          position: absolute;
          border-radius: 999px;
          background: rgba(28, 24, 20, 1);
          will-change: transform;
          animation: dust-drift var(--dur) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        @media (prefers-reduced-motion: reduce) {
          .dust-speck { animation: none !important; }
        }
      `}</style>
      {specks.map((s) => (
        <span
          key={s.id}
          className="dust-speck"
          style={
            {
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              ["--drift-x" as never]: `${s.driftX}px`,
              ["--dur" as never]: `${s.duration}s`,
              ["--delay" as never]: `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

