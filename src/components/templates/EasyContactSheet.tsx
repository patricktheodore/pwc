import React from "react";
import { Box, Title } from "@mantine/core";
import { contactStyles } from "../../styles/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const EasyContactSheet = () => {
  const { classes } = contactStyles();

  return (
    <>
      {/* Get in TOUCH phone email location's serviced */}
      <Box mx="auto">
        <Title order={2} className={classes.formTitle}>
          Get in touch.
        </Title>

        {/* GROUP ICON - TITLE
        - DETAILS */}

        <Title order={3}>
          <FontAwesomeIcon className={classes.faIcon} icon={faPhone} />
          <span>Phone</span>
        </Title>
      </Box>
    </>
  );
};

export default EasyContactSheet;
