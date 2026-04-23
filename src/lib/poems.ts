import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Poem } from '@/types/poem';

const poemsDirectory = path.join(process.cwd(), 'src/content/poems');

export async function getAllPoems(): Promise<Poem[]> {
    if (!fs.existsSync(poemsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(poemsDirectory);
    const allPoemsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(poemsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                fullPoem: content,
                ...(data as Omit<Poem, 'slug' | 'fullPoem'>),
            } as Poem;
        });

    return allPoemsData;
}

export async function getPoemBySlug(slug: string): Promise<Poem | null> {
    const fullPath = path.join(poemsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        fullPoem: content,
        ...(data as Omit<Poem, 'slug' | 'fullPoem'>),
    } as Poem;
}

export async function getPoemsByTag(tag: string): Promise<Poem[]> {
    const allPoems = await getAllPoems();
    return allPoems.filter((poem) => poem.tags.includes(tag));
}

export async function getPoemsByCategory(category: Poem['category']): Promise<Poem[]> {
    const allPoems = await getAllPoems();
    return allPoems.filter((poem) => poem.category === category);
}

export async function getAllTags(): Promise<string[]> {
    const allPoems = await getAllPoems();
    const tags = new Set<string>();
    allPoems.forEach((poem) => {
        poem.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
}
