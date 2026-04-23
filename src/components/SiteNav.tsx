"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    const pathname = usePathname();
    const isPoemPage = pathname.startsWith("/poems/");

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
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:px-12 md:py-8 bg-[var(--color-canvas)]/80 backdrop-blur-sm border-b border-[var(--color-border)]/10 pointer-events-none">
                <div className="pointer-events-auto">
                    <Link
                        href="/"
                        className="text-ink font-display italic text-[1.1rem] font-normal tracking-tight"
                    >
                        raviolifortwo
                    </Link>
                </div>

                {!isPoemPage && (
                    <>
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
                                        "nav-link transition-colors duration-200 text-[0.85rem] font-body",
                                        pathname === link.href
                                            ? ""
                                            : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
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
                                className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors p-2 -mr-2"
                                aria-label="open menu"
                            >
                                <Menu size={20} strokeWidth={1.5} />
                            </button>
                        </div>
                    </>
                )}
            </nav>

            {/* Mobile Overlay outside the nav tag to ensure full opacity and solid background */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 z-[100] flex flex-col p-8 pointer-events-auto"
                        style={{ backgroundColor: '#FAF7F2' }}
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
                                        "font-display italic text-[2.4rem] transition-all duration-300",
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
