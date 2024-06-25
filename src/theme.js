import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/montserrat';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "teal.700" : "teal.900",
        color: props.colorMode === "light" ? "#000000" : "#FFFFFF",
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
    body: `'Monserrat Variable', sans-serif`,
    heading: `'Monserrat Variable', sans-serif`,
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: "80px",
          fontSize: "xl",
          px: "80px",
        },
      },
    },
  },
});

export default theme;