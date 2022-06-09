import React from "react";
import { Box, Group, Stack, Title, Text, Space } from "@mantine/core";
import { contactStyles } from "../../styles/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const EasyContactSheet = () => {
  const { classes } = contactStyles();

  return (
    <>
      {/* Get in TOUCH phone email location's serviced */}
      <Box className={classes.formCont}>
        <Title order={2} className={classes.formTitle}>
          Get in touch
        </Title>
        <Stack className={classes.infoStack} spacing="xl">
          <Group className={classes.easyContactGroup} spacing="xs">
            <Title className={classes.easyContactHeader} order={3}>
              <FontAwesomeIcon className={classes.faIcon} icon={faPhone} />
              Phone
            </Title>
            <Text className={classes.easyConactDescription} size="md">
              0469 420 420
            </Text>
          </Group>
          <Group spacing="xs" className={classes.easyContactGroup}>
            <Title className={classes.easyContactHeader} order={3}>
              <FontAwesomeIcon className={classes.faIcon} icon={faEnvelope} />
              E-Mail
            </Title>
            <Text className={classes.easyConactDescription} size="md">
              info@purifiedwindowcleaning.com.au
            </Text>
          </Group>
          <Group spacing="xs" className={classes.easyContactGroup}>
            <Title className={classes.easyContactHeader} order={3}>
              <FontAwesomeIcon
                className={classes.faIcon}
                icon={faLocationDot}
              />
              Location
            </Title>
            <Text className={classes.easyConactDescription} size="md">
              Hamilton Hill, 6163
            </Text>
          </Group>
          <Group spacing="xs" className={classes.easyContactGroup}>
            <Title className={classes.easyContactHeader} order={3}>
              <FontAwesomeIcon
                className={classes.faIcon}
                icon={faCalendarCheck}
              />
              Servicing Hours
            </Title>
            <Text className={classes.easyConactDescription} size="md">
              Monday - Sunday: 7:00am - 5:00pm <Space h="xs" /> Public Holidays:
              7:00am - 5:00pm
            </Text>
          </Group>
        </Stack>
      </Box>
    </>
  );
};

export default EasyContactSheet;
