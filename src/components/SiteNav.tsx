"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "come in →", accent: "var(--accent-general)" },
    { href: "/archive", label: "what i wrote →", accent: "var(--accent-archive)" },
    { href: "/letters", label: "letters i kept →", accent: "var(--accent-robin)" },
    { href: "/about", label: "who i am →", accent: "var(--accent-general)" },
];

export function SiteNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:px-10 md:py-6 pointer-events-none relative">
                <div className="absolute inset-x-0 top-0 h-[86px] md:h-[96px] bg-[var(--color-canvas)]/65 backdrop-blur-md border-b border-[var(--color-border)] pointer-events-none -z-10" />
                <div className="pointer-events-auto">
                    <Link
                        href="/"
                        className="text-[var(--color-ink)] font-display italic text-[1.05rem] md:text-[1.1rem] font-normal tracking-tight"
                    >
                        raviolifortwo
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex flex-row items-center gap-8 pointer-events-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                color: pathname === link.href ? link.accent : undefined
                            }}
                            className={cn(
                                "nav-link transition-colors duration-300 text-[0.9rem] font-body px-3 py-2 rounded-full",
                                pathname === link.href
                                    ? ""
                                    : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-warm)]"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden pointer-events-auto">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors p-2 -mr-2 rounded-full hover:bg-[var(--color-surface-warm)]"
                        aria-label="open menu"
                    >
                        <Menu size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay outside the nav tag to ensure full opacity and solid background */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 z-[100] flex flex-col p-7 md:p-8 pointer-events-auto"
                        style={{ backgroundColor: 'var(--color-canvas)' }}
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="font-display italic text-[1.1rem] opacity-40">raviolifortwo</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(false);
                                }}
                                className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] p-2 -mr-2"
                                aria-label="close menu"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        <div className="flex flex-col flex-1 justify-center gap-12" onClick={(e) => e.stopPropagation()}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "font-display italic text-[clamp(1.9rem,7vw,2.6rem)] transition-all duration-300",
                                        pathname === link.href
                                            ? "text-[var(--color-ink)] pl-4 border-l-2 border-[var(--color-border)]"
                                            : "text-[var(--color-ink-muted)]"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <p className="font-body text-[0.7rem] text-[var(--color-ink-faint)] lowercase tracking-widest">
                                stay as long as you need.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
