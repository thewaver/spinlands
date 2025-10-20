import { RarityType } from "../Rarity/Rarity.types";
import { ResourceType } from "../Resource/Resource.types";
import { LootboxDefs } from "./Lootbox.types";

export const LOOTBOX_DEFS: Record<RarityType, Partial<Record<ResourceType, LootboxDefs>>> = {
    common: {
        credit: {
            amount: 20,
            probability: 16,
        },
        gas: {
            amount: 1,
            probability: 16,
        },
        rubber: {
            amount: 1,
            probability: 32,
        },
        scrap: {
            amount: 1,
            probability: 48,
        },
        wire: {
            amount: 1,
            probability: 16,
        },
    },

    uncommon: {
        "lootbox-common": {
            amount: 2,
            probability: 8,
        },
        "ammo": {
            amount: 1,
            probability: 8,
        },
        "epoxy": {
            amount: 1,
            probability: 16,
        },
        "lubricant": {
            amount: 1,
            probability: 16,
        },
    },

    rare: {
        "lootbox-uncommon": {
            amount: 2,
            probability: 4,
        },
        "alloy": {
            amount: 1,
            probability: 8,
        },
        "schematic": {
            amount: 1,
            probability: 2,
        },
        "nitro": {
            amount: 1,
            probability: 2,
        },
    },

    epic: {
        "lootbox-rare": {
            amount: 2,
            probability: 1,
        },
        "mechanical": {
            amount: 1,
            probability: 2,
        },
        "electronic": {
            amount: 1,
            probability: 1,
        },
    },
};
