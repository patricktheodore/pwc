import { createStyles } from "@mantine/core";

export const homeStyles = createStyles((theme) => ({
  whyUsCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: theme.colors.gray[8],
    padding: "4rem",

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 0",
    },
  },

  titleGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  whyUsTitle: {
    width: "100%",
    fontWeight: 200,
    fontSize: "3rem",
    textAlign: "center",
    color: theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2.5rem",
    },
  },

  whyUsSubtitle: {
    fontSize: "1rem",
    color: theme.colors.brand[5],
    fontWeight: 100,
  },

  whyUsDivider: {
    width: "50%",
  },

  whyUsGrid: {
    width: "100%",
  },
}));
