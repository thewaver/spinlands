import { ResourceDefs, ResourceType } from "./Resource.types";

export const RESOURCE_DEFS: Record<ResourceType, ResourceDefs> = {
    credit: {
        rarity: "common",
        uses: ["trade"],
        value: 1,
    },
    gas: {
        rarity: "common",
        uses: ["mission"],
        value: 20,
    },
    rubber: {
        rarity: "common",
        uses: ["assembly"],
        value: 10,
    },
    scrap: {
        rarity: "common",
        uses: ["assembly"],
        value: 10,
    },
    wire: {
        rarity: "common",
        uses: ["assembly"],
        value: 10,
    },
    ammo: {
        rarity: "uncommon",
        uses: ["mission"],
        value: 40,
    },
    epoxy: {
        rarity: "uncommon",
        uses: ["assembly"],
        value: 20,
    },
    lubricant: {
        rarity: "uncommon",
        uses: ["assembly"],
        value: 20,
    },
    alloy: {
        rarity: "rare",
        uses: ["assembly"],
        value: 80,
    },
    schematic: {
        rarity: "rare",
        uses: ["research"],
        value: 200,
    },
    nitro: {
        rarity: "rare",
        uses: ["mission"],
        value: 200,
    },
    mechanical: {
        rarity: "epic",
        uses: ["assembly"],
        value: 1000,
    },
    electronic: {
        rarity: "epic",
        uses: ["assembly"],
        value: 2000,
    },
};

