import React from "react";
import { Global } from "@mantine/core";
import Home from "./Home";

const index = () => {
  return (
    <>
      <Global
        styles={[
          {
            body: {
              margin: 0,
            },
          },
        ]}
      />
      <Home />
    </>
  );
};

export default index;
