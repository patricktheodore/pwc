import React from "react";
import { MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { footerLinks } from "../components/atoms/footerLinks";
import { AboutUsHero } from "../components/templates/AboutUsHero";
import AboutCont from "../components/templates/AboutCont";

const About = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="About" />
      <AboutUsHero />
      <AboutCont />
      {/* small story about the business. Some images/quotes from Tom etc.
    Info about the team */}
      {/* grid
      image on the left
      story on the right */}
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default About;
