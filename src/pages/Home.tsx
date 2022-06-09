import React from "react";
import { MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";
import WhyUs from "../components/templates/WhyUs";

const Home = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Home" />
      {/* hero image with paralax scrolling */}
      {/* I like the why choose us approach */}
      <WhyUs />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Home;

// summary of everything with learn more button to either locations on the site.
// hero image with parallax scrolling on desktop and full height static on mobile
