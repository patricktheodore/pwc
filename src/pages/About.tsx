import React from "react";
import { MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { footerLinks } from "../components/atoms/footerLinks";

const About = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="About" />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default About;
