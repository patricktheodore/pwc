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
import { ReceiptOff, Flame, CircleDotted, FileCode } from "tabler-icons-react";
import { Link } from "gatsby";
import { homeStyles } from "../../styles/HomeStyles";

const features = [
  {
    icon: ReceiptOff,
    title: "Residential",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: FileCode,
    title: "Commercial",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: CircleDotted,
    title: "Industry",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Flame,
    title: "Pool Fence Restoration",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const WhatWeDo = () => {
  const { classes } = homeStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <Group position="left" className={classes.whatWeDoGroup}>
        <ThemeIcon
          size={60}
          radius="xl"
          variant="gradient"
          gradient={{ deg: 133, from: "orange", to: "yellow" }}
        >
          <feature.icon size={26} />
        </ThemeIcon>
        <Text size="lg" weight={200}>
          {feature.title}
        </Text>
      </Group>
      <Text className={classes.whatWeDoText} size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container fluid className={classes.whatWeDoCont}>
      <Stack className={classes.whatWeDoStack}>
        <Title
          style={{ textAlign: "left" }}
          className={classes.homeTitle}
          order={2}
        >
          What We Do...
        </Title>
        {/* change text align, responsce start left , flexs to center */}
        <Text
          className={classes.whatWeDoText}
          style={{ textAlign: "left", fontSize: "1rem", margin: "1rem 0" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Anchor component={Link} to="/Services">
          <Button
            // variant="gradient"
            // gradient={{ deg: 133, from: "orange", to: "yellow" }}
            size="sm"
            radius="xl"
            className={classes.cardButton}
          >
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
