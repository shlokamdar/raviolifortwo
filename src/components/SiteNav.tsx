"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "come in" },
    { href: "/archive", label: "what i wrote" },
    { href: "/letters", label: "letters i kept" },
    { href: "/about", label: "who i am" },
];

export function SiteNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            {/* Desktop Left Nav */}
            <header className="hidden md:flex flex-col fixed top-0 left-0 bottom-0 w-[180px] pt-[68px] pl-[20px] z-50">
                <div className="shrink-0 mb-12 pointer-events-auto">
                    <Link href="/" aria-label="raviolifortwo home">
                        <Image
                            src="/ransomizer.com.png"
                            alt="raviolifortwo"
                            width={160}
                            height={50}
                            style={{
                                objectFit: 'contain',
                                width: '100%',
                                height: 'auto'
                            }}
                            priority
                        />
                    </Link>
                </div>

                <nav className="flex flex-col gap-5 pointer-events-auto pl-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`mono relative transition-colors duration-200 flex items-center ${isActive ? '!text-[var(--ink)]' : 'hover:!text-[var(--ink)]'}`}
                            >
                                {isActive && (
                                    <span className="absolute -left-[16px] w-[12px] h-[1px] bg-[var(--dust)]" />
                                )}
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </header>

            {/* Mobile Nav Top Bar */}
            <header className="md:hidden fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-[var(--cream)] border-b border-[var(--dust)]/10">
                <div className="shrink-0 pointer-events-auto">
                    <Link href="/" aria-label="raviolifortwo home">
                        <Image
                            src="/ransomizer.com.png"
                            alt="raviolifortwo"
                            width={140}
                            height={40}
                            style={{
                                objectFit: 'contain',
                                width: '140px',
                                height: 'auto'
                            }}
                            priority
                        />
                    </Link>
                </div>
                <button
                    className="p-2 text-[var(--ink)] pointer-events-auto"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed top-[73px] left-0 right-0 bg-[var(--cream)] p-6 flex flex-col gap-6 z-40 border-b border-[var(--dust)]/10 shadow-lg pointer-events-auto"
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`mono relative transition-colors duration-200 flex items-center text-lg ${isActive ? '!text-[var(--ink)]' : 'hover:!text-[var(--ink)]'}`}
                                >
                                    {isActive && (
                                        <span className="absolute -left-[16px] w-[12px] h-[1px] bg-[var(--dust)]" />
                                    )}
                                    {link.label}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
