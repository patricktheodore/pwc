import { createStyles } from "@mantine/core";

export const homeStyles = createStyles((theme) => ({
  homeFluidCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "10rem 8rem",

    [theme.fn.smallerThan("lg")]: {
      padding: "4rem 4rem",
    },

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 0.5rem",
    },
  },

  whyUsCont: {
    backgroundColor: theme.colors.gray[8],
  },

  goodCompanyCont: {
    paddingBottom: "2rem",
  },

  titleGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  homeTitle: {
    width: "100%",
    fontWeight: 200,
    fontSize: "3rem",
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2.5rem",
    },
  },

  whyUsTitle: {
    color: theme.colors.gray[2],
  },

  goodCompanyTitle: {
    color: theme.colors.gray[8],
  },

  homeSubtitle: {
    fontSize: "1.6rem",
    fontWeight: 100,
    textAlign: "center",
    padding: "0 0.5rem",
    margin: "1rem 0 4rem 0",
  },

  whyUsSubtitle: {
    color: theme.colors.brand[5],
  },

  homeDivider: {
    width: "50%",
  },

  homeGrid: {
    maxWidth: "100%",
    padding: "0 4rem",

    [theme.fn.smallerThan("xl")]: {
      padding: "0 2rem",
    },

    [theme.fn.smallerThan("sm")]: {
      padding: 0,
    },
  },

  companyGrid: {
    alignSelf: "center",
    width: "66%",
  },

  companyLogoSvg: {
    maxHeight: 120,
    maxWidth: 240,
  },

  gridCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "2rem",
    },
  },

  companyGridCol: {
    justifyContent: "center",
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

  testimonialImage: {
    borderRadius: "50%",
  },

  testimonialName: {
    fontSize: "1.6rem",
    fontWeight: 100,
    textAlign: "center",
  },

  testimonialSubtitle: {
    fontSize: "1.2rem",
    fontWeight: 100,
    textAlign: "center",
  },
}));
