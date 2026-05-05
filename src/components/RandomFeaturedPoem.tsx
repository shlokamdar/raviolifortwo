'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Poem } from '@/types/poem';

const getTapeColorClass = (tags: string[]) => {
  if (!tags || tags.length === 0) return 'tape-warm';
  const t = tags[0].toLowerCase();
  if (t === 'everyday-magic') return 'tape-yellow';
  if (t === 'self-portrait') return 'tape-warm';
  if (t === 'yearning') return 'tape-sage';
  if (t === 'love-and-longing') return 'tape-rose';
  if (t === 'archives-from-instagram') return 'tape-cool';
  return 'tape-warm';
};

export function RandomFeaturedPoem({ poems }: { poems: Poem[] }) {
  const [poem, setPoem] = useState<Poem | null>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!poems || poems.length === 0) return;
    
    // Pick a random poem
    const randomIndex = Math.floor(Math.random() * poems.length);
    const selected = poems[randomIndex];
    
    // Soft fade in
    setPoem(selected);
    // Slight delay for "new page" feel
    const t = setTimeout(() => setOpacity(1), 50);
    return () => clearTimeout(t);
  }, [poems]);

  // Initial render (SSR/hydration) will be empty to avoid hydration mismatch
  if (!poem) {
    return <div className="poem-card-base" style={{ maxWidth: '480px', padding: '28px 32px', opacity: 0, height: '200px' }} />;
  }

  const tapeClass = getTapeColorClass(poem.tags);

  return (
    <div 
      className="poem-card-base" 
      style={{ 
        maxWidth: '480px', 
        padding: '28px 32px',
        opacity,
        transition: 'opacity 0.8s ease-in-out'
      }}
    >
      <div 
        className={`washi-tape ${tapeClass}`}
        style={{ transform: 'rotate(-1deg)' }}
      />
      <div className="mono" style={{ marginBottom: '16px' }}>from the pages</div>
      <p 
        style={{ 
          fontFamily: 'var(--font-serif)', 
          fontStyle: 'italic', 
          fontSize: '18px', 
          lineHeight: 1.6,
          marginBottom: '24px' 
        }}
      >
        {poem.excerpt || "A quiet thought pinned to the page,\nwaiting to be found,\nby someone who knows the feeling."}
      </p>
      <div className="mono flex justify-between items-center w-full">
        <span style={{ opacity: 0.6 }}>{poem.title}</span>
        <Link href={`/poems/${poem.slug}`} className="hover:text-[var(--ink)] transition-colors">
          read &rarr;
        </Link>
      </div>
    </div>
  );
}
