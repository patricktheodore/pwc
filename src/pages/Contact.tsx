import React from "react";
import { MantineProvider, Grid } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { ContactForm } from "../components/templates/ContactForm";
import EasyContactSheet from "../components/templates/EasyContactSheet";

const Contact = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Contact" />
      <Grid
        align="flex-start"
        justify="center"
        sx={{ width: "100%", marginBottom: "4rem" }}
      >
        <Grid.Col sm={12} md={6} lg={5}>
          <EasyContactSheet />
        </Grid.Col>
        <Grid.Col sm={12} md={6} lg={5}>
          <ContactForm />
        </Grid.Col>
      </Grid>
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Contact;

// page breaks on mobile fix padding/margins
