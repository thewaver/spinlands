import { style } from "@vanilla-extract/css";

export const grid = style({
    display: "grid",
    gap: 10,
});

export const flex = style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 10,
});

export const missionWrapper = style({
    flex: "0 0 240px",
    width: 240,
});

