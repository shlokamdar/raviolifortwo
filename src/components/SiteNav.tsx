"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "come in", accent: "var(--accent-general)" },
    { href: "/archive", label: "what i wrote", accent: "var(--accent-archive)" },
    { href: "/letters", label: "letters i kept", accent: "var(--accent-robin)" },
    { href: "/about", label: "who i am", accent: "var(--accent-general)" },
];

export function SiteNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 18);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50"
                style={{
                    background: scrolled
                        ? 'rgba(245, 239, 230, 0.90)'
                        : 'rgba(245, 239, 230, 0.74)',
                    backdropFilter: 'blur(9px)',
                    borderBottom: scrolled ? '1px solid rgba(120,100,76,0.12)' : '1px solid transparent',
                    transition: 'background 600ms ease, border-color 600ms ease, box-shadow 600ms ease',
                    boxShadow: scrolled ? '0 2px 18px rgba(60,40,20,0.07)' : 'none',
                }}
            >
                {/* Inner wrapper — constrains content width, centred */}
                <div className="flex justify-between items-center mx-auto px-6" style={{ maxWidth: '1100px' }}>
                {/* Logo — the PNG */}
                <div className="pointer-events-auto shrink-0" style={{ transform: 'rotate(-0.9deg)', paddingLeft: '2rem', paddingTop: '1.5rem' }}>
                    <Link href="/" aria-label="raviolifortwo home">
                        <Image
                            src="/ransomizer.com.png"
                            alt="raviolifortwo"
                            width={237}
                            height={73}
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'left center',
                                width: 'auto',
                                height: 'auto',
                                filter: 'sepia(0.18) saturate(1.28) contrast(1.06) drop-shadow(0 2px 4px rgba(0,0,0,0.08))',
                                opacity: 0.97,
                            }}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop nav — minimal, Inter font */}
                <div className="hidden md:flex flex-row items-center gap-6 pointer-events-auto">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "nav-link-custom relative transition-all duration-200",
                                pathname === link.href ? "text-[var(--color-ink)]" : "text-[var(--color-ink-muted)] hover:text-[var(--accent-general)]"
                            )}
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.9rem',
                                fontWeight: 400,
                                transform: `rotate(${i % 2 === 0 ? '-0.2deg' : '0.1deg'})`,
                                display: 'inline-block',
                            } as React.CSSProperties}
                        >
                            {link.label}
                            {/* Subtle underline for active item */}
                            {pathname === link.href && (
                                <span
                                    aria-hidden="true"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        background: 'rgba(120, 100, 76, 0.3)',
                                    }}
                                />
                            )}
                            {/* Soft hover underline (handled by CSS) */}
                            <span className="hover-underline" />
                        </Link>
                    ))}
                </div>

                {/* Mobile toggle */}
                <div className="md:hidden pointer-events-auto">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors p-2 -mr-2"
                        aria-label="open menu"
                    >
                        <Menu size={20} strokeWidth={1.5} />
                    </button>
                </div>
                </div>{/* end inner wrapper */}
            </nav>

            {/* Mobile overlay — like opening a journal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 24 }}
                        transition={{ duration: 0.35, ease: [0.25, 0, 0, 1] }}
                        className="fixed inset-0 z-[100] flex flex-col p-7 pointer-events-auto"
                        style={{ backgroundColor: 'var(--color-canvas)' }}
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Grain in the overlay */}
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
                                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
                                backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
                            }}
                        />

                        <div className="relative z-10 flex justify-between items-center mb-20">
                            <Image
                                src="/ransomizer.com.png"
                                alt="raviolifortwo"
                                width={146}
                                height={45}
                                style={{
                                    objectFit: 'contain',
                                    width: 'auto',
                                    height: 'auto',
                                    filter: 'sepia(0.18) saturate(1.24) contrast(1.05) drop-shadow(0 2px 4px rgba(47,42,38,0.22))',
                                    opacity: 0.95,
                                    transform: 'rotate(-0.5deg)',
                                }}
                            />
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] p-2 -mr-2 transition-colors duration-400"
                                aria-label="close menu"
                            >
                                <X size={22} strokeWidth={1.5} />
                            </button>
                        </div>

                        <div className="relative z-10 flex flex-col flex-1 justify-center gap-14" onClick={(e) => e.stopPropagation()}>
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                                        color: pathname === link.href ? link.accent : 'var(--color-ink-muted)',
                                        transform: `rotate(${[-0.3, 0.2, -0.1, 0.2][i]}deg)`,
                                        display: 'inline-block',
                                        transition: 'color 400ms ease',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="relative z-10 mt-auto">
                            <p
                                style={{
                                    fontFamily: "var(--font-script)",
                                    fontSize: "0.85rem",
                                    color: "var(--color-ink-faint)",
                                    transform: "rotate(-0.8deg)",
                                    display: "inline-block",
                                }}
                            >
                                stay as long as you need.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
