import { styleVariants } from "@vanilla-extract/css";

import { RARITY_COLORS } from "../../Abstracts/Color/Color.const";

export const rarityVariant = styleVariants(
    Object.fromEntries(Object.entries(RARITY_COLORS).map(([key, value]) => [key, { color: value }])),
);
