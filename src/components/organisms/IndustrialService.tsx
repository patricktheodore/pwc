import React from "react";
import { Card, Text, Title, Anchor, Button } from "@mantine/core";
import { Link } from "gatsby";
import { servicesStyles } from "../../styles/ServiceStyles";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const IndustrialService = () => {
  const { classes } = servicesStyles();

  return (
    <div className={classes.serviceCardCont}>
      <Card className={classes.serviceCard}>
        <Card.Section>
          {/* <StaticImage
            placeholder="tracedSVG"
            alt="House Icon"
            src="../../images/IndustryIcon.png"
            layout="fixed"
            height={100}
          /> */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z"
              fill="#FFA500"
            />
            <path
              d="M101 107.5H19V12H69V36H76V29.5H86.5L87 37H93.5V44H101V107.5Z"
              fill="white"
            />
            <path
              d="M108.214 107.429H102.857V44.9286C102.857 43.9429 102.057 43.1429 101.071 43.1429H95.7143V37.7857C95.7143 36.8 94.9143 36 93.9286 36H88.5714V30.6429C88.5714 29.6571 87.7714 28.8571 86.7857 28.8571H83.2143V23.5C83.2143 22.5143 82.4143 21.7143 81.4286 21.7143C80.4429 21.7143 79.6429 22.5143 79.6429 23.5V28.8571H76.0714C75.0857 28.8571 74.2857 29.6571 74.2857 30.6429V36H70.7143V12.7857C70.7143 11.8 69.9143 11 68.9286 11H18.9286C17.9429 11 17.1429 11.8 17.1429 12.7857V107.429H11.7857C10.8 107.429 10 108.229 10 109.214C10 110.2 10.8 111 11.7857 111H108.214C109.2 111 110 110.2 110 109.214C110 108.229 109.2 107.429 108.214 107.429ZM77.8571 32.4286H85V36H77.8571V32.4286ZM92.1429 39.5714V43.1429H70.7143V39.5714H92.1429ZM20.7143 14.5714H67.1429V43.1429H29.6429C28.6571 43.1429 27.8571 43.9429 27.8571 44.9286C27.8571 45.9143 28.6571 46.7143 29.6429 46.7143H60V53.8571H29.6429C28.6571 53.8571 27.8571 54.6571 27.8571 55.6429C27.8571 56.6286 28.6571 57.4286 29.6429 57.4286H60V64.5714H29.6429C28.6571 64.5714 27.8571 65.3714 27.8571 66.3571C27.8571 67.3429 28.6571 68.1429 29.6429 68.1429H60V75.2857H29.6429C28.6571 75.2857 27.8571 76.0857 27.8571 77.0714C27.8571 78.0571 28.6571 78.8571 29.6429 78.8571H60V86H29.6429C28.6571 86 27.8571 86.8 27.8571 87.7857C27.8571 88.7714 28.6571 89.5714 29.6429 89.5714H60V96.7143H29.6429C28.6571 96.7143 27.8571 97.5143 27.8571 98.5C27.8571 99.4857 28.6571 100.286 29.6429 100.286H60V107.429H20.7143V14.5714ZM63.5714 107.429V46.7143H99.2857V107.429H63.5714Z"
              fill="#010101"
            />
            <path
              d="M29.6429 36H61.7857C62.7714 36 63.5714 35.2 63.5714 34.2143C63.5714 33.2286 62.7714 32.4286 61.7857 32.4286H29.6429C28.6571 32.4286 27.8571 33.2286 27.8571 34.2143C27.8571 35.2 28.6571 36 29.6429 36ZM90.3571 53.8571H72.5C71.5143 53.8571 70.7143 54.6571 70.7143 55.6429C70.7143 56.6286 71.5143 57.4286 72.5 57.4286H90.3571C91.3429 57.4286 92.1429 56.6286 92.1429 55.6429C92.1429 54.6571 91.3429 53.8571 90.3571 53.8571ZM90.3571 68.1429H72.5C71.5143 68.1429 70.7143 68.9429 70.7143 69.9286C70.7143 70.9143 71.5143 71.7143 72.5 71.7143H90.3571C91.3429 71.7143 92.1429 70.9143 92.1429 69.9286C92.1429 68.9429 91.3429 68.1429 90.3571 68.1429ZM90.3571 82.4286H72.5C71.5143 82.4286 70.7143 83.2286 70.7143 84.2143C70.7143 85.2 71.5143 86 72.5 86H90.3571C91.3429 86 92.1429 85.2 92.1429 84.2143C92.1429 83.2286 91.3429 82.4286 90.3571 82.4286ZM90.3571 96.7143H72.5C71.5143 96.7143 70.7143 97.5143 70.7143 98.5C70.7143 99.4857 71.5143 100.286 72.5 100.286H90.3571C91.3429 100.286 92.1429 99.4857 92.1429 98.5C92.1429 97.5143 91.3429 96.7143 90.3571 96.7143ZM29.6429 25.2857H61.7857C62.7714 25.2857 63.5714 24.4857 63.5714 23.5C63.5714 22.5143 62.7714 21.7143 61.7857 21.7143H29.6429C28.6571 21.7143 27.8571 22.5143 27.8571 23.5C27.8571 24.4857 28.6571 25.2857 29.6429 25.2857Z"
              fill="#010101"
            />
          </svg>
        </Card.Section>
        <Title order={3} className={classes.cardHeader}>
          Industry Window Cleaning
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

export default IndustrialService;
