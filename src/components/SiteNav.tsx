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
        <header
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                background: scrolled ? 'rgba(245, 239, 230, 0.90)' : 'rgba(245, 239, 230, 0.74)',
                backdropFilter: 'blur(9px)',
                borderBottom: scrolled ? '1px solid rgba(120,100,76,0.12)' : '1px solid transparent',
                transition: 'background 600ms ease, border-color 600ms ease, box-shadow 600ms ease',
                boxShadow: scrolled ? '0 2px 18px rgba(60,40,20,0.07)' : 'none',
            }}
        >
            <div className="header-container">
                <div className="header">
                    {/* Logo */}
                    <div className="shrink-0 pointer-events-auto" style={{ transform: 'rotate(-0.9deg)' }}>
                        <Link href="/" aria-label="raviolifortwo home">
                            <Image
                                src="/ransomizer.com.png"
                                alt="raviolifortwo"
                                width={237}
                                height={73}
                                style={{
                                    objectFit: 'contain',
                                    filter: 'sepia(0.18) saturate(1.28) contrast(1.06) drop-shadow(0 2px 4px rgba(0,0,0,0.08))',
                                    opacity: 0.97,
                                    width: 'auto',
                                    height: 'auto'
                                }}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="nav pointer-events-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative transition-colors duration-200"
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.95rem',
                                    fontWeight: 400,
                                    color: pathname === link.href ? link.accent : '#2f2a26',
                                }}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-4px',
                                            left: 0,
                                            right: 0,
                                            height: '1px',
                                            background: link.accent,
                                            opacity: 0.5,
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="md:hidden pointer-events-auto flex items-center">
                        <button
                            className="menu-btn p-2"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="menu-panel pointer-events-auto"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2"
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '1.2rem',
                                        color: pathname === link.href ? link.accent : '#2f2a26',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
