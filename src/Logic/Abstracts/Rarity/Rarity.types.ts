export const RARITY_TYPES = ["common", "uncommon", "rare", "epic"] as const;
export type RarityType = (typeof RARITY_TYPES)[number];
