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
    <Grid
      gutter="xl"
      justify="center"
      align="flex-start"
      className={classes.servicesCont}
    >
      <Grid.Col
        sm={12}
        md={6}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "4rem 0",
        }}
      >
        <ResidentialService />
      </Grid.Col>
      <Grid.Col
        sm={12}
        md={6}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "4rem 0",
        }}
      >
        <CommercialService />
      </Grid.Col>
      <Grid.Col
        sm={12}
        md={6}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "4rem 0",
        }}
      >
        {" "}
        <IndustrialServices />
      </Grid.Col>
      <Grid.Col
        sm={12}
        md={6}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "4rem 0",
        }}
      >
        {" "}
        <SolarPanelService />
      </Grid.Col>
      <Grid.Col
        sm={12}
        md={6}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "4rem 0",
        }}
      >
        {" "}
        <ServicesTemplate />
      </Grid.Col>
      <Grid.Col
        sm={12}
        md={6}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "4rem 0",
        }}
      >
        {" "}
        <ServicesTemplate />
      </Grid.Col>
    </Grid>
  );
};
