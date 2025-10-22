import { style } from "@vanilla-extract/css";

export const surface = style({
    width: "100%",
    borderRadius: 10,
    border: "2px solid rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "var(--shd-tiny), var(--shd-soft)",
    overflow: "hidden",
    padding: 20,
});

