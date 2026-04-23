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
                        className="font-lora italic text-ink"
                    >
                        thank you. i'll write soon.
                    </motion.p>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p style={{
                            fontFamily: "'EB Garamond', Georgia, serif",
                            fontStyle: 'italic',
                            fontSize: '18px',
                            color: 'var(--color-ink)',
                        }} className="mb-4">
                            i send letters sometimes. no schedule. only when it's ready.
                        </p>
                        <form onSubmit={handleSubmit} className="relative flex items-center group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your email"
                                className={cn(
                                    "w-full bg-transparent border-b border-shadow py-2 pr-10 focus:outline-none transition-colors",
                                    status === "submitting" ? "border-gold" : "hover:border-dust"
                                )}
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="absolute right-0 text-gold disabled:opacity-50"
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
