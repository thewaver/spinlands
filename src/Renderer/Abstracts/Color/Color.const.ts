import { RarityType } from "../../../Logic/Abstracts/Rarity/Rarity.types";

export const RARITY_COLORS: Record<RarityType, string> = {
    common: "rgb(255, 255, 255)",
    uncommon: "rgb(128, 255, 0)",
    rare: "rgb(0, 192, 255)",
    epic: "rgb(255, 192, 0)",
};

export const AMOUNT_COLORS = {
    positive: "rgb(64, 255, 128)",
    negative: "rgb(255, 64, 128)",
};
