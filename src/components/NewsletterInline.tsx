"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function NewsletterInline() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("success");
    };

    return (
        <AnimatePresence mode="wait">
            {status === "success" ? (
                <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        color: 'var(--color-ink)',
                        lineHeight: 1.6,
                        transform: 'rotate(-0.3deg)',
                        display: 'inline-block',
                    }}
                >
                    thank you. {"i'll"} write soon.
                </motion.p>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            fontSize: '1.05rem',
                            color: 'var(--color-ink)',
                            lineHeight: 1.6,
                            marginBottom: '20px',
                            transform: 'rotate(-0.2deg)',
                            display: 'inline-block',
                        }}
                    >
                        i send letters sometimes.<br />
                        no schedule. only when {"it's"} ready.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(255,251,243,0.75)',
                            border: '1px solid rgba(120,100,76,0.16)',
                            padding: '10px 14px',
                            boxShadow: '1px 2px 10px rgba(60,40,20,0.07)',
                        }}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your email"
                            className={cn("newsletter-input w-full bg-transparent")}
                            style={{
                                fontFamily: 'var(--font-script)',
                                fontSize: '1rem',
                                color: 'var(--color-ink)',
                                border: 'none',
                                outline: 'none',
                            }}
                            required
                        />
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="annotation-link"
                            style={{
                                flexShrink: 0,
                                fontFamily: 'var(--font-script)',
                                fontSize: '0.92rem',
                                color: 'var(--color-ink-muted)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '2px 4px',
                                transition: 'color 620ms ease, transform 620ms cubic-bezier(0.22, 1, 0.36, 1)',
                                opacity: status === "submitting" ? 0.5 : 1,
                            }}
                            aria-label="submit email"
                        >
                            send →
                        </button>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
