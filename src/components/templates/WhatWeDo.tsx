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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: SmartHome,
    title: "Gutter Cleaning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: CircleDotted,
    title: "Pool Fence Restoration",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
          gradient={{ deg: 133, from: "orange", to: "yellow" }}
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
          Services that we provide ... Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
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
