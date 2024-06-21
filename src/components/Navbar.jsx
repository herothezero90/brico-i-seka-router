import React from "react";
import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Spacer } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import ReserveButton from "./ReserveButton";

const Links = [
  { name: "Pocetna", path: "home" },
  { name: "O nama", path: "about" },
  { name: "Tim", path: "team" },
  { name: "Usluge", path: "services" },
  { name: "Galerija", path: "gallery" }
];

const NavLink = ({ to, children, onClick }) => (
  <RouterLink to={to} onClick={onClick}>
    <Box px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.900" }}>
      {children}
    </Box>
  </RouterLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCloseMenu = () => {
    onClose();
  };

  return (
    <Box 
      bgColor={"teal.800"} 
      color="yellow.500" 
      fontFamily="Roper" 
      px={4} py={2} 
      position="sticky" 
      top={0}
      zIndex={20}
      borderBottom="2px solid transparent" 
      
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <IconButton
            size={"md"}
            bgColor={"yellow.500"}
            boxShadow="dark-lg"
            icon={isOpen ? <CloseIcon color='teal.500'/> : <HamburgerIcon color='teal.500' />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            zIndex={30} 
          />
          <HStack 
            as={"nav"} 
            spacing={4} 
            display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.path} to={`/${link.path}`} onClick={handleCloseMenu}>{link.name}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <ReserveButton />
        </HStack>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          display={{ md: "none" }}
          position="fixed"
          top={0}
          left={0}
          paddingStart={5}
          paddingEnd={5}
          margin={2}
          bgColor={"yellow.500"}
          color={"teal.800"}
          zIndex={20} 
          pt={16}
          borderRadius={5} 
        >
          <Flex direction="column" align="center" justify="center">
            <Stack as={"nav"} spacing={4} align="center" textAlign="center">
              {Links.map((link) => (
                <NavLink key={link.path} to={`/${link.path}`} onClick={handleCloseMenu}>{link.name}</NavLink>
              ))}
              <Box mt={4}>
              </Box>
            </Stack>
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
