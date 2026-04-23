"use client";

import { useEffect, useMemo, useState } from "react";

export function TypewriterReveal({
  text,
  className,
  startDelayMs = 250,
}: {
  text: string;
  className?: string;
  startDelayMs?: number;
}) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const [active, setActive] = useState(() => Boolean(reduceMotion));

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(() => setActive(true), startDelayMs);
    return () => window.clearTimeout(t);
  }, [reduceMotion, startDelayMs]);

  const steps = useMemo(() => Math.max(18, Math.min(120, text.length)), [text.length]);

  return (
    <span
      className={className}
      style={
        active
          ? ({
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRight: "1px solid rgba(107, 94, 82, 0.25)",
              animation: `tw-typing 6.8s steps(${steps}) 1 forwards, tw-caret 900ms step-end infinite`,
              maxWidth: "100%",
            } as React.CSSProperties)
          : ({
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: 0,
            } as React.CSSProperties)
      }
    >
      <style>{`
        @keyframes tw-typing { from { width: 0 } to { width: 100% } }
        @keyframes tw-caret { 50% { border-color: transparent } }
        @media (prefers-reduced-motion: reduce) {
          span { animation: none !important; border-right: 0 !important; width: auto !important; }
        }
      `}</style>
      {text}
    </span>
  );
}

