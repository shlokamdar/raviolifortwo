"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterInline() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("submitting");
        setTimeout(() => setStatus("success"), 1200);
    };

    return (
        <div className="max-w-md">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-display italic text-[var(--color-ink)] text-[1.05rem] leading-relaxed"
                    >
                        thank you. {"i'll"} write soon.
                    </motion.p>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p style={{
                            fontFamily: "var(--font-display)",
                            fontStyle: 'italic',
                            fontSize: '18px',
                            color: 'var(--color-ink)',
                            lineHeight: 1.55,
                        }} className="mb-5">
                            i send letters sometimes. no schedule. only when {"it's"} ready.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="relative flex items-center gap-3 rounded-[var(--radius-cozy)] bg-[var(--color-surface-strong)] border border-[var(--color-border)] px-4 py-3 shadow-[var(--shadow-soft)]"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your email"
                                className={cn(
                                    "newsletter-input w-full bg-transparent text-[0.95rem] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:outline-none"
                                )}
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="shrink-0 text-[var(--accent-archive)] disabled:opacity-50 transition-colors hover:text-[var(--color-ink)]"
                                aria-label="submit email"
                            >
                                <motion.div
                                    animate={status === "submitting" ? { rotate: 360 } : {}}
                                    transition={status === "submitting" ? { duration: 0.4, repeat: Infinity, ease: "linear" } : { duration: 0.4 }}
                                >
                                    <ArrowRight size={20} />
                                </motion.div>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
