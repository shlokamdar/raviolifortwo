import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { PorchLightEffect } from "@/components/PorchLightEffect";
import { SiteNav } from "@/components/SiteNav";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "raviolifortwo | poems by seven",
    template: "%s | raviolifortwo"
  },
  description: "a room that remembers you — poems and prose by seven (shloka kamadar). exploring intimacy, memory, and the quiet moments in between.",
  keywords: ["raviolifortwo", "poems by seven", "shloka kamadar", "poetry", "poetry archive", "literary blog", "seven poems"],
  authors: [{ name: "Shloka Kamadar", url: "https://raviolifortwo.com" }],
  creator: "Shloka Kamadar",
  openGraph: {
    title: "raviolifortwo | poems by seven",
    description: "a room that remembers you — poems and prose by seven (shloka kamadar).",
    url: "https://raviolifortwo.com",
    siteName: "raviolifortwo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "raviolifortwo | poems by seven",
    description: "a room that remembers you — poems and prose by seven.",
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍓</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn(
        cormorantGaramond.variable,
        inter.variable,
        "h-full antialiased"
      )}
    >
      <body className="min-h-full flex flex-col font-body selection:bg-[var(--accent-general)]/30 selection:text-[var(--color-ink)]">
        <PorchLightEffect />
        <SiteNav />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-12 flex flex-col items-center gap-4">
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: '12px',
            color: 'var(--color-ink-faint)',
            letterSpacing: '0.12em',
            textAlign: 'center',
          }}>
            the light is always on.
          </p>
          <div style={{
            fontSize: '1.2rem',
            opacity: 0.4,
            cursor: 'default',
            userSelect: 'none'
          }}>
            🍓
          </div>
        </footer>
      </body>
    </html>
  );
}
