import React from "react";
import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Spacer } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import ReserveButton from "./ReserveButton";

const Links = ["Home", "About", "Team", "Services", "Gallery"];

const NavLink = ({ to, children }) => (
  <RouterLink to={to}>
    <Box px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "yellow.500" }}>
      {children}
    </Box>
  </RouterLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgColor={"teal.700"} px={4} py={2}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <IconButton
            size={"md"}
            bgColor={"yellow.500"}
            boxShadow="dark-lg"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon color='teal.500' />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link} to={`/${link.toLowerCase()}`}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <ReserveButton />
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} to={`/${link.toLowerCase()}`}>{link}</NavLink>
            ))}
            <Box mt={4}>
              <ReserveButton />
            </Box>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
