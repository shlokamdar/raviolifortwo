"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: string;
  y: string;
  size: string;
  duration: string;
  delay: string;
  drift: string;
}

export function AmbientParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 18-22 particles
    const count = Math.floor(Math.random() * 5) + 18;
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${(Math.random() * 1.5 + 1).toFixed(1)}px`,
      duration: `${(Math.random() * 10 + 12).toFixed(1)}s`,
      delay: `${(Math.random() * -20).toFixed(1)}s`,
      drift: `${(Math.random() * 40 - 20).toFixed(1)}px`,
    }));
    setParticles(items); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle-drift"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: "rgba(180, 140, 120, 0.25)",
            animationDuration: p.duration,
            animationDelay: p.delay,
            "--drift-x": p.drift,
          } as React.CSSProperties & { [key: string]: string }}
        />
      ))}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes particle-drift {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(var(--drift-x));
            opacity: 0;
          }
        }
        .animate-particle-drift {
          animation-name: particle-drift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}} />
    </div>
  );
}
