"use client";

import { useState, useEffect } from "react";

export function TimeGreeting() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 11) {
            setGreeting("good morning. you're up early.");
        } else if (hour >= 11 && hour < 17) {
            setGreeting("afternoon. come in.");
        } else if (hour >= 17 && hour < 21) {
            setGreeting("settle in. it's evening.");
        } else {
            setGreeting("can't sleep either?");
        }
    }, []);

    if (!greeting) return null;

    return (
        <p className="font-body text-[0.8rem] text-[var(--color-ink-faint)] mb-4 lowercase tracking-tight">
            {greeting}
        </p>
    );
}
