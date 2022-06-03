import React from "react";
import { Button, Title, MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";

const Home = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Home" />
    </MantineProvider>
  );
};

export default Home;
