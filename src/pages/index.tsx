import React from "react";
import { Toaster } from "react-hot-toast";
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
      <Toaster />
    </>
  );
};

export default index;
