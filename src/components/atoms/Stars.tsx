import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group } from "@mantine/core";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { homeStyles } from "../../styles/HomeStyles";

const Stars = () => {
  const { classes } = homeStyles();
  return (
    <Group className={classes.starRating}>
      <FontAwesomeIcon icon={faStar} className={classes.starRating} />
      <FontAwesomeIcon icon={faStar} className={classes.starRating} />
      <FontAwesomeIcon icon={faStar} className={classes.starRating} />
      <FontAwesomeIcon icon={faStar} className={classes.starRating} />
      <FontAwesomeIcon icon={faStar} className={classes.starRating} />
    </Group>
  );
};

export default Stars;
