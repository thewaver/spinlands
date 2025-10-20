import { RarityType } from "../Rarity/Rarity.types";

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
    "powercell",

    "lootbox-common",
    "lootbox-uncommon",
    "lootbox-rare",
    "lootbox-epic",
] as const;
export type ResourceType = (typeof RESOURCE_TYPES)[number];

export const RESOURCE_USES = ["assembly", "claim", "mission", "other"] as const;
export type ResourceUse = (typeof RESOURCE_USES)[number];

export type ResourceDefs = {
    rarity: RarityType;
    uses: ResourceUse[];
    value: number;
};

