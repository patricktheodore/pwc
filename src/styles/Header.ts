import { createStyles } from "@mantine/core";

export const HEADER_HEIGHT = 100;

export const headerStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    borderTopWidth: 0,
    overflow: "hidden",
    padding: "1rem 0 1rem 1rem",

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  logoCont: {
    transition: "transform .2s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 30px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.dark[5],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",

    "&:hover": {
      color: theme.colors.brand[5],
      transform: "translateY(-2px)",
      transition: "all 300ms",
      textDecoration: "none",
    },

    [theme.fn.smallerThan("md")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.colors.brand[5],
    },
  },
}));
