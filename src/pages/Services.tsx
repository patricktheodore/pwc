import React from "react";
import { Grid, MantineProvider, Title } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { ServicesCont } from "../components/templates/ServicesCont";
import { ServicesHero } from "../components/templates/ServicesHero";

const Services = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Services" />
      <ServicesHero />
      <ServicesCont />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Services;
