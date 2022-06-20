import React from "react";
import { Container, Group, Title, Anchor, Button } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { homeStyles } from "../../styles/HomeStyles";
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
      <Anchor component={Link} to="/Contact" mt="2rem">
        <Button size="sm" radius="xl" className={classes.cardButton}>
          Get a Quote
          <FontAwesomeIcon
            icon={faChevronRight}
            className={classes.cardButtonIcon}
          />
        </Button>
      </Anchor>
    </Container>
  );
};

export default TestimonialsShort;
