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
      "When it comes to high quality residential window cleaning, our team at Purified Window Cleaning have the skills to provide the highest quality service leaving your windows sparkling.. Our goal is to make your life easier, allowing you to forget about cleaning windows. We love that our clients have high standards so we go to great lengths to exceed your expectations and will work with you to tailor personalised schedules to suit your household.",
  },
  {
    icon: BuildingStore,
    title: "Commercial Window Cleaning",
    description:
      "First impressions count. Our commercial window cleaning service will maintain your businesses perfect shine and ensure your staff and customers can enjoy a crystal clear view. Purified Window Cleaning services a large number of commercial properties including restaurants, shops, offices, schools, warehouses and small buildings. Our Pure Water Fed Poles allow us a reach of 15 metres in height and while being environmentally friendly  in eliminating the need for harsh chemicals. We work with owners to tailor schedules that suit their businesses and where required can provide service outside of normal business hours, so as not to inconvenience you or your customers.",
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
      "Clean solar panels free from dirt and dust improves their efficiency by up to 20%, saving you money.  Our experienced cleaners use pure water technology to ensure no damage occurs to your panels. Our advanced tools and equipment are non-abrasive and environmentally friendly, ensuring a stain-free finish for maximum sunlight absorption. ",
  },
  {
    icon: SmartHome,
    title: "High Pressure Cleaning",
    description:
      "Ideal for cleaning larger surfaces to help maintain the overall appearance of a property. We can use the pressure cleaner to service concrete, pavers, driveways, house walls and roofs. ",
  },
  {
    icon: Pool,
    title: "Nanocoating",
    description:
      "Nanocoating is engineered to change the surface of glass making it almost maintenance-free. The coating’s smooth service repels water, not allowing dirt or water drops to attach into the glass pores. Allowing for less cleaning time as it keeps the glass relatively free of grime and scum build-up all while protecting your glass. Nano coating is best used on pool balustrades, show screens and windows directly impacted by the ocean or river.",
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
        gradient={{ deg: 133, from: "#FF5714", to: "#FFB800" }}
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
