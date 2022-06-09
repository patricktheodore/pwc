import React from "react";
import { Grid, Title, Text, Group } from "@mantine/core";
import { homeStyles } from "../../styles/HomeStyles";
import FlexibleIcon from "../atoms/FlexibleIcon";
import TrainingIcon from "../atoms/TrainingIcon";
import ReliableIcon from "../atoms/ReliableIcon";
import SustainableIcon from "../atoms/SustainableIcon";
import EfficientIcon from "../atoms/EfficientIcon";
import CustomiseIcon from "../atoms/CustomisableIcon";

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

const WhyUsCardTemplate = (props: any) => {
  const { classes } = homeStyles();

  return (
    <Grid.Col sm={12} md={6} lg={4} className={classes.whyUsGridCol}>
      <Group position="center" className={classes.whyUsGridColGroup}>
        {renderIcon(props.item.icon)}
        <Title order={4} className={classes.whyUsGridColTitle}>
          {props.item.title}
        </Title>
      </Group>
      {/* decsription underneath, text center */}
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
