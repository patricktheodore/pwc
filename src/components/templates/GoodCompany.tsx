import React from "react";
import { Container, Grid, Group, Title } from "@mantine/core";
import { homeStyles } from "../../styles/HomeStyles";
import { GoodCompanyData } from "../atoms/GoodCompanyData";
import GoodCompanyTemplate from "../organisms/GoodCompanyTemplate";

const GoodCompany: React.FC = () => {
  const { classes } = homeStyles();
  return (
    <Container
      fluid
      className={`${classes.homeFluidCont} ${classes.goodCompanyCont}`}
    >
      <Group className={classes.titleGroup}>
        <Title
          order={2}
          className={`${classes.homeTitle} ${classes.goodCompanyTitle}`}
        >
          You're in good company
        </Title>
        {/* <Divider my="lg" size="md" className={classes.homeDivider} /> */}
        <Title order={3} className={`${classes.homeSubtitle}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
        </Title>
      </Group>
      <Grid className={`${classes.homeGrid} ${classes.companyGrid}`}>
        {GoodCompanyData.map((company) => {
          return <GoodCompanyTemplate company={company} key={company.title} />;
        })}
      </Grid>
    </Container>
  );
};

export default GoodCompany;
