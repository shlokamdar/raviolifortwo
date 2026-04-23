import Link from "next/link";
import { cn } from "@/lib/utils";

interface LetterListItemProps {
    title: string;
    eyebrow: string;
    href: string;
}

export function LetterListItem({ title, eyebrow, href }: LetterListItemProps) {
    return (
        <Link href={href} className="group block mb-12">
            <h3 className="font-lora text-2xl text-ink transition-color-gold group-hover:text-gold mb-1">
                {title}
            </h3>
            <span className="eyebrow lowercase">
                {eyebrow}
            </span>
        </Link>
    );
}
