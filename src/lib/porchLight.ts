// lib/porchLight.ts
export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export function getTimeOfDay(): TimeOfDay {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 18) return 'afternoon';
    if (hour >= 18 && hour < 21) return 'evening';
    return 'night';
}

export const porchLightTokens: Record<TimeOfDay, Record<string, string>> = {
    morning: {
        '--color-parchment': '#F5F0E8',
        '--color-canvas': '#F5F0E8',
        '--color-gold': '#B8893A',
        '--color-ink': '#1C1814',
        '--color-ink-muted': '#6B5E52',
        '--color-ink-faint': '#B5A898',
    },
    afternoon: {
        '--color-parchment': '#FAF7F2',
        '--color-canvas': '#FAF7F2',
        '--color-gold': '#B8893A',
        '--color-ink': '#1C1814',
        '--color-ink-muted': '#6B5E52',
        '--color-ink-faint': '#B5A898',
    },
    evening: {
        '--color-parchment': '#F0E8DC',
        '--color-canvas': '#F0E8DC',
        '--color-gold': '#A67C30',
        '--color-ink': 'rgba(28, 24, 20, 0.93)',
        '--color-ink-muted': 'rgba(107, 94, 82, 0.90)',
        '--color-ink-faint': 'rgba(181, 168, 152, 0.90)',
    },
    night: {
        '--color-parchment': '#EBE0CE',
        '--color-canvas': '#EBE0CE',
        '--color-gold': '#9E7228',
        '--color-ink': 'rgba(28, 24, 20, 0.89)',
        '--color-ink-muted': 'rgba(107, 94, 82, 0.86)',
        '--color-ink-faint': 'rgba(181, 168, 152, 0.86)',
    },
};
