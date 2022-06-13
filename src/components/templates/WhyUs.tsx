import React from "react";
import { Title, Divider, Group, Container, Grid } from "@mantine/core";
import { homeStyles } from "../../styles/HomeStyles";
import WhyUsCardTemplate from "../organisms/WhyUsCardTemplate";
import { WhyUsData } from "../atoms/WhyUsData";

const WhyUs = () => {
  const { classes } = homeStyles();
  return (
    <Container
      fluid
      className={`${classes.homeFluidCont} ${classes.whyUsCont}`}
    >
      <Group className={classes.titleGroup}>
        <Title
          order={2}
          className={`${classes.homeTitle} ${classes.whyUsTitle}`}
        >
          Why choose us?
        </Title>
        {/* <Divider my="lg" size="md" className={classes.homeDivider} /> */}
        <Title
          order={3}
          className={`${classes.homeSubtitle} ${classes.whyUsSubtitle}`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Title>
      </Group>
      <Grid className={classes.homeGrid}>
        {WhyUsData.map((item) => {
          return <WhyUsCardTemplate item={item} key={item.title} />;
        })}
      </Grid>
    </Container>
  );
};

export default WhyUs;
