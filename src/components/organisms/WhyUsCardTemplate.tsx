import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Title, Text, Group } from "@mantine/core";
import React from "react";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { homeStyles } from "../../styles/HomeStyles";

const WhyUsCardTemplate = () => {
  const { classes } = homeStyles();
  return (
    <Grid.Col sm={12} md={6} lg={4} className={classes.whyUsGridCol}>
      {/* horizontal Group space between icon-title */}
      <Group position="center" className={classes.whyUsGridColGroup}>
        <FontAwesomeIcon
          icon={faCalendarDays}
          className={classes.whyUsGridColIcon}
        />
        <Title order={4} className={classes.whyUsGridColTitle}>
          Lorem Ipsum simply
        </Title>
      </Group>
      {/* decsription underneath, text center */}
      <Text className={classes.whyUsGridColDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </Grid.Col>
  );
};

export default WhyUsCardTemplate;

// icon
// title
// description
