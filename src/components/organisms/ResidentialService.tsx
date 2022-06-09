import React from "react";
import { Card, Text, Title, Anchor, Button } from "@mantine/core";
import { servicesStyles } from "../../styles/ServiceStyles";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ResidentialService = () => {
  const { classes } = servicesStyles();

  return (
    <div className={classes.serviceCardCont}>
      <Card className={classes.serviceCard}>
        <Card.Section>
          <StaticImage
            placeholder="tracedSVG"
            alt="House Icon"
            src="../../images/HouseIcon.png"
            layout="fixed"
            height={100}
          />
        </Card.Section>
        <Title order={3} className={classes.cardHeader}>
          Residential Window Cleaning
        </Title>
        <Text size="sm" className={classes.cardText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Anchor component={Link} to="/Contact">
          <Button className={classes.cardButton}>
            Learn More
            <FontAwesomeIcon
              icon={faChevronRight}
              className={classes.cardButtonIcon}
            />
          </Button>
        </Anchor>
      </Card>
    </div>
  );
};

export default ResidentialService;
