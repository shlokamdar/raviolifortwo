"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "come in" },
    { href: "/archive", label: "what i wrote" },
    { href: "/letters", label: "letters i kept" },
    { href: "/about", label: "who i am" },
    { href: "/kept", label: "i kept your place" },
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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <>
            <style>{`
                @keyframes softpulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 0.3; }
                }
                .kept-link-desktop:hover {
                    color: #D4B892 !important;
                }
                .kept-link-desktop:hover .kept-star {
                    opacity: 1.0 !important;
                }
            `}</style>
            {/* Desktop Left Nav */}
            <header className="hidden md:flex flex-col fixed top-0 left-0 bottom-0 w-[220px] pt-[68px] pl-[20px] z-50">
                <div className="shrink-0 mb-12 pointer-events-auto">
                    <Link href="/" aria-label="raviolifortwo home">
                        <Image
                            src="/ransomizer.com.png"
                            alt="raviolifortwo"
                            width={180}
                            height={60}
                            style={{
                                objectFit: 'contain',
                                width: '100%',
                                minWidth: '180px',
                                height: 'auto'
                            }}
                            priority
                        />
                    </Link>
                </div>

                <nav className="flex flex-col gap-5 pointer-events-auto pl-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                        
                        if (link.href === '/kept') {
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="mono relative transition-colors duration-200 flex items-center kept-link-desktop"
                                    style={{
                                        color: isActive ? '#F0E8D8' : '#C4A882',
                                    }}
                                >
                                    <span 
                                        style={{
                                            fontFamily: 'var(--font-ibm-plex-mono)',
                                            fontSize: '10px',
                                            color: '#C4A882',
                                            marginRight: '5px',
                                            animation: isActive ? 'none' : 'softpulse 3s ease-in-out infinite',
                                            opacity: isActive ? 1 : 0.7,
                                        }}
                                        className="kept-star"
                                    >
                                        ✦
                                    </span>
                                    {link.label}
                                </Link>
                            );
                        }

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

            {/* Mobile Nav Top Bar (Logo & Custom Hamburger) */}
            <div className="md:hidden fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-40 pointer-events-none">
                <div className="shrink-0 pointer-events-auto">
                    <Link href="/" aria-label="raviolifortwo home">
                        <Image
                            src="/ransomizer.com.png"
                            alt="raviolifortwo"
                            width={140}
                            height={45}
                            style={{
                                objectFit: 'contain',
                                width: '140px',
                                minWidth: '140px',
                                height: 'auto'
                            }}
                            priority
                        />
                    </Link>
                </div>
                <button
                    className="w-[44px] h-[44px] flex flex-col items-center justify-center gap-[4px] pointer-events-auto"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                    style={{ border: 'none', background: 'none' }}
                >
                    <div style={{ width: '18px', height: '1.5px', backgroundColor: 'var(--ink)' }} />
                    <div style={{ width: '18px', height: '1.5px', backgroundColor: 'var(--ink)' }} />
                    <div style={{ width: '18px', height: '1.5px', backgroundColor: 'var(--ink)' }} />
                </button>
            </div>

            {/* Fullscreen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center md:hidden pointer-events-auto"
                        style={{ backgroundColor: 'var(--cream)' }}
                    >
                        <Image
                            src="/ransomizer.com.png"
                            alt="raviolifortwo"
                            width={120}
                            height={40}
                            style={{ objectFit: 'contain', width: '120px', height: 'auto' }}
                        />
                        
                        <div style={{ height: '48px' }} />
                        
                        <nav className="flex flex-col items-center" style={{ gap: '28px' }}>
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                                if (link.href === '/kept') {
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="mono flex items-center kept-link-mobile"
                                            style={{
                                                fontSize: '13px',
                                                textTransform: 'lowercase',
                                                letterSpacing: '0.06em',
                                                color: isActive ? '#F0E8D8' : '#C4A882',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <span 
                                                style={{
                                                    fontFamily: 'var(--font-ibm-plex-mono)',
                                                    fontSize: '10px',
                                                    color: '#C4A882',
                                                    marginRight: '5px',
                                                    animation: isActive ? 'none' : 'softpulse 3s ease-in-out infinite',
                                                    opacity: isActive ? 1 : 0.7,
                                                }}
                                                className="kept-star"
                                            >
                                                ✦
                                            </span>
                                            {link.label}
                                        </Link>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="mono"
                                        style={{
                                            fontSize: '13px',
                                            textTransform: 'lowercase',
                                            letterSpacing: '0.06em',
                                            color: isActive ? 'var(--dust)' : 'var(--ink)',
                                            textDecoration: isActive ? 'underline' : 'none',
                                            textDecorationColor: isActive ? 'rgba(140, 123, 107, 0.6)' : 'transparent',
                                            textDecorationThickness: '1px',
                                            textUnderlineOffset: '4px'
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>
                        
                        <div style={{ height: '56px' }} />
                        
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mono"
                            style={{
                                fontSize: '16px',
                                color: 'var(--dust)',
                                background: 'none',
                                border: 'none',
                                padding: '8px',
                                cursor: 'pointer'
                            }}
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
