import React from "react";
import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  Anchor,
} from "@mantine/core";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "relative",
  },

  title: {
    zIndex: 1,
    color: theme.colors.gray[2],
    fontSize: "4rem",
    textAlign: "center",
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
  },

  description: {
    textAlign: "center",
    fontSize: "1rem",
    color: theme.colors.gray[2],
    fontWeight: 200,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  background: {
    height: "100%",
    width: "100%",
    zIndex: -1,
  },

  controlButtons: {
    marginLeft: "1rem",
    marginRight: "1rem",
    height: "50px",
    padding: "0 26px",
    width: "auto",
    lineHeight: 1.5,
    fontSize: "1.2rem",
    fontWeight: 400,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.gray[2],
    backgroundColor: theme.colors.brand[6],

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1rem",
      lineHeight: 1.3,
      height: "40px",
    },

    "&:hover": {
      backgroundColor: theme.colors.brand[7],
    },
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  },
}));

export const HeroImage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <StaticImage
        style={{ position: "absolute" }}
        className={classes.background}
        alt=""
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          Purified Window Cleaning Solutions
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Reliable, Efficient, Sustainable. We take great care Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </Text>
        <Container fluid className={classes.buttonGroup}>
          <Anchor component={Link} to="/Contact" mt="2rem">
            <Button radius="xl" className={classes.controlButtons}>
              Get a Quote
            </Button>
          </Anchor>
          <Anchor component={Link} to="/Contact" mt="2rem">
            <Button radius="xl" className={classes.controlButtons}>
              Call Us
            </Button>
          </Anchor>
        </Container>
      </Container>
    </div>
  );
};
