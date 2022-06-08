import { createStyles } from "@mantine/core";

export const servicesStyles = createStyles((theme) => ({
  servicesCont: {
    margin: 0,
    padding: "4rem",

    [theme.fn.smallerThan("md")]: {
      padding: 0,
    },
  },

  serviceCardCont: {
    width: "70%",
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
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
}));
