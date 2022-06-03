import React, { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Global,
  Anchor,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const HEADER_HEIGHT = 100;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    borderTopWidth: 0,
    overflow: "hidden",
    padding: "1rem 0 1rem 1rem",

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  logoCont: {
    transition: "transform .2s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 30px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.dark[5],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",

    "&:hover": {
      color: theme.colors.brand[5],
      transform: "translateY(-2px)",
      transition: "all 300ms",
      textDecoration: "none",
    },

    [theme.fn.smallerThan("md")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.colors.brand[5],
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
  activeLink: string;
}

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

export function HeaderResponsive({ links, activeLink }: HeaderResponsiveProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(activeLink);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Anchor
      component={Link}
      key={link.label}
      to={`../${link.link}`}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        // event.preventDefault();
        setActive(link.link);
        toggleOpened(false);
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={0} px={"2rem"} className={classes.root}>
      <Global
        styles={[
          {
            body: {
              margin: 0,
            },
          },
        ]}
      />
      <Container className={classes.header}>
        {/* <MantineLogo /> */}
        <Link className={classes.logoCont} to="/">
          <StaticImage
            alt="Purified Window Cleaning Logo"
            src="../../images/Logo1.png"
            layout="fixed"
            height={60}
          />
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="md"
        />

        <Transition
          transition={scaleY}
          timingFunction="ease"
          duration={200}
          mounted={opened}
        >
          {(styles) => (
            <Paper className={classes.dropdown} style={styles} shadow="md">
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
