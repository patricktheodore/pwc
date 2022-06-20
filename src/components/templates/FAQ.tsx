import React from "react";
import { Container, Title, Accordion, createStyles } from "@mantine/core";
import { Link } from "gatsby";

const useStyles = createStyles((theme, _params, getRef) => {
  const control = getRef("control");

  return {
    faqCont: {
      padding: "6rem 1rem",
    },

    title: {
      width: "100%",
      fontWeight: 200,
      fontSize: "3rem",
      textAlign: "center",
      marginBottom: "4rem",

      [theme.fn.smallerThan("sm")]: {
        fontSize: "2rem",
      },
    },

    control: {
      ref: control,

      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${theme.colors.gray[8]}`,
    },

    itemOpened: {
      [`& .${control}`]: {
        color:
          theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 4 : 6
          ],
      },
    },

    moreInfo: {
      textAlign: "center",
      fontSize: "0.9rem",
      marginTop: "2rem",
    },
  };
});

const placeholder =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.faqCont}>
      <Title className={classes.title} order={2}>
        Find answers to the questions we get asked the most.
      </Title>

      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        <Accordion.Item label="How can I reset my password?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="Can I create more that one account?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="Do you store credit card information securely?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="What payment systems to you work with?">
          {placeholder}
        </Accordion.Item>
        <Accordion.Item label="How can I subscribe to monthly newsletter?">
          {placeholder}
        </Accordion.Item>
      </Accordion>

      <Title order={3} className={classes.moreInfo}>
        <Link to="/Contact">Can't find what you're looking for?</Link>
      </Title>
    </Container>
  );
}
