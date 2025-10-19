import { style } from "@vanilla-extract/css";

export const layoutContent = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "stretch",
    gap: 20,
    padding: 40,
    maxWidth: "100vw",
});

export const navWrapper = style({
    position: "sticky",
    top: 0,
    left: 0,
    width: "100vw",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(40px) grayscale(50%)",
    boxShadow: "var(--shd-tiny), var(--shd-soft), var(--shd-medium)",
});

export const nav = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
});

