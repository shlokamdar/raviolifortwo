import Link from "next/link";
import { getAllPoems } from "@/lib/poems";

const getTapeColor = (tags: string[]) => {
  if (!tags || tags.length === 0) return 'var(--tape-warm)';
  const t = tags[0].toLowerCase();
  if (t === 'everyday-magic') return 'var(--tape-sage)';
  if (t === 'self-portrait') return 'var(--tape-lilac)';
  if (t === 'yearning') return 'var(--tape-warm)';
  if (t === 'love-and-longing') return 'var(--tape-rose)';
  if (t === 'quiet-grief') return 'var(--tape-cool)';
  return 'var(--tape-warm)';
};

export default async function Home() {
  const allPoems = await getAllPoems();
  const featuredPoem = allPoems[0];
  const recentPoems = allPoems.slice(1, 8);

  return (
    <div className="w-full pb-32">
      {/* HERO SECTION */}
      <section className="pt-[80px] md:pt-[120px] mb-12">
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
      <section style={{ marginTop: '48px', marginBottom: '80px' }}>
        <div className="poem-card-base" style={{ maxWidth: '480px', padding: '28px 32px' }}>
          {/* Tape */}
          <div 
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-12px',
              width: '40px',
              height: '8px',
              backgroundColor: getTapeColor(featuredPoem?.tags),
              transform: 'rotate(-1deg)',
              zIndex: 10
            }} 
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
            {featuredPoem?.cardLine || "A quiet thought pinned to the page,\nwaiting to be found,\nby someone who knows the feeling."}
          </p>
          <div className="mono flex justify-between items-center w-full">
            <span>{featuredPoem?.date || "recently"}</span>
            <Link href={`/poems/${featuredPoem?.slug}`} className="hover:text-[var(--ink)] transition-colors">
              read &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* RECENTLY WRITTEN */}
      <section>
        <div className="mono mb-8">recently written</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max">
          {recentPoems.map((poem, i) => {
            const colSpan = i % 4 === 0 ? 'md:col-span-2' : 'md:col-span-1';
            const rotation = i % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)';
            const marginTop = i % 3 === 1 ? 'md:mt-12' : i % 3 === 2 ? 'md:-mt-6' : '';
            return (
              <Link 
                key={poem.slug} 
                href={`/poems/${poem.slug}`}
                className={`poem-card-base block ${colSpan} ${marginTop}`}
                style={{
                  padding: '24px 28px',
                  transform: rotation
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>
                  {poem.title}
                </h3>
                <div className="mono">{poem.tags?.[0] ? `#${poem.tags[0]}` : ''}</div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  );
}
