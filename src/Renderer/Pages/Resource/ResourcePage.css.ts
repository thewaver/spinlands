import { style } from "@vanilla-extract/css";

export const grid = style({
    display: "grid",
    gap: 10,
});

export const flex = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
});
