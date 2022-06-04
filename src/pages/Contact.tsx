import React from "react";
import { Button, Title, MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";
import { navigationLinks } from "../components/atoms/navigationLinks";

const Contact = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Contact" />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Contact;
