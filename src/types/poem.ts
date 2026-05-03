export type Poem = {
    date: string
    title: string
    slug: string
    category: 'general' | 'archives-from-instagram' | 'letters-to-robin' | 'letters-to-peter' | 'letters'
    tags: string[]           // e.g. ['yearning', 'everyday-magic', 'self-portrait']
    cardLine: string         // pull quote shown on cards and homepage
    headerQuote: string      // large quote shown at top of poem page
    eyebrow: string          // small contextual text above title
    fullPoem: string         // preserve all whitespace, indentation, line breaks exactly
    note: string | null      // poet's note after the poem
    interactiveFeature: string | null   // description of feature or 'NONE'
}
