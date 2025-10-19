import { style } from "@vanilla-extract/css";

export const root = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "stretch",
    gap: 20,
});

export const grid = style({
    display: "grid",
    columnGap: 20,
});
