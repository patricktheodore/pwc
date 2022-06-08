import { createStyles } from "@mantine/core";

export const contactStyles = createStyles((theme) => ({
  formCont: {
    padding: "0 2rem",
    width: "100%",
    // maxWidth: "500px",

    [theme.fn.smallerThan("md")]: {
      padding: 0,
    },
  },

  submitBtn: {
    width: "100%",
    padding: "5px 0",
    borderRadius: theme.radius.md,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.dark[8],
    border: `1px solid ${theme.colors.dark[8]}`,

    "&:hover": {
      backgroundColor: theme.colors.brand[4],
    },
  },

  formTitle: {
    fontWeight: 200,
    fontSize: "3rem",
    textAlign: "center",
    margin: "4rem 0",
  },

  faIcon: {
    color: theme.colors.brand[5],
    paddingBottom: "4px",
    margin: "2px 1rem 0 0",
    width: "2rem",
  },

  easyContactHeader: {
    fontWeight: 200,
    fontSize: "1.5rem",
    textAlign: "center",
    marginLeft: "2rem",
  },

  easyConactDescription: {
    marginLeft: "5rem",
    color: theme.colors.gray[7],
  },
}));
