import { createStyles } from "@mantine/core";

export const HEADER_HEIGHT = 100;

export const headerStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("md")]: {
      padding: 0,
    },
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
    overflow: "auto",
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
    margin: 0,
    maxWidth: "100%",

    [theme.fn.smallerThan("md")]: {
      padding: "0 1rem",
    },
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
    padding: "8px 20px",
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

    [theme.fn.smallerThan("lg")]: {
      borderRadius: 0,
      padding: theme.spacing.sm,
    },

    [theme.fn.smallerThan("md")]: {
      borderRadius: 0,
      padding: theme.spacing.sm,
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.colors.brand[5],
    },
  },

  faIcon: {
    padding: "0 0 0 1rem",
  },

  headerButton: {
    borderRadius: theme.radius.xl,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.dark[8],
    border: `1px solid ${theme.colors.dark[8]}`,
    margin: "0 20px",

    "&:hover": {
      backgroundColor: theme.colors.brand[4],
    },

    [theme.fn.smallerThan("lg")]: {
      margin: theme.spacing.sm,
    },

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));
