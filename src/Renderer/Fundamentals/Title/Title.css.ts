import { style } from "@vanilla-extract/css";

export const title = style({
    whiteSpace: "pre",
    textAlign: "center",
    fontSize: 24,
    lineHeight: "32px",
    textShadow: "0 0 1px black, 0 0 2px black, 0 0 4px black, 0 0 8px black",
});

export const subTitle = style([
    title,
    {
        fontSize: 20,
        lineHeight: "24px",
    },
]);

