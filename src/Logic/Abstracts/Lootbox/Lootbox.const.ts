import { RarityType } from "../Rarity/Rarity.types";
import { LootboxDefs } from "./Lootbox.types";

export const LOOTBOX_DEFS: Record<RarityType, LootboxDefs> = {
    common: {
        openCount: 8,
        items: {
            credit: {
                amount: 20,
                probability: 1,
            },
            gas: {
                amount: 1,
                probability: 1,
            },
            rubber: {
                amount: 1,
                probability: 2,
            },
            scrap: {
                amount: 1,
                probability: 3,
            },
            wire: {
                amount: 1,
                probability: 1,
            },
        },
    },

    uncommon: {
        openCount: 4,
        items: {
            "lootbox-common": {
                amount: 2,
                probability: 1,
            },
            "ammo": {
                amount: 1,
                probability: 1,
            },
            "epoxy": {
                amount: 1,
                probability: 2,
            },
            "lubricant": {
                amount: 1,
                probability: 2,
            },
        },
    },

    rare: {
        openCount: 2,
        items: {
            "lootbox-uncommon": {
                amount: 2,
                probability: 2,
            },
            "alloy": {
                amount: 1,
                probability: 4,
            },
            "schematic": {
                amount: 1,
                probability: 1,
            },
            "nitro": {
                amount: 1,
                probability: 1,
            },
        },
    },

    epic: {
        openCount: 1,
        items: {
            "lootbox-rare": {
                amount: 2,
                probability: 2,
            },
            "mechanical": {
                amount: 1,
                probability: 2,
            },
            "electronic": {
                amount: 1,
                probability: 1,
            },
            "powercell": {
                amount: 1,
                probability: 1,
            },
        },
    },
};
