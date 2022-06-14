import React from "react";
import { Container, Group, Title, Text, Grid } from "@mantine/core";
import { homeStyles } from "../../styles/HomeStyles";
import TestimonialCard from "../organisms/TestimonialCard";
import { TestimonalData } from "../atoms/TestimonialData";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialsShort: React.FC = () => {
  const { classes } = homeStyles();
  return (
    <Container fluid className={classes.homeFluidCont}>
      <Group className={classes.titleGroup}>
        <Title
          order={2}
          className={`${classes.homeTitle} ${classes.testimonialsTitle}`}
        >
          Testimonials
        </Title>
        <Title order={3} className={classes.testimonialSubtitle}>
          What our clients say about us
        </Title>
      </Group>
      <TestimonialCarousel />
    </Container>
  );
};

export default TestimonialsShort;
