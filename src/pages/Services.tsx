import React from "react";
import { Grid, MantineProvider, Title } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { ServicesCont } from "../components/templates/ServicesCont";
import { servicesStyles } from "../styles/ServiceStyles";

const Services = () => {
  const { classes } = servicesStyles();
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Services" />
      {/* hero image, have a card for each services provided with a little icon
      for each service provided */}
      {/* Start with example card and we can duplicate for each service */}
      <Title order={1}>Our Services</Title>
      <ServicesCont />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Services;
