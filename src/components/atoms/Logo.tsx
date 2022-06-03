import React from "react";
import { Image } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    // <div style={{ height: 50, padding: "1rem" }}>
    //   <Image
    //     src="../../images/Logo1.png"
    //     alt="PWC Logo"
    //     style={{ height: "50px" }}
    //   />
    // </div>

    <StaticImage
      alt="Purified Window Cleaning Logo"
      src="../../images/Logo1.png"
      style={{ height: "100%", marginTop: 20 }}
    />
  );
};

export default Logo;
