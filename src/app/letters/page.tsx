import Link from "next/link";
import { getAllPoems } from "@/lib/poems";

export const metadata = {
  title: "letters i kept",
  description: "letters sent sometimes, for the ones who stay quietly and the ones who leave.",
};

export default async function LettersPage() {
  const allPoems = await getAllPoems();
  const robinLetters = allPoems.filter((p: any) => p.category === 'letters-to-robin');
  const peterLetters = allPoems.filter((p: any) => p.category === 'letters-to-peter');
  const generalLetters = allPoems.filter((p: any) => p.category === 'letters');

  const renderLetterCard = (poem: any) => (
    <Link
      key={poem.slug}
      href={`/poems/${poem.slug}`}
      className="poem-card-base group block relative"
      style={{
        padding: '24px 28px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {/* Postmark stamp */}
      <div 
        style={{
          position: 'absolute',
          top: '24px',
          right: '28px',
          width: '36px',
          height: '36px',
          border: '0.5px solid var(--dust)',
          opacity: 0.18,
          borderRadius: '50%',
          zIndex: 2
        }}
      />

      <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>
          {poem.title}
      </h2>
      <div className="mono" style={{ color: 'var(--dust)' }}>
          {poem.tags?.[0] ? `#${poem.tags[0]}` : ''}
      </div>
    </Link>
  );

  return (
    <div className="w-full pb-32">
      <style>{`
          .poem-card-base.group:hover {
              transform: translateY(-3px) rotate(0deg) !important;
          }
      `}</style>

      <div style={{ marginBottom: '56px' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '16px',
          color: 'var(--dust)',
          opacity: 0.7
        }}>
          some things are easier to say when you name them.
        </p>
      </div>

      {/* --- SECTION 1: FROM THE MAILBOX --- */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-mono), monospace', 
          fontSize: '10px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.14em', 
          color: 'var(--dust)' 
        }}>
          from the mailbox
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-serif)', 
          fontStyle: 'italic', 
          fontSize: '13px', 
          color: 'var(--dust)', 
          opacity: 0.6,
          marginTop: '4px',
          marginBottom: '28px' 
        }}>
          sent sometimes. no schedule. only when ready.
        </p>

        {generalLetters.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            {generalLetters.map(renderLetterCard)}
          </div>
        )}
      </section>

      <div style={{ width: '100%', height: '0.5px', background: 'var(--dust)', opacity: 0.2, marginBottom: '64px' }} />

      {/* --- SECTION 2: LETTERS TO ROBIN --- */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-mono), monospace', 
          fontSize: '10px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.14em', 
          color: 'var(--dust)' 
        }}>
          letters to robin
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-serif)', 
          fontStyle: 'italic', 
          fontSize: '13px', 
          color: 'var(--dust)', 
          opacity: 0.6,
          marginTop: '4px',
          marginBottom: '28px' 
        }}>
          for the ones who stay quietly.
        </p>

        {robinLetters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            {robinLetters.map(renderLetterCard)}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div style={{
              width: '120px',
              height: '80px',
              border: '0.5px solid rgba(44,40,37,0.2)',
              background: 'var(--paper)',
              borderRadius: '1px',
              position: 'relative',
              marginBottom: '24px'
            }}>
              {/* Envelope fold lines */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                borderTop: '40px solid transparent',
                borderLeft: '60px solid rgba(44,40,37,0.06)',
                borderRight: '60px solid rgba(44,40,37,0.06)',
                borderBottom: '40px solid transparent',
                zIndex: 1
              }} />
              {/* Top flap */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                borderTop: '40px solid rgba(44,40,37,0.12)',
                borderLeft: '60px solid transparent',
                borderRight: '60px solid transparent',
                borderBottom: '40px solid transparent',
                zIndex: 2
              }} />
            </div>
            <div className="mono" style={{ fontSize: '10px', color: 'var(--dust)', textAlign: 'center' }}>
              the drawer is empty for now.
            </div>
            <div className="mono" style={{ fontSize: '10px', color: 'var(--dust)', opacity: 0.45, textAlign: 'center', marginTop: '6px' }}>
              something is being written.
            </div>
          </div>
        )}
      </section>

      <div style={{ width: '100%', height: '0.5px', background: 'var(--dust)', opacity: 0.2, marginBottom: '64px' }} />

      {/* --- SECTION 3: LETTERS TO PETER --- */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-mono), monospace', 
          fontSize: '10px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.14em', 
          color: 'var(--dust)' 
        }}>
          letters to peter
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-serif)', 
          fontStyle: 'italic', 
          fontSize: '13px', 
          color: 'var(--dust)', 
          opacity: 0.6,
          marginTop: '4px',
          marginBottom: '8px' 
        }}>
          for the ones who leave and take the warmth with them.
        </p>

        {/* Connector to book */}
        <Link href="/kept" className="mono hover:text-[var(--ink)] transition-colors" style={{ 
            fontSize: '10px', 
            color: 'var(--dust)', 
            opacity: 0.5,
            display: 'block',
            marginBottom: '28px'
        }}>
          these letters became a book → i kept your place
        </Link>

        {peterLetters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            {peterLetters.map(renderLetterCard)}
          </div>
        ) : (
           <div className="flex flex-col items-center justify-center py-12">
             <div className="mono" style={{ fontSize: '10px', color: 'var(--dust)', textAlign: 'center' }}>
               the drawer is empty for now.
             </div>
           </div>
        )}
      </section>

    </div>
  );
}
