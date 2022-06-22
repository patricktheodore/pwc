import React from "react";
import { Text, Container, Group, Anchor, SimpleGrid } from "@mantine/core";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerStyles } from "../../styles/Footer";

interface FooterLinksProps {
  links: { label: string; to: string }[];
}

export function FooterResponsive({ links }: FooterLinksProps) {
  const { classes } = footerStyles();

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
          <SimpleGrid
            cols={2}
            spacing={5}
            breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 0 }]}
            className={classes.footerSimpleGrid}
          >
            {items}
          </SimpleGrid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text size="sm" className={classes.companyInfo}>
          ABN 00000000000
        </Text>
        <Text size="sm" className={classes.companyInfo}>
          info@purifiedwindowcleaning.com.au
        </Text>
        <Text size="sm" className={classes.companyInfo}>
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
