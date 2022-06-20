import React from "react";
import { Overlay, Container, Title, Text } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import { HeroImageStyles } from "../../styles/HeroImageStyle";

export const FAQHero = () => {
  const { classes } = HeroImageStyles();

  return (
    <div className={classes.hero} style={{ minHeight: "66vh" }}>
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
        <Title className={classes.title}>Frequently Asked Questions</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Reliable, Efficient, Sustainable. We take great care Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </Text>
      </Container>
    </div>
  );
};
