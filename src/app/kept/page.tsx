"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.classList.add("theme-book");
    return () => document.body.classList.remove("theme-book");
  }, []);

  return (
    <div className="w-full pb-32">
      {/* --- BOOK HEADER --- */}
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: '38px', 
          fontStyle: 'italic', 
          fontWeight: 300, 
          color: 'var(--ink)',
          lineHeight: 1.2
        }}>
          i kept your place
        </h1>
        <div style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: '22px', 
          fontStyle: 'italic', 
          fontWeight: 300, 
          color: 'var(--dust)',
          opacity: 0.7,
          marginTop: '4px',
          lineHeight: 1.2
        }}>
          long after you stopped looking for it.
        </div>
        
        <div className="mono" style={{ 
          fontSize: '10px', 
          color: 'var(--dust)', 
          textTransform: 'lowercase', 
          letterSpacing: '0.08em',
          marginTop: '24px'
        }}>
          by raviolifortwo
        </div>
      </div>

      <div style={{ width: '40px', height: '0.5px', background: 'var(--book-rule)', marginBottom: '40px' }} />

      {/* --- COMING SOON STATEMENT --- */}
      <div className="mono" style={{ 
        fontSize: '10px', 
        color: 'var(--dust)', 
        letterSpacing: '0.1em', 
        textTransform: 'uppercase',
        marginBottom: '32px'
      }}>
        a collection in progress.
      </div>

      {/* --- READER'S NOTE --- */}
      <div style={{ maxWidth: '480px' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '17px',
          color: 'var(--ink)',
          lineHeight: 1.85,
        }}>
          These poems begin in a doorway.<br/>
          Not a metaphor – or not only. A real kind of standing.<br/>
          The particular labour of keeping hope propped open<br/>
          with your whole body while life moves around you<br/>
          like you are furniture.
        </p>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '15px',
          fontStyle: 'italic',
          color: 'var(--dust)',
          marginTop: '24px'
        }}>
          Nobody tells you how much it takes to keep a door open.
        </p>
      </div>

      <div style={{ width: '40px', height: '0.5px', background: 'var(--book-rule)', marginTop: '48px', marginBottom: '48px' }} />

      {/* --- EXCERPT POEM --- */}
      <div className="mono" style={{ fontSize: '10px', color: 'var(--dust)', textTransform: 'lowercase', marginBottom: '28px' }}>
        from the collection
      </div>

      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '19px',
        fontWeight: 400,
        lineHeight: 2.0,
        color: 'var(--ink)'
      }}>
        <div style={{ marginLeft: '0px', marginBottom: '40px' }}>
          <div>i keep your place</div>
          <div>while the world turns pages without you</div>
          <div>the covers close, the dust gathers, but i wait –</div>
          <div>pressed quiet in between words, aching for your hands</div>
          <div style={{ fontStyle: 'italic' }}>to hold me in your warmth.</div>
        </div>

        <div style={{ marginLeft: '36px', marginBottom: '40px' }}>
          <div>i keep on praying:</div>
          <div>that all the glitters outside don&apos;t dazzle you away,</div>
          <div>that all the fancy new books,</div>
          <div style={{ fontStyle: 'italic' }}>still find my wait.</div>
        </div>

        <div style={{ marginLeft: '16px', marginBottom: '40px' }}>
          <div>i stay ink deep,</div>
          <div>holding on to the story you left me in.</div>
          <div>don&apos;t let the pages swallow me whole,</div>
          <div>don&apos;t forget</div>
          <div style={{ fontStyle: 'italic' }}>i&apos;m still holding your pause</div>
        </div>
      </div>

      {/* --- NOTIFY SECTION --- */}
      <div style={{ marginTop: '64px' }}>
        <div className="mono" style={{ fontSize: '10px', color: 'var(--dust)', textTransform: 'lowercase', marginBottom: '16px' }}>
          be the first to know when it&apos;s ready.
        </div>

        {submitted ? (
          <div className="mono" style={{ fontSize: '11px', color: 'var(--dust)' }}>
            noted. i&apos;ll find you when it&apos;s ready.
          </div>
        ) : (
          <form 
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="flex flex-col md:flex-row md:items-center gap-4"
          >
            <style>{`
              .book-notify-btn:hover {
                background: rgba(255,255,255,0.05) !important;
                color: var(--dust) !important;
                border-color: var(--book-rule) !important;
              }
            `}</style>
            <input 
              type="email" 
              required
              placeholder="your email" 
              className="mono focus:outline-none transition-colors"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '0.5px solid var(--book-rule)',
                borderRadius: 0,
                padding: '8px 0',
                width: '100%',
                maxWidth: '240px',
                fontSize: '11px',
                color: 'var(--ink)'
              }}
            />
            <button 
              type="submit"
              className="mono book-notify-btn transition-colors"
              style={{
                background: 'transparent',
                border: '0.5px solid var(--book-rule)',
                padding: '8px 16px',
                borderRadius: '2px',
                fontSize: '11px',
                color: 'var(--dust)',
                width: 'fit-content'
              }}
            >
              keep my place →
            </button>
          </form>
        )}
      </div>

      {/* --- FOOTER CONNECTOR --- */}
      <div style={{ marginTop: '80px' }}>
        <Link 
          href="/letters" 
          className="mono hover:text-[var(--ink)] transition-colors"
          style={{ fontSize: '10px', color: 'var(--dust)', opacity: 0.5 }}
        >
          ← these poems live in letters to peter
        </Link>
      </div>
    </div>
  );
}
