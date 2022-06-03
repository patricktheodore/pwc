import { Tuple, MantineThemeOverride } from "@mantine/core";

type CustomColors = "brandOrange" | "secondaryColorName";

declare module "@mantine/core" {
  export interface MantineThemeColorsOveride {
    colors: Record<CustomColors, Tuple<string, 10>>;
  }
}

export const myTheme: MantineThemeOverride = {
  colors: {
    brand: [
      "#FFF6E5",
      "#FFE6B8",
      "#FFD68A",
      "#FFC55C",
      "#FFB52E",
      "#FFA500",
      "#CC8400",
      "#996300",
      "#664200",
      "#332100",
    ],
  },
  primaryColor: "brand",
  primaryShade: 5,
  fontFamily: "Hind Madurai, sans-serif",
  headings: { fontFamily: "Montserrat, sans-serif" },
};
