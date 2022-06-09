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
    textAlign: "center",
    padding: "0 0.5rem",
    marginBottom: "2rem",
  },

  whyUsDivider: {
    width: "50%",
  },

  whyUsGrid: {
    maxWidth: "100%",
    padding: "0 4rem",

    [theme.fn.smallerThan("xl")]: {
      padding: "0 2rem",
      // width: "90%",
    },

    [theme.fn.smallerThan("sm")]: {
      padding: 0,
      // width: "90%",
    },
  },

  whyUsGridCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "2rem",
    },
  },

  whyUsGridColGroup: {
    width: "100%",
    marginBottom: "2rem",
  },

  whyUsGridColIcon: {
    // fontSize: "2rem",
    fill: theme.colors.brand[5],
    color: theme.colors.brand[5],
  },

  whyUsGridColTitle: {
    fontSize: "1.5rem",
    color: theme.colors.gray[2],
    fontWeight: 300,
  },

  whyUsGridColDescription: {
    textAlign: "center",
    fontSize: "1rem",
    color: theme.colors.gray[2],
    fontWeight: 200,
  },
}));
