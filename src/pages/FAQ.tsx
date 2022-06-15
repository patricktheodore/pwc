import React from "react";
import { MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { footerLinks } from "../components/atoms/footerLinks";

const FAQ = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="FAQ" />
      {/* small story FAQ the business. Some images/quotes from Tom etc.
    Info FAQ the team */}
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default FAQ;
