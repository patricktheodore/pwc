import React from "react";
import { Button, Title, MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";

import { navigationLinks } from "../components/atoms/navigationLinks";
const Testimonials = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Testimonials" />
      <Title order={2}>PWC by patricktheodore</Title>
      <p>Tetsing 124</p>
      <Button>Go there</Button>
    </MantineProvider>
  );
};

export default Testimonials;
