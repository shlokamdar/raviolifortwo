'use client';

import { useEffect } from 'react';
import { getTimeOfDay, porchLightTokens } from '@/lib/porchLight';

export function PorchLightEffect() {
    useEffect(() => {
        const tod = getTimeOfDay();
        const tokens = porchLightTokens[tod];
        Object.entries(tokens).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }, []);

    return null;
}
