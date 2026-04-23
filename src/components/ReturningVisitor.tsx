// components/ReturningVisitor.tsx
'use client';
import { useEffect, useState } from 'react';

export function ReturningVisitor() {
    const [visible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem('r2_visited');
        if (visited) {
            setMounted(true);
            // Small delay to trigger fade-in after mount
            setTimeout(() => setVisible(true), 10);

            // Hold for 3s (total 3.8s including fade in), then start fade out (2s)
            setTimeout(() => setVisible(false), 3800);   // start fade
            setTimeout(() => setMounted(false), 5800);   // remove from DOM
        } else {
            localStorage.setItem('r2_visited', 'true');
        }
    }, []);

    if (!mounted) return null;

    return (
        <div
            style={{
                opacity: visible ? 0.45 : 0,
                transition: 'opacity 2000ms ease-in-out',
                WebkitTransition: visible ? 'opacity 800ms' : 'opacity 2000ms',
                MozTransition: visible ? 'opacity 800ms' : 'opacity 2000ms',
                fontFamily: "var(--font-body)",
                fontSize: '11px',
                color: 'var(--color-ink-faint)',
                marginBottom: '40px',
            }}
        >
            you came back.
        </div>
    );
}
