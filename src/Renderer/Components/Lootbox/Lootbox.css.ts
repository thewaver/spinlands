import { style, styleVariants } from "@vanilla-extract/css";

import { RARITY_COLORS } from "../../Abstracts/Color/Color.const";

export const root = style({
    width: 200,
    maxWidth: 200,
    aspectRatio: "1 / 1",
    padding: 20,
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: "24px",
});

export const rarityVariant = styleVariants(
    Object.fromEntries(
        Object.entries(RARITY_COLORS).map(([key, value]) => [
            key,
            {
                color: value,
                backgroundColor: "transparent",
                backgroundImage: `linear-gradient(315deg, hsl(from ${value} h s calc(l * 0.25)), hsl(from ${value} h s calc(l * 0.75)))`,
                boxShadow: `inset 0 0 0 4px ${value}`,
                borderRadius: 20,

                selectors: {
                    ["&:hover:not(:disabled)"]: {
                        backgroundColor: "transparent",
                        boxShadow: `inset 0 0 0 4px ${value}, inset 0 0 16px ${value}, 0 0 16px ${value}`,
                    },
                },
            },
        ]),
    ),
);
