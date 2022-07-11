import { createStyles } from "@mantine/core";

export const homeStyles = createStyles((theme) => ({
  homeFluidCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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

  testimonialsTitle: {
    fontSize: "3rem",
    fontWeight: 100,
  },

  testimonialSubtitle: {
    fontSize: "1.6rem",
    fontWeight: 100,
    textAlign: "center",
  },

  testimonialCarouselContainer: {
    width: "80%",
    padding: 0,
    margin: 0,
    alignSelf: "center",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  testimonialCarouselCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "2rem",
    padding: "4rem 4rem 0 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: 0,
    },
  },

  testimonialCarouselFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "space-evenly",
    },
  },

  testimonialCarouselTextTransform: {
    textAlign: "left",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },

  testimonialCarouselText: {
    margin: "2rem",
    padding: "0 2rem",
    fontStyle: "italic",

    [theme.fn.smallerThan("sm")]: {
      margin: "2rem",
      padding: 0,
    },
  },

  testimonialCarouselAvatar: {
    margin: "1rem",
  },

  testimonialCarouselArrows: {
    color: "gray",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    position: "absolute",
    top: "50%",
    zIndex: 1,
    transition: "all .2s",

    "&:hover": {
      transform: "scaleY(1.5)",
      color: theme.colors.brand[5],
    },
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

  testimonialButton: {
    fontSize: "1.5rem",
  },

  whatWeDoCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "4rem 2rem",
    padding: "6rem 8rem",

    [theme.fn.smallerThan("xl")]: {
      flexDirection: "column",
      padding: "4rem 0.5rem",
    },

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 0.5rem",
    },
  },

  whatWeDoTitle: {
    fontWeight: 200,
    fontSize: "3rem",
    textAlign: "left",

    [theme.fn.smallerThan("xl")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
  },

  whatWeDoStack: {
    width: "40%",
    marginRight: "2rem",

    [theme.fn.smallerThan("xl")]: {
      marginRight: 0,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  },

  whatWeDoGrid: {
    width: "50%",
    marginLeft: "2rem",

    [theme.fn.smallerThan("lg")]: {
      marginLeft: 0,
      marginTop: "4rem",
      width: "100%",
    },
  },

  whatWeDoGroup: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "2rem 0",

    [theme.fn.smallerThan("md")]: {
      justifyContent: "center",
    },
  },

  whatWeDoText: {
    textAlign: "left",
    color: theme.colors.gray[7],
    fontSize: "1rem",
    margin: "1rem 4rem 1rem 0",

    [theme.fn.smallerThan("xl")]: {
      textAlign: "center",
      margin: 0,
    },
  },

  whatWeDoDescription: {
    textAlign: "left",
    color: theme.colors.gray[7],
    fontSize: "1rem",
    margin: "1rem",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      padding: 0,
    },
  },

  themeIcon: {
    border: `1px solid ${theme.colors.gray[7]}`,
  },

  servicesCont: {
    justifySelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem 8rem",

    [theme.fn.smallerThan("xl")]: {
      padding: "4rem 4rem",
    },

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 0.5rem",
      margin: "2rem",
    },
  },

  servicesTitle: {
    fontWeight: 200,
    fontSize: "3rem",
    textAlign: "center",
    marginTop: "4rem",

    [theme.fn.smallerThan("xl")]: {
      fontSize: "2.5rem",
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: "2.rem",
    },
  },

  servicesText: {
    textAlign: "center",
    color: theme.colors.gray[7],
    fontSize: "1rem",
    margin: "1rem 0 6rem 0",
  },

  servicesGroup: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 2rem",

    [theme.fn.smallerThan("md")]: {
      justifyContent: "center",
      padding: 0,
    },
  },

  servicesDescription: {
    textAlign: "left",
    color: theme.colors.gray[7],
    fontSize: "1rem",
    marginTop: 20,

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      padding: 0,
    },
  },

  serviceTitle: {
    fontWeight: 200,
    fontSize: "1.2rem",
    textAlign: "center",

    [theme.fn.smallerThan("lg")]: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },

  servicesGrid: {
    alignItems: "flex-start",
    marginBottom: "4rem",
  },

  aboutCont: {
    // justifySelf: "center",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    padding: "2rem 8rem",

    [theme.fn.smallerThan("xl")]: {
      padding: "4rem 4rem",
    },

    [theme.fn.smallerThan("md")]: {
      padding: "4rem 0.5rem",
      margin: "2rem",
    },
  },

  aboutImage: {
    height: "15rem",
    width: "15rem",
    borderRadius: "50%",
  },

  aboutTitle: {
    fontWeight: 200,
    fontSize: "3rem",
    textAlign: "center",
    marginTop: "8rem",

    [theme.fn.smallerThan("xl")]: {
      fontSize: "2.5rem",
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: "2.rem",
    },
  },

  aboutText: {
    textAlign: "left",
    color: theme.colors.gray[7],
    fontSize: "1rem",
    marginTop: 20,

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      padding: 0,
    },
  },

  aboutDescCont: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));
