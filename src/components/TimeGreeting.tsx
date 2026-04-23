"use client";

import { useState } from "react";

export function TimeGreeting() {
    const [greeting] = useState(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 11) return "good morning. you're up early.";
        if (hour >= 11 && hour < 17) return "afternoon. come in.";
        if (hour >= 17 && hour < 21) return "settle in. it's evening.";
        return "can't sleep either?";
    });

    if (!greeting) return null;

    return (
        <p className="font-body text-[0.8rem] text-[var(--color-ink-faint)] mb-4 lowercase tracking-tight">
            {greeting}
        </p>
    );
}
