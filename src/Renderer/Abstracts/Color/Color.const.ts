import { ResourceRarity } from "../../../Logic/Abstracts/Resource/Resource.types";

export const RARITY_COLORS: Record<ResourceRarity, string> = {
    common: "rgb(255, 255, 255)",
    uncommon: "rgb(128, 255, 0)",
    rare: "rgb(0, 192, 255)",
    epic: "rgb(255, 192, 0)",
};

export const AMOUNT_COLORS = {
    positive: "rgb(64, 255, 128)",
    negative: "rgb(255, 64, 128)",
};
