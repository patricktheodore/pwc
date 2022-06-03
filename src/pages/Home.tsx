import React from "react";
import { MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";

const Home = () => {
  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Home" />
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Home;
