"use client";

import { useEffect, useState } from "react";

export function TimeGreeting() {
    const [greeting, setGreeting] = useState("");
    const [showReturn, setShowReturn] = useState(false);
    const [fadeReturn, setFadeReturn] = useState(false);
    const [removeReturn, setRemoveReturn] = useState(false);

    useEffect(() => {
        try {
            const visited = localStorage.getItem("rft_visited");
            if (!visited) {
                localStorage.setItem("rft_visited", "1");
            } else {
                setShowReturn(true);
                // Start fade out after 4 seconds
                setTimeout(() => setFadeReturn(true), 4000);
                // Remove from DOM after 6 seconds total (4s + 2s fade)
                setTimeout(() => setRemoveReturn(true), 6000);
            }
        } catch (e) {
            // Fail silently if localStorage is blocked
        }

        const hour = new Date().getHours();
        if (hour >= 5 && hour <= 11) {
            setGreeting("good morning. the light came in early today.");
        } else if (hour >= 12 && hour <= 14) {
            setGreeting("it's the kind of afternoon that asks nothing of you.");
        } else if (hour >= 15 && hour <= 17) {
            setGreeting("the afternoon is doing that slow golden thing again.");
        } else if (hour >= 18 && hour <= 20) {
            setGreeting("evenings like this one were made for reading.");
        } else if (hour >= 21 && hour <= 23) {
            setGreeting("it's late. you found this at the right time.");
        } else if (hour === 0 || hour === 1) {
            setGreeting("still up? me too. come in.");
        } else if (hour >= 2 && hour <= 4) {
            setGreeting("i can't sleep either. pull up a chair.");
        }
    }, []);

    if (!greeting) return <div style={{ height: '24px', marginBottom: '20px' }} />;

    return (
        <div style={{ position: 'relative', marginBottom: '20px' }}>
            {showReturn && !removeReturn && (
                <div 
                    className="mono"
                    style={{
                        position: 'absolute',
                        top: '-24px',
                        left: 0,
                        fontSize: '10px',
                        letterSpacing: '0.08em',
                        color: 'var(--dust)',
                        opacity: fadeReturn ? 0 : 0.55,
                        transition: 'opacity 2s ease',
                        pointerEvents: 'none'
                    }}
                >
                    you came back.
                </div>
            )}
            <div 
                className="mono" 
                style={{ 
                    fontSize: '11px', 
                    letterSpacing: '0.06em',
                    color: 'var(--dust)', 
                    opacity: 0.65, 
                }}
            >
                {greeting}
            </div>
        </div>
    );
}
