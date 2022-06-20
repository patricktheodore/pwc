import React from "react";
import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.colors.gray[8],
    // padding: theme.spacing.xl * 1.5,
    padding: "4rem",
    borderRadius: theme.radius.md,
    margin: "4rem",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      margin: "2rem",
    },
  },

  title: {
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.md,
  },

  count: {
    color: theme.colors.brand[5],
    fontSize: "3rem",
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: "Montserrat, sans-serif",

    [theme.fn.smallerThan("md")]: {
      fontSize: "2rem",
    },
  },

  description: {
    color: theme.colors.gray[2],
    fontSize: theme.fontSizes.sm,
    marginTop: 5,
  },

  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors.gray[2]}`,

      [theme.fn.smallerThan("md")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors.gray[2]}`,
      },
    },
  },
}));

interface StatsGroupProps {
  data: { title: string; stats: string; description: string }[];
}

export function ClientStats({ data }: StatsGroupProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}
