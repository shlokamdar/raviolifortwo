import { notFound } from "next/navigation";
import { getPoemBySlug, getAllPoems } from "@/lib/poems";
import { PoemContent } from "@/components/PoemContent";

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

export default async function PoemPage({ params }: PoemPageProps) {
    const { slug } = await params;
    const poem = await getPoemBySlug(slug);

    if (!poem) {
        notFound();
    }

    return (
        <div className="w-full">
            <PoemContent poem={poem} />
        </div>
    );
}
