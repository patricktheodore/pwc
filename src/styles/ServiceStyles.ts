import { createStyles } from "@mantine/core";

export const servicesStyles = createStyles((theme) => ({
  servicesCont: {
    margin: 0,
    padding: "4rem 10rem",
    justifyContent: "center",
    alignItems: "flex-start",

    [theme.fn.smallerThan("lg")]: {
      padding: "4rem",
    },

    [theme.fn.smallerThan("md")]: {
      padding: 0,
    },
  },

  serviceCardCont: {
    // width: "70%",
    textAlign: "center",

    // [theme.fn.smallerThan("sm")]: {
    //   width: "100%",
    // },
  },

  serviceCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  cardHeader: {
    fontWeight: 200,
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "2rem 0",
  },

  cardText: {
    color: theme.colors.gray[7],
    fontWeight: 100,
    lineHeight: 2,
  },

  cardButton: {
    borderRadius: theme.radius.xl,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.dark[8],
    border: `1px solid ${theme.colors.dark[8]}`,
    margin: "1rem 0",

    "&:hover": {
      backgroundColor: `${theme.colors.orange[3]}`,
    },
  },

  cardButtonIcon: {
    margin: "0 0 0 1rem",
  },

  serviceGridCol: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0 2rem",
  },
}));
