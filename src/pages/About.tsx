import React from "react";
import { MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { footerLinks } from "../components/atoms/footerLinks";
import { AboutUsHero } from "../components/templates/AboutUsHero";
import AboutUsCont from "../components/templates/AboutUsCont";

const About = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="About" />
      <AboutUsHero />
      <AboutUsCont />
      {/* small story about the business. Some images/quotes from Tom etc.
    Info about the team */}
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default About;
