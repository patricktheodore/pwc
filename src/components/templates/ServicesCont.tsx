import React from "react";
import {
  Group,
  Text,
  ThemeIcon,
  Anchor,
  Button,
  Container,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { homeStyles } from "../../styles/HomeStyles";
import {
  Home,
  BuildingStore,
  BuildingSkyscraper,
  Sun,
  SmartHome,
  Pool,
} from "tabler-icons-react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: Home,
    title: "Residential Window Cleaning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    icon: BuildingStore,
    title: "Commercial Window Cleaning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    icon: BuildingSkyscraper,
    title: "Industry Window Cleaning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    icon: SmartHome,
    title: "Gutters & High Pressure Cleaning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    icon: Pool,
    title: "Pool Fence Restoration",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

export const ServicesCont = () => {
  const { classes } = homeStyles();

  const serviceItems = services.map((service) => (
    <Group
      position="left"
      className={classes.servicesGroup}
      key={service.title}
    >
      <ThemeIcon
        size={60}
        radius="xl"
        variant="gradient"
        gradient={{ deg: 133, from: "orange", to: "yellow" }}
        className={classes.themeIcon}
      >
        <service.icon size={40} strokeWidth={0.75} color={"white"} />
      </ThemeIcon>
      <Title order={3} className={classes.serviceTitle}>
        {service.title}
      </Title>
      <br />
      <Text className={classes.servicesDescription} size="sm">
        {service.description}
      </Text>
    </Group>
  ));

  return (
    <Container fluid className={classes.servicesCont}>
      <Title className={classes.servicesTitle} order={2}>
        Heres a complete list of the services we offer
      </Title>
      <Text className={classes.servicesText}>
        Services that we provide ... Lorem Ipsum is simply dummy text of the
        printing and typesetting industry.
      </Text>
      <SimpleGrid
        className={classes.servicesGrid}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: "lg", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        {serviceItems}
      </SimpleGrid>
      <Anchor component={Link} to="/Contact" mt="2rem">
        <Button size="sm" radius="xl" className={classes.cardButton}>
          Get a Quote
          <FontAwesomeIcon
            icon={faChevronRight}
            className={classes.cardButtonIcon}
          />
        </Button>
      </Anchor>
    </Container>
  );
};
