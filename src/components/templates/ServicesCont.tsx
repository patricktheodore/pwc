import React from "react";
import { Grid } from "@mantine/core";
import ServicesTemplate from "../../components/organisms/ServicesTemplate";
import { servicesStyles } from "../../styles/ServiceStyles";
import ResidentialService from "../organisms/ResidentialService";
import CommercialService from "../organisms/CommercialServices";
import IndustrialServices from "../organisms/IndustrialService";
import SolarPanelService from "../organisms/SolarPanelServices";

export const ServicesCont = () => {
  const { classes } = servicesStyles();

  return (
    <Grid className={classes.servicesCont}>
      <Grid.Col sm={12} md={6} lg={4} className={classes.serviceGridCol}>
        <ResidentialService />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} className={classes.serviceGridCol}>
        <CommercialService />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} className={classes.serviceGridCol}>
        <IndustrialServices />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} className={classes.serviceGridCol}>
        <SolarPanelService />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} className={classes.serviceGridCol}>
        <ServicesTemplate />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} className={classes.serviceGridCol}>
        <ServicesTemplate />
      </Grid.Col>
    </Grid>
  );
};
