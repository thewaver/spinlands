export const CAR_COSMETIC_TYPES = ["decal", "hood", "lighting", "paint", "rim", "skirt", "spoiler", "window"] as const;
export type CarCosmeticType = (typeof CAR_COSMETIC_TYPES)[number];
