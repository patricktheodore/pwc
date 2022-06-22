import { createStyles } from "@mantine/core";

export const footerStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colors.gray[8],
  },

  logo: {
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      marginBottom: "1rem",
    },
  },

  description: {
    marginTop: 5,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.brand[5],

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color: theme.colors.dark[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",

    "&:hover": {
      color: theme.colors.brand[5],
      textDecoration: "none",
    },

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      marginTop: '5px'
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
    marginBottom: theme.spacing.xs / 2,
    color: theme.white,

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },

  afterFooter: {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colors.gray[2]}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  companyInfo: {
    textAlign: "center",
    margin: "1rem 0",
    color: theme.colors.gray[2],
  },

  logoCont: {
    transition: "transform .2s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  socialAction: {
    margin: "1rem 3rem",
    borderRadius: "50%",
    color: theme.colors.gray[2],

    "&:hover": {
      color: theme.colors.brand[5],
      backgroundColor: theme.colors.gray[8],
    },
  },

  social: {
    margin: "2rem 0",

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  footerSimpleGrid: {
    width: '300px',
    margin: '1rem 0'
  }
}));
