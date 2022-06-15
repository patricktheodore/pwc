import { createStyles } from "@mantine/core";

export const HeroImageStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4rem",
  },

  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "relative",
  },

  title: {
    zIndex: 1,
    color: theme.colors.gray[2],
    fontSize: "4rem",
    textAlign: "center",
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
  },

  description: {
    textAlign: "center",
    fontSize: "1rem",
    color: theme.colors.gray[2],
    fontWeight: 200,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  background: {
    height: "100%",
    width: "100%",
    zIndex: -1,
  },

  controlButtons: {
    marginLeft: "1rem",
    marginRight: "1rem",
    height: "50px",
    padding: "0 26px",
    width: "auto",
    lineHeight: 1.5,
    fontSize: "1.2rem",
    fontWeight: 400,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.gray[2],
    backgroundColor: theme.colors.brand[6],

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1rem",
      lineHeight: 1.3,
      height: "40px",
    },

    "&:hover": {
      backgroundColor: theme.colors.brand[7],
    },
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  },
}));
