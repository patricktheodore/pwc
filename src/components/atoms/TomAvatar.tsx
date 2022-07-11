import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { homeStyles } from "../../styles/HomeStyles";

const TomAvatar = () => {
  const { classes } = homeStyles();
  return (
    <StaticImage
      alt=""
      src="../../images/WIND1.jpg"
      className={classes.aboutImage}
    />
  );
};

export default TomAvatar;
