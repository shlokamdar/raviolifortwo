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
        '--color-parchment': '#F8F3EB',
        '--text-opacity': '1',
        '--color-gold': '#B8893A',
    },
    afternoon: {
        '--color-parchment': '#F8F3EB',
        '--text-opacity': '1',
        '--color-gold': '#B8893A',
    },
    evening: {
        '--color-parchment': '#F2EAD8',
        '--text-opacity': '0.93',
        '--color-gold': '#A67C30',
    },
    night: {
        '--color-parchment': '#EDE3CF',
        '--text-opacity': '0.89',
        '--color-gold': '#9E7228',
    },
};
