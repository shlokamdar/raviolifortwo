import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";
import { DustSpecks } from "@/components/ornaments/DustSpecks";
import { RevealOnScroll } from "@/components/ornaments/RevealOnScroll";
import {
    CandleSvg,
    LeafSvg,
    TeaCupSvg,
    WindowSvg,
} from "@/components/ornaments/NotebookIllustrations";

export default function AboutPage() {
    return (
        <PageContainer maxWidth="about">
            {/* Page header — handwritten label */}
            <header style={{ marginBottom: '48px', marginLeft: '4px' }}>
                <span
                    style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '1.1rem',
                        color: 'var(--color-ink-faint)',
                        transform: 'rotate(-0.8deg)',
                        display: 'inline-block',
                        letterSpacing: '0.03em',
                    }}
                >
                    who i am
                </span>
            </header>

            <article className="relative mb-24" style={{ maxWidth: '560px' }}>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 watercolor-layer opacity-60 rounded-sm"
                    style={{ filter: "blur(0px)" }}
                />
                <DustSpecks className="absolute inset-0 -z-10 opacity-80" />

                {/* Scattered notebook illustrations */}
                <TeaCupSvg
                    aria-hidden="true"
                    className="absolute -z-10 hidden sm:block"
                    style={{ width: 110, height: 110, left: -40, top: 56, opacity: 0.28 }}
                />
                <CandleSvg
                    aria-hidden="true"
                    className="absolute -z-10 hidden md:block"
                    style={{ width: 110, height: 130, right: -48, top: 180, opacity: 0.25 }}
                />
                <LeafSvg
                    aria-hidden="true"
                    className="absolute -z-10 hidden sm:block"
                    style={{ width: 100, height: 100, right: -38, top: 22, opacity: 0.20, transform: "rotate(8deg)" }}
                />
                <WindowSvg
                    aria-hidden="true"
                    className="absolute -z-10 hidden md:block"
                    style={{ width: 130, height: 130, left: -50, bottom: 80, opacity: 0.18, transform: "rotate(-3deg)" }}
                />

                {/* Content blocks — each like a separate paper fragment */}
                <div
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.1rem',
                        color: 'var(--color-ink)',
                        lineHeight: 1.9,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '28px',
                    }}
                >
                    {/* Fragment 1 */}
                    <div
                        className="paper-scrap px-6 py-6 md:px-7 md:py-7 relative"
                        style={{ transform: 'rotate(-1.1deg)' }}
                    >
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute', top: '-9px', left: '20px',
                                width: '48px', height: '17px',
                                background: 'rgba(220,200,160,0.52)', borderRadius: '1px',
                                transform: 'rotate(-0.6deg)',
                            }}
                        />
                        <p>
                            i spend a lot of time noticing things<br />
                            the way light sits on the floor for a while before leaving<br />
                            how coffee tastes different depending on who {`i'm`} thinking about<br />
                            how some days feel too full, and some feel like an empty room
                        </p>
                    </div>

                    {/* Fragment 2 */}
                    <div
                        className="paper-scrap px-6 py-6 md:px-7 md:py-7 relative"
                        style={{ transform: 'rotate(0.7deg)', marginLeft: '8px' }}
                    >
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute', top: '-9px', right: '24px',
                                width: '40px', height: '16px',
                                background: 'rgba(200,180,180,0.48)', borderRadius: '1px',
                                transform: 'rotate(1deg)',
                            }}
                        />
                        <p>
                            i think poems are just ways of saying<br />
                            <em
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
                                    lineHeight: 1.2,
                                    margin: '16px 0',
                                    color: 'var(--accent-general)',
                                    fontStyle: 'italic',
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                i was here
                            </em>
                            to moments that {`don't`} stay long enough
                        </p>
                    </div>

                    {/* Fragment 3 */}
                    <div
                        className="paper-scrap px-6 py-6 md:px-7 md:py-7 relative"
                        style={{ transform: 'rotate(-0.5deg)', marginLeft: '-4px' }}
                    >
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute', top: '-9px', left: '32px',
                                width: '52px', height: '18px',
                                background: 'rgba(160,190,160,0.48)', borderRadius: '1px',
                                transform: 'rotate(-1.2deg)',
                            }}
                        />
                        <p>
                            raviolifortwo started on a quiet afternoon<br />
                            the kind where nothing happens<br />
                            but everything feels like it almost could
                        </p>
                    </div>

                    {/* Fragment 4 */}
                    <div
                        className="paper-scrap px-6 py-6 md:px-7 md:py-7 relative"
                        style={{ transform: 'rotate(0.9deg)', marginLeft: '12px' }}
                    >
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute', top: '-9px', right: '18px',
                                width: '44px', height: '16px',
                                background: 'rgba(180,190,210,0.45)', borderRadius: '1px',
                                transform: 'rotate(0.5deg)',
                            }}
                        />
                        <p>
                            it became a place for things that {`don't`} fit anywhere else<br />
                            not quite conversations, not quite silence<br />
                            just something in between
                        </p>
                    </div>

                    {/* Fragment 5 */}
                    <div
                        className="paper-scrap px-6 py-6 md:px-7 md:py-7 relative"
                        style={{ transform: 'rotate(-0.6deg)' }}
                    >
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute', top: '-9px', left: '28px',
                                width: '50px', height: '17px',
                                background: 'rgba(220,200,160,0.50)', borderRadius: '1px',
                                transform: 'rotate(-0.8deg)',
                            }}
                        />
                        <p>
                            i {`don't`} always know who {`i'm`} writing to<br />
                            but it feels like leaving the door open<br />
                            in case someone arrives<br />
                            looking for the same thing
                        </p>
                    </div>

                    {/* Closing — revealed on scroll */}
                    <RevealOnScroll offsetY={12}>
                        <p
                            style={{
                                paddingTop: '32px',
                                fontStyle: 'italic',
                                fontSize: '1rem',
                                color: 'var(--color-ink-muted)',
                                textAlign: 'center',
                                transform: 'rotate(-0.4deg)',
                                display: 'block',
                            }}
                        >
                            stay as long as you need<br />
                            the tea is still warm
                        </p>
                    </RevealOnScroll>

                    {/* Signature Image */}
                    <div style={{ marginTop: '56px', marginLeft: '8px' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src="/shloka logo.png" 
                            alt="signature" 
                            style={{ 
                                width: '80px', 
                                opacity: 0.5, 
                                mixBlendMode: 'multiply'
                            }} 
                        />
                    </div>
                </div>
            </article>

            <footer
                style={{
                    marginTop: '64px',
                    paddingBottom: '80px',
                    paddingTop: '28px',
                    borderTop: '1px dashed rgba(120,100,76,0.16)',
                }}
            >
                <nav>
                    <Link
                        href="/"
                        style={{
                            fontFamily: 'var(--font-script)',
                            fontSize: '0.95rem',
                            color: 'var(--color-ink-faint)',
                            textDecoration: 'underline',
                            textDecorationColor: 'rgba(120,100,76,0.22)',
                            textUnderlineOffset: '4px',
                            display: 'inline-block',
                            transform: 'rotate(-0.4deg)',
                        }}
                    >
                        ← take me back
                    </Link>
                </nav>
            </footer>
        </PageContainer>
    );
}
