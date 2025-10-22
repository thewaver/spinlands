import { style } from "@vanilla-extract/css";

export const root = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "stretch",
    gap: 20,
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

