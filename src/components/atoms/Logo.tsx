import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    <StaticImage
      alt="Purified Window Cleaning Logo"
      src="../../images/Logo1.png"
      style={{ height: "100%", marginTop: 20 }}
    />
  );
};

export default Logo;
