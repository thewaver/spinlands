import { style } from "@vanilla-extract/css";

export const app = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "stretch",
    gap: 20,
    padding: 20,
});

export const grid = style({
    display: "grid",
    gap: 20,
});

export const flex = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
});

