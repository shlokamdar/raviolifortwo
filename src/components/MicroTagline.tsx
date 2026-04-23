"use client";

import { useEffect, useState } from "react";

const fragments = [
    "written in the thick of it",
    "a quieter week than expected",
    "still thinking about tuesday",
    "the window was open",
    "between two songs",
    "something that wouldn't leave",
    "after the third cup of tea",
    "a feeling with no name yet"
];

export function MicroTagline() {
    const [fragment, setFragment] = useState<string>("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Select random fragment on mount
        const randomFragment = fragments[Math.floor(Math.random() * fragments.length)];
        setFragment(randomFragment); // eslint-disable-line react-hooks/set-state-in-effect

        // Fade in after page loads (short delay to ensure layout is ready)
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    if (!fragment) return <div className="h-[20px]" />; // Spacer to prevent jump

    return (
        <p
            className={`font-display italic text-[13px] md:text-[14px] text-[var(--accent-general)] transition-opacity duration-[400ms] ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            style={{ pointerEvents: "none" }}
        >
            → {fragment}
        </p>
    );
}
