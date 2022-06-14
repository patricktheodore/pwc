import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { homeStyles } from "../../../styles/HomeStyles";

type ImageProps = {
  altText: string;
};

const Image1 = (props: ImageProps) => {
  const { classes } = homeStyles();
  return (
    <StaticImage
      className={classes.testimonialImage}
      alt={props.altText}
      placeholder="blurred"
      layout="fixed"
      height={100}
      width={100}
      src="../../../images/Testimonial1.jpg"
    />
  );
};

export default Image1;
