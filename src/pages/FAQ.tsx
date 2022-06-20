import React from "react";
import { MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { footerLinks } from "../components/atoms/footerLinks";
import { FAQHero } from "../components/templates/FAQHero";
import { FaqSimple } from "../components/templates/FAQ";

const FAQ = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="FAQ" />
      <FAQHero />
      <FaqSimple />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default FAQ;
