import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://raviolifortwo.com'

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/archive',
        '/poems',
        '/letters',
        '/shelf',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic poem routes
    const poemsDirectory = path.join(process.cwd(), 'src/content/poems')
    let poemRoutes: MetadataRoute.Sitemap = []

    try {
        const filenames = fs.readdirSync(poemsDirectory)
        poemRoutes = filenames.map((filename) => {
            const slug = filename.replace(/\.mdx$/, '')
            return {
                url: `${baseUrl}/poems/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            }
        })
    } catch (error) {
        console.error('Error reading poems directory for sitemap:', error)
    }

    return [...staticRoutes, ...poemRoutes]
}
