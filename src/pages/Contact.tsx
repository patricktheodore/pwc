import React from "react";
import {
  MantineProvider,
  Grid,
  Title,
  Text,
  createStyles,
} from "@mantine/core";
import { myTheme } from "../styles/theme";
import { HeaderResponsive } from "../components/templates/HeaderResponsive";
import { FooterResponsive } from "../components/templates/FooterResponsive";
import { footerLinks } from "../components/atoms/footerLinks";
import { navigationLinks } from "../components/atoms/navigationLinks";
import { ContactForm } from "../components/templates/ContactForm";
import EasyContactSheet from "../components/templates/EasyContactSheet";
import { ContactHero } from "../components/templates/ContactHero";

const useStyles = createStyles((theme) => {
  return {
    title: {
      fontWeight: 200,
      fontSize: "3rem",
      textAlign: "center",
      marginTop: "8rem",

      [theme.fn.smallerThan("xl")]: {
        fontSize: "2.5rem",
      },

      [theme.fn.smallerThan("md")]: {
        fontSize: "2.rem",
      },
    },

    text: {
      textAlign: "center",
      color: theme.colors.gray[7],
      fontSize: "1rem",
      margin: "1rem 0 6rem 0",
    },
  };
});

const Contact = () => {
  const { classes } = useStyles();

  return (
    <MantineProvider theme={myTheme}>
      <HeaderResponsive links={navigationLinks} activeLink="Contact" />
      <ContactHero />
      <Title order={2} className={classes.title}>
        Contact us via phone/email, or send us an enquiry
      </Title>
      <Text className={classes.text}>
        Services that we provide ... Lorem Ipsum is simply dummy text of the
        printing and typesetting industry.
      </Text>
      <Grid
        align="flex-start"
        justify="center"
        sx={{ width: "100%", margin: "0 0 4rem 0" }}
      >
        <Grid.Col sm={12} md={6} lg={5}>
          <EasyContactSheet />
        </Grid.Col>
        <Grid.Col sm={12} md={6} lg={5}>
          <ContactForm />
        </Grid.Col>
      </Grid>
      <FooterResponsive links={footerLinks} />
    </MantineProvider>
  );
};

export default Contact;

// page breaks on mobile fix padding/margins
