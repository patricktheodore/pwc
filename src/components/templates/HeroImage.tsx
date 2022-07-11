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
import { HeroImageStyles } from "../../styles/HeroImageStyle";

export const HeroImage = () => {
  const { classes } = HeroImageStyles();

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
        src="../../images/WIND36.jpg"
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          Purified Window Cleaning Solutions
        </Title>
        <Text
          className={classes.description}
          size="xl"
          mt="xl"
          style={{ margin: "2rem" }}
        >
          Reliable, efficient, sustainable cleaning that keeps your assets
          sparkling.
        </Text>
        <Container fluid className={classes.buttonGroup}>
          <Anchor component={Link} to="/Contact" mt="2rem">
            <Button
              variant="gradient"
              gradient={{ deg: 133, from: "#FF5714", to: "#FFB800" }}
              radius="xl"
              className={classes.controlButtons}
            >
              Get a Quote
            </Button>
          </Anchor>
          <Anchor href="tel:040000000" mt="2rem">
            <Button
              variant="gradient"
              gradient={{ deg: 133, from: "#FF5714", to: "#FFB800" }}
              radius="xl"
              className={classes.controlButtons}
            >
              Call Us
            </Button>
          </Anchor>
        </Container>
      </Container>
    </div>
  );
};
