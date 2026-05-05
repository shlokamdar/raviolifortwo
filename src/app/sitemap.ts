import { MetadataRoute } from 'next';
import { getAllPoems } from '@/lib/poems';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const poems = await getAllPoems();

  const poemEntries: MetadataRoute.Sitemap = poems.map((poem) => ({
    url: `https://raviolifortwo.vercel.app/poems/${poem.slug}`,
    lastModified: new Date(poem.date || new Date()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://raviolifortwo.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://raviolifortwo.vercel.app/kept',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://raviolifortwo.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...poemEntries,
  ];
}
