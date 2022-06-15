import { createStyles } from "@mantine/core";

export const contactStyles = createStyles((theme) => ({
  formCont: {
    padding: "0 6rem",

    [theme.fn.smallerThan("md")]: {
      padding: "0 3rem",
    },

    [theme.fn.smallerThan("sm")]: {
      padding: "0 1rem",
    },
  },

  buttonGroup: {
    display: "flex",
    alignItems: "center",
  },

  submitBtn: {
    width: "30%",
    borderRadius: theme.radius.xl,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.dark[8],
    border: `1px solid ${theme.colors.dark[8]}`,

    "&:hover": {
      backgroundColor: theme.colors.brand[4],
    },
  },

  resetBtn: {
    width: "30%",
    borderRadius: theme.radius.xl,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.dark[8],
    backgroundColor: theme.colors.teal[5],
    border: `1px solid ${theme.colors.dark[8]}`,

    "&:hover": {
      backgroundColor: theme.colors.teal[4],
    },
  },

  formTitle: {
    fontWeight: 200,
    fontSize: "3rem",
    textAlign: "center",
    margin: "4rem 0 2rem 0",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2.5rem",
    },
  },

  faIcon: {
    color: theme.colors.brand[5],
    paddingBottom: "4px",
    margin: "2px 1rem 0 0",
    width: "2rem",
  },

  easyContactHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 200,
    fontSize: "1.5rem",
    textAlign: "center",
    marginLeft: "2rem",

    [theme.fn.smallerThan("md")]: {
      margin: "1rem 3rem 0.5rem 0",
    },
  },

  easyConactDescription: {
    marginLeft: "5rem",
    color: theme.colors.gray[7],

    [theme.fn.smallerThan("md")]: {
      margin: 0,
    },
  },

  infoStack: {
    alignItems: "flex-start",
    justifyContent: "flex-start",

    [theme.fn.smallerThan("md")]: {
      textAlign: "center",
      alignItems: "center",
    },
  },

  easyContactGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",

    [theme.fn.smallerThan("md")]: {
      alignItems: "center",
    },
  },
}));
