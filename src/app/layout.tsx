import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
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

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "raviolifortwo | poems by seven",
    template: "%s | raviolifortwo"
  },
  description: "a room that remembers you — poems and prose by seven. exploring intimacy, memory, and the quiet moments in between.",
  keywords: ["raviolifortwo", "poems by seven", "seven", "poetry", "poetry archive", "literary blog", "seven poems"],
  authors: [{ name: "seven", url: "https://raviolifortwo.vercel.app" }],
  creator: "seven",
  openGraph: {
    title: "raviolifortwo | poems by seven",
    description: "a room that remembers you — poems and prose by seven.",
    url: "https://raviolifortwo.vercel.app",
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
        ibmPlexMono.variable,
        "h-full antialiased"
      )}
    >
      <body className="min-h-full flex flex-col selection:bg-[var(--tape-warm)]/30 selection:text-[var(--ink)]">
        <PorchLightEffect />
        <SiteNav />
        <main className="flex-grow md:ml-[220px] pt-24 md:pt-16 px-6 md:pr-12">
          <div className="max-w-[800px]">
            {children}
          </div>
        </main>

        {/* Footer — like a page closing */}
        <footer className="pt-[48px] pb-[40px] flex flex-col items-center relative md:ml-[220px]">
          <div style={{ width: '48px', height: '0.5px', background: 'var(--dust)', opacity: 0.4, marginBottom: '24px' }} />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/shloka logo.png" 
            alt="signature" 
            style={{ 
              width: '64px', 
              opacity: 0.35, 
              mixBlendMode: 'multiply',
              marginBottom: '16px' 
            }} 
          />
          
          <span
            className="mono"
            style={{ fontSize: "9px", color: 'var(--dust)', opacity: 0.4, textAlign: 'center' }}
            aria-hidden="true"
          >
            the light is always on.
          </span>
        </footer>
      </body>
    </html>
  );
}
