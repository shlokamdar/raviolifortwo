import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & {
  strokeColor?: string;
};

const defaultStroke = "color-mix(in srgb, var(--color-ink-muted) 72%, transparent)";

export function TeaCupSvg({ strokeColor = defaultStroke, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" {...props}>
      <path
        d="M30 58c0 17 11 30 30 30s30-13 30-30"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M28 58h64"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M84 62c10 0 16-6 16-14 0-6-4-10-10-10h-4"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 92c8 6 16 9 24 9 10 0 18-3 26-9"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M44 40c-4-6-2-11 2-15M60 40c-4-6-2-11 2-15M76 40c-4-6-2-11 2-15"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function CandleSvg({ strokeColor = defaultStroke, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 120 140" fill="none" {...props}>
      <path
        d="M60 22c6 9 6 16 0 22-6-6-6-13 0-22Z"
        className="candle-flame"
        stroke="color-mix(in srgb, var(--accent-general) 72%, transparent)"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="color-mix(in srgb, var(--accent-general) 12%, transparent)"
      />
      <path
        d="M60 44v10"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M40 54c0-8 7-14 20-14s20 6 20 14v56c0 10-8 18-20 18s-20-8-20-18V54Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M44 78c10 6 22 6 32 0"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function LeafSvg({ strokeColor = defaultStroke, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" {...props}>
      <path
        d="M24 72c22-40 58-44 72-44-4 14-14 56-54 70-10 4-22 2-28-6-4-6-2-14 10-20Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M38 86c22-10 40-28 56-48"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function WindowSvg({ strokeColor = defaultStroke, ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 150 150" fill="none" {...props}>
      <path
        d="M36 34h78v92H36V34Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M75 34v92M36 80h78"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M114 34l18 10v92l-18-10"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.65"
      />
    </svg>
  );
}

export function DividerSprigSvg({ strokeColor = "var(--accent-general)", ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 420 40" fill="none" {...props}>
      <path
        d="M10 22c56-10 98-10 150 0 22 4 44 4 66 0 52-10 94-10 184 0"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M210 20c-8-10-14-12-22-12 4 8 10 14 22 12ZM210 20c8-10 14-12 22-12-4 8-10 14-22 12Z"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function EnvelopeSvg({ strokeColor = "color-mix(in srgb, var(--accent-robin) 75%, var(--color-ink-muted))", ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 160 120" fill="none" {...props}>
      <path
        d="M22 30h116v66H22V30Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M22 30l58 44 58-44"
        stroke={strokeColor}
        strokeWidth="1.3"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M22 96l46-34M138 96l-46-34"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function BookSpineSvg({ strokeColor = "color-mix(in srgb, var(--accent-archive) 70%, var(--color-ink-muted))", ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 120 160" fill="none" {...props}>
      <path
        d="M34 22c8-6 18-8 30-8s22 2 30 8v120c-8 6-18 8-30 8s-22-2-30-8V22Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M44 34h40M44 52h40M44 118h40"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M42 140c6 4 14 6 22 6s16-2 22-6"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

