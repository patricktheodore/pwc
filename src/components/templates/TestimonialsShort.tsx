import React from "react";
import { Container, Group, Title, Text, Grid } from "@mantine/core";
import { homeStyles } from "../../styles/HomeStyles";
import TestimonialCard from "../organisms/TestimonialCard";
import { TestimonalData } from "../atoms/TestimonialData";

const TestimonialsShort: React.FC = () => {
  const { classes } = homeStyles();
  return (
    <Container fluid className={classes.homeFluidCont}>
      <Group className={classes.titleGroup}>
        <Title
          order={2}
          className={`${classes.homeTitle} ${classes.goodCompanyTitle}`}
        >
          Let our client's speak for us!
        </Title>
        {/* <Divider my="lg" size="md" className={classes.homeDivider} /> */}
        <Title order={3} className={`${classes.homeSubtitle}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
        </Title>
      </Group>
      <Grid>
        {TestimonalData.map((x) => {
          return <TestimonialCard item={x} key={x.id} />;
        })}
      </Grid>
    </Container>
  );
};

export default TestimonialsShort;
