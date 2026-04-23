"use client";

import { useState } from "react";

export function TimeGreeting() {
    const [greeting] = useState(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 11) return "good morning. come in.";
        if (hour >= 11 && hour < 16) return "good afternoon. come in.";
        if (hour >= 16 && hour < 21) return "good evening. come in.";
        if (hour >= 21 && hour < 24) return "do you love night time too? come in.";
        return "can't sleep either. come in.";
    });

    if (!greeting) return null;

    return (
        <p className="font-body text-[0.8rem] text-[var(--color-ink-faint)] mb-4 lowercase tracking-tight">
            {greeting}
        </p>
    );
}
