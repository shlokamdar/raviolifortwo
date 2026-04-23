import Link from "next/link";
import { getAllPoems } from "@/lib/poems";
import { PageContainer } from "@/components/PageContainer";
import { PoemCard } from "@/components/PoemCard";
import { NewsletterInline } from "@/components/NewsletterInline";
import { ReturningVisitor } from "@/components/ReturningVisitor";
import { TimeGreeting } from "@/components/TimeGreeting";
import { RotatingPoem } from "@/components/RotatingPoem";
import { DividerSprigSvg } from "@/components/ornaments/NotebookIllustrations";
import { MicroTagline } from "@/components/MicroTagline";
import { HeroBackground } from "@/components/HeroBackground";
import { AmbientParticles } from "@/components/AmbientParticles";
import { CurrentlyDetail } from "@/components/CurrentlyDetail";

export default async function Home() {
  const allPoems = await getAllPoems();

  // Recent poems (latest 2)
  const recentPoems = allPoems.slice(0, 2);

  // Archived (rest)
  const archivedPoems = allPoems.slice(2);

  return (
    <PageContainer maxWidth="reading">
      <ReturningVisitor />
      {/* Above the fold: Featured Fragment */}
      <section className="mb-24 mt-0 relative">
        <HeroBackground />
        <AmbientParticles />

        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-col mb-4">
            <TimeGreeting />
            <CurrentlyDetail />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-[var(--color-ink)] leading-[1.2] font-normal max-w-[500px]">
              i notice too much. this is where it goes.
            </h1>
            <MicroTagline />
          </div>

          <div className="mt-8 pt-12 border-t border-[var(--color-border)]/10">
            <RotatingPoem poems={allPoems} />
          </div>
        </div>
      </section>

      {/* Reduced bottom margin from 64px (mb-16) to Recently section */}
      <div className="my-10 flex items-center justify-center">
        <DividerSprigSvg
          aria-hidden="true"
          className="w-[260px] md:w-[340px] h-auto opacity-55"
          strokeColor="var(--accent-general)"
        />
      </div>

      {/* Recently */}
      <section className="mb-[72px]">
        <div className="mb-8 border-t border-[var(--color-border)] pt-4">
          <span className="text-[0.65rem] font-body uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">recently</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPoems.map((poem) => (
            <PoemCard key={poem.slug} poem={poem} />
          ))}
        </div>
      </section>


      {/* From the archive */}
      {archivedPoems.length > 0 && (
        <section className="mb-[80px]">
          <div className="mb-8 border-t border-[var(--color-border)] pt-4">
            <span className="text-[0.65rem] font-body uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">from the archive</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {archivedPoems.map((poem) => (
              <PoemCard key={poem.slug} poem={poem} />
            ))}
          </div>
        </section>
      )}

      {/* Shelf section */}
      <section className="my-20">
        <div className="mb-6 border-t border-[var(--color-border)] pt-4">
          <span className="text-[0.65rem] font-body uppercase tracking-[0.15em] text-[var(--color-ink-faint)]">the shelf</span>
        </div>
        <Link href="/shelf" className="font-body text-[0.9rem] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors underline underline-offset-4">
          view collections &rarr;
        </Link>
      </section>

      {/* Footer / Newsletter */}
      <section style={{ marginTop: '80px' }} className="pb-24">
        <NewsletterInline />
      </section>
    </PageContainer>
  );
}
