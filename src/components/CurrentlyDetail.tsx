"use client";

import { useEffect, useState } from "react";

/**
 * CONFIG: To update the rotating personal detail, simply add/remove strings from this array.
 */
const pool = [
    "somewhere between fine and not",
    "rereading old notes",
    "a book with a broken spine",
    "half a thought and a full cup of tea",
    "learning to sit with it",
    "listening to the same song again"
];

export function CurrentlyDetail() {
    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        // Pick a random status from the pool on each refresh
        const randomStatus = pool[Math.floor(Math.random() * pool.length)];
        setStatus(randomStatus);
    }, []);

    if (!status) return null;

    return (
        <div className="hidden sm:block opacity-60">
            <p className="font-body text-[11px] md:text-[12px] text-[var(--color-ink-muted)] lowercase text-right">
                currently: {status}
            </p>
        </div>
    );
}
