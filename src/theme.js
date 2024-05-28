import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "teal.700" : "#1f2e30", // Background color
        color: props.colorMode === "light" ? "#000000" : "#FFFFFF", // Text color
      },
    }),
  },
  colors: {
    light: {
      background: "#3d5b5f",
      text: "#000000",
    },
    dark: {
      background: "#1f2e30",
      text: "#FFFFFF",
    },
  },
  fonts: {
    body: "Merriweather, serif",
    heading: "Merriweather, serif",
  },
});

export default theme;
