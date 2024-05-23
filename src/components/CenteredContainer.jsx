import { Box } from "@chakra-ui/react";

const CenteredContainer = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      padding="4"
      overflow="auto"
    >
      {children}
    </Box>
  );
};

export default CenteredContainer;