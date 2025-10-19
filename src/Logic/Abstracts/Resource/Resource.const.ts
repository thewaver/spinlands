import { ResourceDefs, ResourceType } from "./Resource.types";

export const RESOURCE_DEFS: Record<ResourceType, ResourceDefs> = {
    credit: {
        rarity: "common",
        uses: ["trade"],
        value: 1,
        probability: 64,
    },
    gas: {
        rarity: "common",
        uses: ["mission"],
        value: 20,
        probability: 16,
    },
    rubber: {
        rarity: "common",
        uses: ["assembly"],
        value: 10,
        probability: 32,
    },
    scrap: {
        rarity: "common",
        uses: ["assembly"],
        value: 10,
        probability: 48,
    },
    wire: {
        rarity: "common",
        uses: ["assembly"],
        value: 10,
        probability: 16,
    },
    ammo: {
        rarity: "uncommon",
        uses: ["mission"],
        value: 40,
        probability: 8,
    },
    epoxy: {
        rarity: "uncommon",
        uses: ["assembly"],
        value: 20,
        probability: 16,
    },
    lubricant: {
        rarity: "uncommon",
        uses: ["assembly"],
        value: 20,
        probability: 16,
    },
    alloy: {
        rarity: "rare",
        uses: ["assembly"],
        value: 80,
        probability: 8,
    },
    schematic: {
        rarity: "rare",
        uses: ["research"],
        value: 200,
        probability: 8,
    },
    nitro: {
        rarity: "rare",
        uses: ["mission"],
        value: 200,
        probability: 4,
    },
    mechanical: {
        rarity: "epic",
        uses: ["assembly"],
        value: 1000,
        probability: 2,
    },
    electronic: {
        rarity: "epic",
        uses: ["assembly"],
        value: 2000,
        probability: 1,
    },
};

