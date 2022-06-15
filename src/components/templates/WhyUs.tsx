import React from "react";
import { Title, Anchor, Button, Group, Container, Grid } from "@mantine/core";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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

      <Anchor component={Link} to="/Contact" mt="2rem">
        <Button size="lg" radius="xl" className={classes.cardButton}>
          Get in Touch
          <FontAwesomeIcon
            icon={faChevronRight}
            className={classes.cardButtonIcon}
          />
        </Button>
      </Anchor>
    </Container>
  );
};

export default WhyUs;
