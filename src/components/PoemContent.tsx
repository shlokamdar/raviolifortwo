"use client";

import { useState } from "react";
import Link from "next/link";
import { Poem } from "@/types/poem";

const getTapeColor = (tag: string) => {
  const t = tag.toLowerCase();
  if (t === 'everyday-magic') return 'var(--tape-sage)';
  if (t === 'self-portrait') return 'var(--tape-lilac)';
  if (t === 'yearning') return 'var(--tape-warm)';
  if (t === 'love-and-longing') return 'var(--tape-rose)';
  if (t === 'quiet-grief') return 'var(--tape-cool)';
  return 'var(--tape-warm)';
};

interface PoemContentProps {
  poem: Poem;
}

export function PoemContent({ poem }: PoemContentProps) {
  const [noteOpen, setNoteOpen] = useState(false);

  const renderStanza = (stanza: string, index: number) => {
    // Stanza indentation sequence: 0px, 36px, 16px, 56px, 0px...
    const stanzaIndent = [0, 36, 16, 56, 0][index % 5];
    
    const lines = stanza.split('\n');
    return (
      <div 
        key={index} 
        style={{ 
          marginLeft: `${stanzaIndent}px`,
          marginBottom: '40px' 
        }}
      >
        {lines.map((line, lineIndex) => {
          let paddingLeft = 0;
          let text = line;
          
          // Check for tabs/spaces indentation (using 4 spaces as 1 tab)
          const leadingSpacesMatch = line.match(/^(\s|\t)+/);
          if (leadingSpacesMatch) {
            const spaceStr = leadingSpacesMatch[0];
            const tabCount = spaceStr.replace(/ {4}/g, '\t').split('\t').length - 1;
            paddingLeft = tabCount * 48;
            text = text.trimStart();
          }

          // Check for italics: line surrounded by * or _, or last line of stanza
          let isItalic = lineIndex === lines.length - 1; // last line of stanza italic by default
          if (text.startsWith('*') && text.endsWith('*')) {
            isItalic = true;
            text = text.slice(1, -1);
          } else if (text.startsWith('_') && text.endsWith('_')) {
            isItalic = true;
            text = text.slice(1, -1);
          }

          return (
            <div 
              key={lineIndex} 
              style={{ 
                paddingLeft: `${paddingLeft}px`,
                fontStyle: isItalic ? 'italic' : 'normal'
              }}
            >
              {text || '\u00A0'}
            </div>
          );
        })}
      </div>
    );
  };

  const stanzas = poem.fullPoem.split('\n\n');

  return (
    <div style={{ maxWidth: '520px', paddingTop: '56px' }}>
      
      {/* 1. Poem Title */}
      <div className="mono" style={{ fontSize: '10px', color: 'var(--dust)', letterSpacing: '0.06em', marginBottom: '8px' }}>
        {poem.title}
      </div>

      {/* 2. Written Date */}
      <div className="mono" style={{ fontSize: '10px', color: 'var(--dust)', opacity: 0.5, marginBottom: '16px' }}>
        written: {poem.date}
      </div>

      {/* 3. Note Toggle */}
      {poem.note && (
        <div style={{ marginBottom: '16px' }}>
          <button 
            onClick={() => setNoteOpen(!noteOpen)}
            className="mono hover:text-[var(--ink)] transition-colors"
            style={{ 
              fontSize: '10px', 
              color: 'var(--dust)', 
              opacity: 0.5, 
              borderBottom: '0.5px solid var(--dust)',
              background: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            a note on this poem {noteOpen ? '↑' : '↓'}
          </button>
          
          <div 
            style={{
              maxHeight: noteOpen ? '500px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
              marginTop: noteOpen ? '12px' : '0'
            }}
          >
            <div style={{
              background: 'var(--paper)',
              borderLeft: '2px solid var(--tape-rose)',
              padding: '14px 16px',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '14px',
              color: 'var(--dust)',
              lineHeight: 1.7,
              borderRadius: '0 2px 2px 0'
            }}>
              {poem.note}
            </div>
          </div>
        </div>
      )}

      {/* 4. Rule */}
      <div style={{ 
        width: '40px', 
        height: '0.5px', 
        background: 'var(--dust)', 
        opacity: 0.3,
        marginTop: '28px',
        marginBottom: '32px'
      }} />

      {/* 5. Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '64px' }}>
        {poem.tags?.map((tag) => (
          <div 
            key={tag}
            className="mono flex items-center"
            style={{
              fontSize: '9px',
              border: '0.5px solid rgba(140,123,107,0.3)',
              padding: '3px 8px',
              borderRadius: '2px'
            }}
          >
            <span 
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: getTapeColor(tag),
                marginRight: '6px'
              }}
            />
            {tag}
          </div>
        ))}
      </div>

      {/* POEM TYPOGRAPHY */}
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '19px',
        fontWeight: 400,
        lineHeight: 2.0,
        color: 'var(--ink)'
      }}>
        {stanzas.map((stanza, i) => renderStanza(stanza, i))}
      </div>

      {/* POST-POEM FOOTER */}
      <div style={{ marginTop: '64px' }}>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '14px',
          color: 'var(--dust)'
        }}>
          — shloka kamadar
        </div>

        <div style={{ marginTop: '48px', paddingBottom: '80px' }}>
          <Link 
            href="/archive" 
            className="mono hover:text-[var(--ink)] transition-colors"
            style={{ fontSize: '10px', color: 'var(--dust)', opacity: 0.6 }}
          >
            ← back to what i wrote
          </Link>
        </div>
      </div>
    </div>
  );
}
