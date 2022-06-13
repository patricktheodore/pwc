import { Avatar, Stack, Title, Text, Grid } from "@mantine/core";
import React from "react";
import { homeStyles } from "../../styles/HomeStyles";
import Image1 from "../atoms/testimonialImages/Image1";
import Image2 from "../atoms/testimonialImages/Image2";
import Image3 from "../atoms/testimonialImages/Image3";

type TemplateProps = {
  item: {
    name: string;
    id: number;
    title: string;
    company?: string;
    text: string;
  };
};

const getImage = (id: number, name: string) => {
  if (id === 1) {
    return <Image1 altText={name} />;
  } else if (id === 2) {
    return <Image2 altText={name} />;
  } else {
    return <Image3 altText={name} />;
  }
};

const TestimonialCard = (props: TemplateProps) => {
  const { classes } = homeStyles();

  return (
    <Grid.Col sm={12} md={6} lg={4} className={classes.gridCol}>
      <Stack align="center">
        {getImage(props.item.id, props.item.name)}
        <Title order={3}>{props.item.name}</Title>
        <Title order={4}>
          {props.item.company
            ? `${props.item.title} - ${props.item.company}`
            : props.item.title}
        </Title>
        <Text align="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Stack>
    </Grid.Col>
  );
};

export default TestimonialCard;
