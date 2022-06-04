import React from "react";
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Anchor,
} from "@mantine/core";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colors.gray[8],
  },

  logo: {
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      marginBottom: "1rem",
    },
  },

  description: {
    marginTop: 5,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
    color: theme.colors.brand[6],

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color: theme.colors.dark[0],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",

    "&:hover": {
      color: theme.colors.brand[5],
      textDecoration: "none",
    },

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      margin: "1rem 0",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
    marginBottom: theme.spacing.xs / 2,
    color: theme.white,

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },

  afterFooter: {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colors.gray[2]}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  companyInfo: {
    margin: "1rem 0",
  },

  logoCont: {
    transition: "transform .2s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  socialAction: {
    margin: "1rem 3rem",
    borderRadius: "50%",
    color: theme.colors.gray[2],

    "&:hover": {
      color: theme.colors.brand[6],
      backgroundColor: theme.colors.gray[8],
    },
  },

  social: {
    margin: "2rem 0",

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  links: { label: string; to: string }[];
}

export function FooterResponsive({ links }: FooterLinksProps) {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Anchor
      component={Link}
      key={link.label}
      to={link.to}
      className={classes.link}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Link className={classes.logoCont} to="/">
            <StaticImage
              placeholder="tracedSVG"
              alt="Purified Window Cleaning Logo"
              src="../../images/LogoBasic.png"
              layout="fixed"
              height={80}
            />
          </Link>
          <Text size="sm" color="dimmed" className={classes.description}>
            Reliable Efficient Sustainable
          </Text>
        </div>
        <div className={classes.wrapper}>
          <Text className={classes.title}>{items}</Text>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm" className={classes.companyInfo}>
          ABN 00000000000
        </Text>
        <Text color="dimmed" size="sm" className={classes.companyInfo}>
          info@purifiedwindowcleaning.com.au
        </Text>
        <Text color="dimmed" size="sm" className={classes.companyInfo}>
          Copyright © 2022 Purified Window Cleaning Solutions
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Anchor
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            size="lg"
            className={classes.socialAction}
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </Anchor>
          <Anchor
            // component={Anchor}
            href="https://www.instagram.com"
            target={"_blank"}
            aria-label="Instagram"
            size="lg"
            className={classes.socialAction}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Anchor>
        </Group>
      </Container>
    </footer>
  );
}
