import React from "react";
import { Container, Title, Text, Grid, Stack, SimpleGrid } from "@mantine/core";
import { homeStyles } from "../../styles/HomeStyles";
import { StaticImage } from "gatsby-plugin-image";

const AboutUsCont = () => {
  const { classes } = homeStyles();

  return (
    <Container fluid className={classes.aboutCont}>
      <Title className={classes.aboutTitle} order={2}>
        Our story
      </Title>
      <Text className={classes.aboutText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Text>
      <Grid>
        {/* Heights needs to match until breakpoint */}
        <Grid.Col sm={12} lg={6}>
          <Title order={3}>Placeholder</Title>
          <Title order={4}>Dummy subtitle</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </Grid.Col>
        <Grid.Col sm={12} lg={6}>
          <StaticImage
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </Grid.Col>
        <Grid.Col sm={12} lg={6}>
          <StaticImage
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </Grid.Col>
        <Grid.Col sm={12} lg={6}>
          <Title order={3}>Placeholder</Title>
          <Title order={4}>Dummy subtitle</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </Grid.Col>
        <Grid.Col sm={12} lg={6}>
          <Title order={3}>Placeholder</Title>
          <Title order={4}>Dummy subtitle</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
        </Grid.Col>
        <Grid.Col sm={12} lg={6}>
          <StaticImage
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </Grid.Col>
      </Grid>
      {/* 
        
        image float left - paragraph
        paragraph - image float right
        repeat process as many times as neccessary

        resources/services title order={3}
        */}
    </Container>
  );
};

export default AboutUsCont;
