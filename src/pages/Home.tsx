import React from "react";
import { Button, Title, MantineProvider } from "@mantine/core";
import { myTheme } from "../styles/theme";

const Home = () => {
  return (
    <MantineProvider theme={myTheme}>
      <Title order={2}>PWC by patricktheodore</Title>
      <p>Tetsing 124</p>
      <Button>Go there</Button>
    </MantineProvider>
  );
};

export default Home;
