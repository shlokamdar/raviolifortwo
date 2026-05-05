import Link from "next/link";
import { getAllPoems } from "@/lib/poems";
import { TimeGreeting } from "@/components/TimeGreeting";
import { RandomFeaturedPoem } from "@/components/RandomFeaturedPoem";

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

export default async function Home() {
  const allPoems = await getAllPoems();
  const featuredPoem = allPoems[0];
  const recentPoems = allPoems.slice(1, 8);

  return (
    <div className="w-full pb-32">
      {/* HERO SECTION */}
      <section className="pt-[80px] md:pt-[120px] mb-12">
        <TimeGreeting />
        <h1 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 5vw, 42px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.3,
            textAlign: 'left'
          }}
        >
          i notice too much.<br/>this is where it goes.
        </h1>
        <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--dust)', opacity: 0.3, marginTop: '32px' }} />
      </section>

      {/* FEATURED POEM CARD */}
      <section style={{ marginTop: '48px', marginBottom: '48px' }}>
        <RandomFeaturedPoem poems={allPoems} />
      </section>

      {/* BOOK TEASER CARD */}
      <section style={{ marginBottom: '48px' }}>
        <style>{`
          .book-teaser-card {
            border: 0.5px solid rgba(196,168,130,0.15) !important;
            transition: border-color 0.3s ease, transform 0.25s ease !important;
          }
          .book-teaser-card:hover {
            transform: rotate(0deg) !important;
            border-color: rgba(196,168,130,0.3) !important;
          }
        `}</style>
        <Link 
          href="/kept"
          className="book-teaser-card block"
          style={{
            maxWidth: '480px',
            backgroundColor: '#1A1410',
            borderRadius: '2px',
            padding: '32px 36px',
            transform: 'rotate(-0.5deg)',
          }}
        >
          <div style={{ 
            fontFamily: 'var(--font-ibm-plex-mono)',
            fontSize: '9px', 
            letterSpacing: '0.12em', 
            color: '#C4A882', 
            opacity: 0.6,
            textTransform: 'uppercase',
            marginBottom: '16px' 
          }}>
            a collection in progress
          </div>

          <div style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '28px', 
            fontStyle: 'italic', 
            fontWeight: 300, 
            color: '#F0E8D8',
            lineHeight: 1.2
          }}>
            i kept your place
          </div>
          <div style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '16px', 
            fontStyle: 'italic', 
            fontWeight: 300, 
            color: 'rgba(196,168,130,0.6)',
            marginBottom: '28px',
            lineHeight: 1.2
          }}>
            long after you stopped looking for it.
          </div>

          <div style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '15px', 
            fontStyle: 'italic', 
            color: 'rgba(240,232,216,0.35)',
            marginBottom: '32px'
          }}>
            pressed quiet in between words, aching for your hands
          </div>

          <div className="flex justify-between items-center w-full">
            <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: '9px', color: 'rgba(196,168,130,0.4)', textTransform: 'lowercase' }}>
              by raviolifortwo
            </div>
            <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: '9px', color: 'rgba(196,168,130,0.55)', textTransform: 'lowercase' }}>
              coming on 01/07/26 &rarr;
            </div>
          </div>
        </Link>
      </section>

      {/* RECENTLY WRITTEN */}
      <section>
        <div className="mono mb-8">recently written</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max">
          {recentPoems.map((poem, i) => {
            const colSpan = i % 4 === 0 ? 'md:col-span-2' : 'md:col-span-1';
            const rotation = i % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)';
            const marginTop = i % 3 === 1 ? 'md:mt-12' : i % 3 === 2 ? 'md:-mt-6' : '';
            const tapeClass = getTapeColorClass(poem.tags || []);
            return (
              <Link 
                key={poem.slug} 
                href={`/poems/${poem.slug}`}
                className={`poem-card-base block ${colSpan} ${marginTop}`}
                style={{
                  padding: '28px 32px',
                  transform: rotation
                }}
              >
                <div 
                  className={`washi-tape ${tapeClass}`}
                  style={{ transform: 'rotate(1.5deg)' }}
                />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: 'var(--ink)', marginBottom: '4px' }}>
                  {poem.title}
                </h3>
                <div className="mono" style={{ marginBottom: '16px' }}>
                  {poem.tags?.[0] ? `#${poem.tags[0]}` : ''}
                </div>
                {poem.excerpt && (
                  <p 
                    style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontStyle: 'italic', 
                      fontSize: '16px', 
                      color: 'rgba(44, 40, 37, 0.75)', 
                      lineHeight: 1.5,
                      marginBottom: 0
                    }}
                  >
                    {poem.excerpt}
                  </p>
                )}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  );
}
