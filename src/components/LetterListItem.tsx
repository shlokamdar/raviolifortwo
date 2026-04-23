import Link from "next/link";

interface LetterListItemProps {
    title: string;
    eyebrow: string;
    href: string;
}

export function LetterListItem({ title, eyebrow, href }: LetterListItemProps) {
    return (
        <Link href={href} className="group block mb-12">
            <h3 className="font-display italic text-[clamp(1.25rem,2.6vw,1.6rem)] text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--accent-archive)] mb-1">
                {title}
            </h3>
            <span className="eyebrow lowercase">
                {eyebrow}
            </span>
        </Link>
    );
}
