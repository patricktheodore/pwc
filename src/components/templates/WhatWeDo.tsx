import React from "react";
import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Anchor,
  Container,
  Stack,
  Group,
} from "@mantine/core";
import { Sun, Droplet, CircleDotted, SmartHome } from "tabler-icons-react";
import { Link } from "gatsby";
import { homeStyles } from "../../styles/HomeStyles";

const features = [
  {
    icon: Droplet,
    title: "Window Cleaning",
    description:
      "Our main service is commercial and residential window cleaning. We use the latest technology in water-fed systems, leaving your windows sparkling!",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description:
      "Clean solar panels free from dirt and dust improves the efficiency of your solar panels with our experienced cleaners.We clean home roof-top solar panels to large industrial solar panel farms.",
  },
  {
    icon: SmartHome,
    title: "Pressure Cleaning",
    description:
      "Ideal for cleaning larger surfaces to help maintain the overall appearance of a property.",
  },
  {
    icon: CircleDotted,
    title: "Nanocoating",
    description:
      "Nano coating is engineered to change the surface of glass causing it to repel water making it almost maintenance-free.",
  },
];

export const WhatWeDo = () => {
  const { classes } = homeStyles();

  const items = features.map((feature) => (
    <Group
      position="left"
      className={classes.whatWeDoGroup}
      key={feature.title}
    >
      <Link to="/Services">
        <ThemeIcon
          size={60}
          radius="xl"
          variant="gradient"
          gradient={{ deg: 133, from: "#FF5714", to: "#FFB800" }}
          className={classes.themeIcon}
        >
          <feature.icon size={26} />
        </ThemeIcon>
      </Link>
      <Text size="lg" weight={200}>
        {feature.title}
      </Text>
      <br />
      <Text className={classes.whatWeDoDescription} size="sm">
        {feature.description}
      </Text>
    </Group>
  ));

  return (
    <Container fluid className={classes.whatWeDoCont}>
      <Stack className={classes.whatWeDoStack}>
        <Title className={classes.whatWeDoTitle} order={2}>
          What We Do...
        </Title>
        <Text className={classes.whatWeDoText}>
          Purified Window Cleaning are leaders in providing cleaning services to
          residential and commercial customers across Perth. We pride ourselves
          on being reliable and efficient in our work ethic and use high-quality
          cleaning methods and modern equipment to ensure a superior result
          while maintaining sustainability. As a company we believe in building
          long lasting client partnerships. Our team makes it a priority to get
          to know our customers and to offer unique and customised solutions to
          maintain their properties all year round.
        </Text>
        <Anchor component={Link} to="/Services">
          <Button size="sm" radius="xl" className={classes.cardButton}>
            Learn More
          </Button>
        </Anchor>
      </Stack>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        className={classes.whatWeDoGrid}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
};
