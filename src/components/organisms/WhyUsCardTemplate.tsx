import React from "react";
import { Grid, Title, Text, Group } from "@mantine/core";
import { homeStyles } from "../../styles/HomeStyles";
import FlexibleIcon from "../atoms/whyUsIcons/FlexibleIcon";
import TrainingIcon from "../atoms/whyUsIcons/TrainingIcon";
import ReliableIcon from "../atoms/whyUsIcons/ReliableIcon";
import SustainableIcon from "../atoms/whyUsIcons/SustainableIcon";
import EfficientIcon from "../atoms/whyUsIcons/EfficientIcon";
import CustomiseIcon from "../atoms/whyUsIcons/CustomisableIcon";

const renderIcon = (icon: string) => {
  if (icon === "flexible") {
    return <FlexibleIcon />;
  } else if (icon === "trained") {
    return <TrainingIcon />;
  } else if (icon === "reliable") {
    return <ReliableIcon />;
  } else if (icon === "sustainable") {
    return <SustainableIcon />;
  } else if (icon === "efficient") {
    return <EfficientIcon />;
  } else if (icon === "customise") {
    return <CustomiseIcon />;
  } else {
    return <FlexibleIcon />;
  }
};

type TemplateProps = {
  item: {
    icon: string;
    title: string;
    description: string;
  };
};

const WhyUsCardTemplate = (props: TemplateProps) => {
  const { classes } = homeStyles();

  return (
    <Grid.Col sm={12} md={6} lg={4} className={classes.gridCol}>
      <Group position="center" className={classes.whyUsGridColGroup}>
        {renderIcon(props.item.icon)}
        <Title order={4} className={classes.whyUsGridColTitle}>
          {props.item.title}
        </Title>
      </Group>
      <Text className={classes.whyUsGridColDescription}>
        {props.item.description}
      </Text>
    </Grid.Col>
  );
};

export default WhyUsCardTemplate;

// icon
// title
// description
