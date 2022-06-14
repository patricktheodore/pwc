import React from "react";
import { Grid, Anchor } from "@mantine/core";
import renderLogos from "../atoms/renderLogos";
import { homeStyles } from "../../styles/HomeStyles";

type TemplateProps = {
  company: {
    title: string;
    link?: string | undefined;
  };
};

const GoodCompanyTemplate = (props: TemplateProps) => {
  const { classes } = homeStyles();
  return (
    <Grid.Col
      sm={12}
      md={4}
      lg={3}
      className={`${classes.gridCol} ${classes.companyGridCol}`}
    >
      {renderLogos(props.company.title)}
    </Grid.Col>
  );
};

export default GoodCompanyTemplate;
