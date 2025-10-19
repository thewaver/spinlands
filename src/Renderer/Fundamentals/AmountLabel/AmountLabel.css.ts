import { styleVariants } from "@vanilla-extract/css";

import { AMOUNT_COLORS } from "../../Abstracts/Color/Color.const";

export const amountVariant = styleVariants(
    Object.fromEntries(Object.entries(AMOUNT_COLORS).map(([key, value]) => [key, { color: value }])),
);
