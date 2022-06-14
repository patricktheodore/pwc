import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Stack,
  Title,
  Grid,
  Paper,
  createStyles,
  Avatar,
  Text,
  Group,
} from "@mantine/core";
import React from "react";
import { homeStyles } from "../../styles/HomeStyles";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
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
    avatar: string;
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
    <div className={classes.testimonialCarouselCard}>
      <div className={classes.testimonialCarouselFlex}>
        <Avatar
          src={props.item.avatar}
          size={94}
          radius="md"
          className={classes.testimonialCarouselAvatar}
        />
        <div>
          <Text
            size="xs"
            sx={{ textTransform: "uppercase" }}
            weight={700}
            color="dimmed"
            className={classes.testimonialCarouselTextTransform}
          >
            {props.item.title}
          </Text>

          <Text
            size="lg"
            weight={500}
            className={classes.testimonialCarouselTextTransform}
          >
            {props.item.name}
          </Text>

          <Text
            size="xs"
            color="dimmed"
            className={classes.testimonialCarouselTextTransform}
          >
            {props.item.company}
          </Text>
        </div>
      </div>
      <Group>
        <Text size="md" className={classes.testimonialCarouselText}>
          {props.item.text}
        </Text>
      </Group>
    </div>
  );
};

export default TestimonialCard;
