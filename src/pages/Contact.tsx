import React from "react";
import { Button, Title, MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";

import { navigationLinks } from "../components/atoms/navigationLinks";

const Contact = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Contact" />
      <Title order={2}>PWC by patricktheodore</Title>
      <p>Tetsing 124</p>
      <Button>Go there</Button>
    </MantineProvider>
  );
};

export default Contact;
