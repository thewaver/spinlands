export const getWeightedRandom = <T extends string>(weights: Record<T, number>): T => {
    const sorted = Object.entries(weights).sort(
        ([, aValue], [, bValue]) => (bValue as number) - (aValue as number),
    ) as [T, number][];
    const total = sorted.reduce((res, [, value]) => (res += value), 0);
    const r = Math.random() * total;

    let current = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        current += sorted[i][1];

        if (r <= current) return sorted[i][0];
    }

    return sorted[sorted.length - 1][0];
};
