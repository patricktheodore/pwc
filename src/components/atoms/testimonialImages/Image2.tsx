import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type ImageProps = {
  altText: string;
};

const Image2 = (props: ImageProps) => {
  return (
    <StaticImage
      alt={props.altText}
      placeholder="blurred"
      layout="fixed"
      height={100}
      width={100}
      src="../../images/icon.png"
    />
  );
};

export default Image2;
