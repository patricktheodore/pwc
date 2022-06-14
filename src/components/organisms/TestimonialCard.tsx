import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Stack, Title, Text, Grid, Group, Paper } from "@mantine/core";
import React from "react";
import { homeStyles } from "../../styles/HomeStyles";
import Stars from "../atoms/stars";
import Image1 from "../atoms/testimonialImages/Image1";
import Image2 from "../atoms/testimonialImages/Image2";
import Image3 from "../atoms/testimonialImages/Image3";

type TemplateProps = {
  item: {
    name: string;
    id: number;
    title: string;
    company?: string;
    customerInfo: string;
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

  // redo
  // Card contains
  // Quote at the top that changes color and size based on focus state
  // Little link icon that changes visibility based on focus state
  // Image with circle radius that has border that changes based on focus
  // Name under image, opacity changes based on focus
  // Title underneath

  // return (
  //   <Grid.Col sm={12} md={6} lg={4} className={classes.gridCol}>
  //     <Paper
  //       withBorder
  //       shadow="sm"
  //       radius="md"
  //       className={classes.testimonialPaper}
  //     >
  //       <Text className={classes.testimonialText}>{props.item.text}</Text>
  //     </Paper>
  //     {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
  //     {getImage(props.item.id, props.item.name)}
  //     <Title order={3} className={classes.testimonialName}>
  //       {props.item.name}
  //     </Title>
  //     <Title order={4} className={classes.testimonialSubtitle}>
  //       {props.item.company
  //         ? `${props.item.title} - ${props.item.company}`
  //         : `${props.item.customerInfo} Customer`}
  //     </Title>
  //   </Grid.Col>
  // );

  return (
    <Grid.Col sm={12} md={6} lg={4} className={classes.gridCol}>
      <Stack align={"center"} className={classes.testimonialStack}>
        {getImage(props.item.id, props.item.name)}
        <Title order={3} className={classes.testimonialName}>
          {props.item.name}
        </Title>
        <Stars />
        {/* <Title order={4} className={classes.testimonialSubtitle}>
          {props.item.company
            ? `${props.item.title} - ${props.item.company}`
            : `${props.item.customerInfo} Customer`}
        </Title> */}
        <Text align="center" size="sm">
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
