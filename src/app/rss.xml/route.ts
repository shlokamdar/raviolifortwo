import { getAllPoems } from '@/lib/poems';

export async function GET() {
  const poems = await getAllPoems();
  
  const siteUrl = 'https://raviolifortwo.vercel.app';
  
  const rssItems = poems.map(poem => {
    return `
      <item>
        <title><![CDATA[${poem.title}]]></title>
        <link>${siteUrl}/poems/${poem.slug}</link>
        <guid>${siteUrl}/poems/${poem.slug}</guid>
        <pubDate>${new Date(poem.date || new Date()).toUTCString()}</pubDate>
        <description><![CDATA[${poem.excerpt || poem.cardLine || poem.headerQuote || "a poem by seven."}]]></description>
      </item>
    `;
  }).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>raviolifortwo</title>
        <link>${siteUrl}</link>
        <description>a room that remembers you — poems and prose by seven.</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${rssItems}
      </channel>
    </rss>
  `;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
