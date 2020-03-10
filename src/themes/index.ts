import { theme } from "@chakra-ui/core";
import monokaiColors from './colors/monokai-like'
import customColors from './colors/custom'

// Let's say you want to add custom colors
const custom = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#6d2f9c",
    secondary: "#ffaf1d"
  },
};
const monokai = {
  ...theme,
  colors: {
    ...theme.colors,
    ...monokaiColors
  },
};

const custom2 = {
  ...theme,
  colors: {
    ...theme.colors,
    ...customColors
  },
};

console.log(theme)

export default {
  "extends": custom,
  "default": theme,
  "monokai": monokai,
  "custom2": custom2,

}