import React from "react";
import { MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";
import WhyUs from "../components/templates/WhyUs";
import GoodCompany from "../components/templates/GoodCompany";
import TestimonialsShort from "../components/templates/TestimonialsShort";

const Home = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Home" />
      {/* hero image with paralax scrolling */}
      <WhyUs />
      {/* 3 random testimonials from json doc. Testimonials page will do all of them. */}
      {/* You're in good company section (this is unique to home page) - both of these are outlined in figma doc */}
      <TestimonialsShort />
      {/* Client stats */}
      <GoodCompany />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Home;

// summary of everything with learn more button to either locations on the site.
// hero image with parallax scrolling on desktop and full height static on mobile
