import { style, styleVariants } from "@vanilla-extract/css";

import { AMOUNT_COLORS } from "../../Abstracts/Color/Color.const";

export const root = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "stretch",
    gap: 20,
});

export const attributeGauge = style({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
});

export const attributeVariants = styleVariants({
    full: {
        width: 16,
        height: 16,
        border: `2px solid ${AMOUNT_COLORS.positive}`,
        backgroundColor: `hsl(from ${AMOUNT_COLORS.positive} h s l / 0.5)`,
    },
    empty: {
        width: 16,
        height: 16,
        border: `2px solid ${AMOUNT_COLORS.negative}`,
        backgroundColor: `hsl(from ${AMOUNT_COLORS.negative} h s l / 0.5)`,
    },
});

export const tabulation = style({
    display: "grid",
    gridTemplateColumns: "1fr auto",
    columnGap: 10,
});

export const amount = style({
    textAlign: "end",
});

export const divider = style({
    paddingBottom: 3,
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
});

export const pre = style({
    whiteSpace: "pre-wrap",
});

