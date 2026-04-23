// components/ReturningVisitor.tsx
'use client';
import { useEffect, useState } from 'react';

export function ReturningVisitor() {
    const [mounted, setMounted] = useState(() => {
        if (typeof window === 'undefined') return false;
        const visited = localStorage.getItem('r2_visited');
        if (visited) return true;
        localStorage.setItem('r2_visited', 'true');
        return false;
    });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!mounted) return;
        const t1 = window.setTimeout(() => setVisible(true), 10);
        const t2 = window.setTimeout(() => setVisible(false), 3800);
        const t3 = window.setTimeout(() => setMounted(false), 5800);
        return () => {
            window.clearTimeout(t1);
            window.clearTimeout(t2);
            window.clearTimeout(t3);
        };
    }, [mounted]);

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
