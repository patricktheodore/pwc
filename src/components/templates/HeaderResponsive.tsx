import React, { useState } from "react";
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Global,
  Anchor,
  Button,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { headerStyles, HEADER_HEIGHT } from "../../styles/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faDollarSign } from "@fortawesome/free-solid-svg-icons";

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
  const { classes, cx } = headerStyles();

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
            placeholder="tracedSVG"
            alt="Purified Window Cleaning Logo"
            src="../../images/Logo1.png"
            layout="fixed"
            height={60}
          />
        </Link>
        <Group spacing={5} className={classes.links}>
          {/* <Anchor component={Link} to="/Contact">
            <Button className={classes.headerButton}>
              Get A Quote
              <FontAwesomeIcon className={classes.faIcon} icon={faDollarSign} />
            </Button>
          </Anchor>
          <Anchor href="tel:0400000000">
            <Button className={classes.headerButton}>
              Call Us
              <FontAwesomeIcon className={classes.faIcon} icon={faPhone} />
            </Button>
          </Anchor> */}
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
