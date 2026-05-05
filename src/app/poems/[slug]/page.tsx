import { notFound } from "next/navigation";
import { getPoemBySlug, getAllPoems } from "@/lib/poems";
import { PoemContent } from "@/components/PoemContent";
import { Metadata } from "next";

export async function generateStaticParams() {
    const poems = await getAllPoems();
    return poems.map((poem) => ({
        slug: poem.slug,
    }));
}

interface PoemPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PoemPageProps): Promise<Metadata> {
    const { slug } = await params;
    const poem = await getPoemBySlug(slug);
    if (!poem) return {};

    const title = `${poem.title} | raviolifortwo`;
    const description = poem.excerpt || poem.cardLine || poem.headerQuote || "a poem by seven.";
    const url = `https://raviolifortwo.vercel.app/poems/${slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "raviolifortwo",
            images: [
                {
                    url: "/og-default.jpg",
                    width: 1200,
                    height: 630,
                }
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        }
    };
}

export default async function PoemPage({ params }: PoemPageProps) {
    const { slug } = await params;
    const poem = await getPoemBySlug(slug);

    if (!poem) {
        notFound();
    }

    const description = poem.excerpt || poem.cardLine || poem.headerQuote || "a poem by seven.";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": poem.title,
        "description": description,
        "author": {
            "@type": "Person",
            "name": "seven" // Pen name used in original layout metadata
        }
    };

    const allPoems = await getAllPoems();
    const currentIndex = allPoems.findIndex(p => p.slug === slug);
    
    let prevPoem, nextPoem;
    if (currentIndex > 0) {
        prevPoem = { slug: allPoems[currentIndex - 1].slug, title: allPoems[currentIndex - 1].title };
    }
    if (currentIndex !== -1 && currentIndex < allPoems.length - 1) {
        nextPoem = { slug: allPoems[currentIndex + 1].slug, title: allPoems[currentIndex + 1].title };
    }

    return (
        <div className="w-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PoemContent poem={poem} prevPoem={prevPoem} nextPoem={nextPoem} />
        </div>
    );
}
