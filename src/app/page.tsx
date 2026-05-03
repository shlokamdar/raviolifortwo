import Link from "next/link";
import { getAllPoems } from "@/lib/poems";
import { PageContainer } from "@/components/PageContainer";
import { PoemCard } from "@/components/PoemCard";
import { NewsletterInline } from "@/components/NewsletterInline";
import { ReturningVisitor } from "@/components/ReturningVisitor";
import { TimeGreeting } from "@/components/TimeGreeting";
import { RotatingPoem } from "@/components/RotatingPoem";
import { HeroBackground } from "@/components/HeroBackground";
import { AmbientParticles } from "@/components/AmbientParticles";
import { CurrentlyDetail } from "@/components/CurrentlyDetail";

export default async function Home() {
  const allPoems = await getAllPoems();

  const recentPoems = allPoems.slice(0, 2);
  const archivedPoems = allPoems.slice(2);

  return (
    <PageContainer maxWidth="archive">
      <ReturningVisitor />

      {/* ── Hero: left-aligned with grid, slightly moved up ── */}
      <section className="mb-28 relative" style={{ marginTop: '-20px', marginLeft: '1.5rem' }}>
        <HeroBackground />
        <AmbientParticles />

        <div className="flex flex-col gap-7 relative z-10">

          {/* Time greeting — small handwritten note */}
          <div
            className="paper-scrap inline-block px-4 py-2 self-start"
            style={{
              transform: 'rotate(-1.4deg)',
              position: 'relative',
              maxWidth: '260px',
            }}
          >
            {/* little tape piece */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute', top: '-9px', left: '18px',
                width: '40px', height: '16px',
                background: 'rgba(220,200,160,0.55)', borderRadius: '1px',
                transform: 'rotate(-0.5deg)',
              }}
            />
            <TimeGreeting />
            <CurrentlyDetail />
          </div>

          {/* Main headline — serif, left, breathing */}
          <div style={{ marginLeft: '-4px', marginTop: '16px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 400,
                color: 'var(--color-ink)',
                lineHeight: 1.25,
                maxWidth: '480px',
                letterSpacing: '-0.01em',
              }}
            >
              i notice too much.<br />
              this is where it goes.
            </h1>
          </div>

          {/* Rotating poem — like a note pinned to the page */}
          <div
            style={{
              marginTop: '32px',
              marginLeft: '8px',
              paddingTop: '28px',
              borderTop: '1px dashed rgba(120,100,76,0.18)',
              position: 'relative',
            }}
          >
            {/* tiny label */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-10px',
                left: '12px',
                fontFamily: 'var(--font-script)',
                fontSize: '0.72rem',
                color: 'var(--color-ink-faint)',
                background: 'var(--color-canvas)',
                padding: '0 6px',
              }}
            >
              from the pages
            </span>
            <RotatingPoem poems={allPoems} />
          </div>
        </div>
      </section>

      {/* ── Section divider ── */}
      <div className="section-divider" style={{ margin: '0 0 2.5rem' }} />

      {/* ── Recently — cards in a slight stagger ── */}
      <section className="mb-20">
        <div className="mb-10" style={{ marginLeft: '4px' }}>
          <span
            className="scrap-label"
            style={{ transform: 'rotate(-0.8deg)', display: 'inline-block' }}
          >
            recently written
          </span>
          {/* hand-underline */}
          <div style={{
            height: '1px',
            width: '90px',
            background: 'rgba(120,100,76,0.20)',
            marginTop: '4px',
            borderRadius: '2px',
          }} />
        </div>

        {/* Staggered grid — slight asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14" style={{ alignItems: 'start' }}>
          {recentPoems.map((poem, i) => (
            <PoemCard
              key={poem.slug}
              poem={poem}
              className={i === 1 ? "md:mt-8" : ""}
            />
          ))}
        </div>
      </section>

      {/* ── Section divider ── */}
      <div className="section-divider" />

      {/* ── From the archive ── */}
      {archivedPoems.length > 0 && (
        <section className="mb-20">
          <div className="mb-10" style={{ marginLeft: '6px' }}>
            <span
              className="scrap-label"
              style={{ transform: 'rotate(0.5deg)', display: 'inline-block' }}
            >
              from the archive
            </span>
            <div style={{
              height: '1px',
              width: '70px',
              background: 'rgba(120,100,76,0.15)',
              marginTop: '4px',
              borderRadius: '2px',
              marginLeft: '4px',
            }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14" style={{ alignItems: 'start' }}>
            {archivedPoems.map((poem, i) => (
              <PoemCard
                key={poem.slug}
                poem={poem}
                className={i % 3 === 1 ? "md:mt-6" : i % 3 === 2 ? "md:mt-12" : ""}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── The Shelf ── */}
      <section className="my-20">
        <div
          className="paper-scrap inline-block px-5 py-4 relative"
          style={{ transform: 'rotate(1deg)', maxWidth: '280px' }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: '-9px', right: '20px',
              width: '44px', height: '16px',
              background: 'rgba(160,190,160,0.5)', borderRadius: '1px',
              transform: 'rotate(0.8deg)',
            }}
          />
          <span
            className="scrap-label"
            style={{ display: 'block', marginBottom: '8px' }}
          >
            the shelf
          </span>
          <Link
            href="/shelf"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.88rem',
              color: 'var(--color-ink-muted)',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(120,100,76,0.28)',
              textUnderlineOffset: '4px',
            }}
          >
            view collections →
          </Link>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section style={{ marginTop: '80px', marginBottom: '40px' }}>
        <div
          className="paper-scrap px-7 py-8 relative"
          style={{
            transform: 'rotate(-0.4deg)',
            maxWidth: '440px',
          }}
        >
          {/* Tape top */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', top: '-10px', left: '50%',
              transform: 'translateX(-50%) rotate(-0.5deg)',
              width: '58px', height: '19px',
              background: 'rgba(200,180,180,0.50)', borderRadius: '1px',
            }}
          />
          <NewsletterInline />
        </div>
      </section>
    </PageContainer>
  );
}
