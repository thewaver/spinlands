export const RESOURCE_TYPES = [
    "credit",
    "gas",
    "lubricant",
    "rubber",
    "scrap",
    "ammo",
    "alloy",
    "epoxy",
    "schematic",
    "wire",
    "electronic",
    "mechanical",
    "nitro",
] as const;
export type ResourceType = (typeof RESOURCE_TYPES)[number];

export const RESOURCE_USES = ["assembly", "mission", "research", "trade"] as const;
export type ResourceUse = (typeof RESOURCE_USES)[number];

export const RESOURCE_RARITIES = ["common", "uncommon", "rare", "epic"] as const;
export type ResourceRarity = (typeof RESOURCE_RARITIES)[number];

export type ResourceDefs = {
    rarity: ResourceRarity;
    uses: ResourceUse[];
    value: number;
};
