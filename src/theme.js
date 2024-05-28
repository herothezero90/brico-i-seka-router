import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    light: {
      background: "#275E61",
      text: "#000000",
    },
    dark: {
      background: "#1A202C",
      text: "#FFFFFF",
    },
    fonts: {
      body: "Merriweather, serif", 
      heading: "Merriweather, serif", 
    }
  },
});

export default theme;
