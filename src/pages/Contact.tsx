import React from "react";
import { Button, Title, MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { ContactForm } from "../components/templates/ContactForm";

const Contact = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Contact" />
      <ContactForm />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Contact;

// have a clear call to action in the beginning. With a phone number button and a get an instant quote button
// have a secondary call to action, a form that allows a user to send an enquiry email
// form includes, name, email, phone (optional), and a message, and a dropdown/checkbox group (also optional)
