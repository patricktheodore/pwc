import { createStyles } from "@mantine/core";

export const contactStyles = createStyles((theme) => ({
  formCont: {
    padding: "0 2rem",
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
    margin: "2rem 0",
  },

  faIcon: {
    borderRadius: "50%",
    padding: theme.spacing.sm,
    border: `1px solid ${theme.colors.dark[8]}`,
    color: theme.colors.brand[5],
  },
}));
