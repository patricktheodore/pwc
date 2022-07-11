import React from "react";
import { Container, Grid, Text, Title, Anchor, Button } from "@mantine/core";
import { Link } from "gatsby";
import { homeStyles } from "../../styles/HomeStyles";
import TomAvatar from "../atoms/TomAvatar";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutCont = () => {
  const { classes } = homeStyles();

  return (
    <Container fluid className={classes.aboutCont}>
      {/* <Title order={2} className={classes.servicesTitle}>
        Our Story
      </Title> */}
      <Grid
        align="flex-start"
        justify="center"
        sx={{ width: "100%", margin: "0 0 4rem 0" }}
      >
        <Grid.Col sm={10} className={classes.aboutDescCont}>
          {/* desc */}
          <Title order={3} className={classes.aboutTitle}>
            Our Story
          </Title>
          <Text className={classes.aboutText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </Grid.Col>
        <Grid.Col
          sm={10}
          sx={{
            textAlign: "center",
            margin: "4rem 0",
          }}
        >
          <TomAvatar />
        </Grid.Col>
        <Grid.Col sm={10}>
          <Text className={classes.aboutText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </Grid.Col>
        <Grid.Col sm={12} sx={{ textAlign: "center", marginTop: "4rem" }}>
          <Anchor component={Link} to="/Contact">
            <Button size="sm" radius="xl" className={classes.cardButton}>
              Get in Touch
              <FontAwesomeIcon
                icon={faChevronRight}
                className={classes.cardButtonIcon}
              />
            </Button>
          </Anchor>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AboutCont;
