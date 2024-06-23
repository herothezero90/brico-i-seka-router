import React from "react";
import { Box, Flex, HStack, useDisclosure, Stack, Spacer, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import ReserveButton from "./ReserveButton";

const Links = [
  { name: "Pocetna", path: "home" },
  { name: "O nama", path: "about" },
  { name: "Tim", path: "team" },
  { name: "Usluge", path: "services" },
  { name: "Galerija", path: "gallery" },
  { name: "Kontakt", path: "contact" }
];

const NavLink = ({ to, children, onClick }) => (
  <RouterLink to={to} onClick={onClick}>
    <Box px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.900" }}>
      {children}
    </Box>
  </RouterLink>
);

const MotionIconButton = motion(IconButton);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleMenuToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Box 
      bgColor={"teal.800"} 
      color="orange.200" 
      fontFamily="Roper" 
      px={4} py={2} 
      position="sticky" 
      top={0}
      zIndex={20}
      borderBottom="2px solid transparent" 
      marginBottom={-10}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <MotionIconButton
            size={"md"}
            bgColor={"orange.200"}
            boxShadow="dark-lg"
            icon={isOpen ? <CloseIcon color='black' /> : <HamburgerIcon color='teal.500' />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={handleMenuToggle}
            zIndex={30}
            _hover={{ bgColor: "orange.300" }}
            _active={{ bgColor: "orange.200" }}
            as={motion.button}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.path} to={`/${link.path}`} onClick={handleMenuToggle}>{link.name}</NavLink>
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
          bgColor={"orange.200"}
          color={"teal.900"}
          zIndex={20} 
          pt={16}
          borderRadius={5} 
        >
          <Flex direction="column" align="center" justify="center">
            <Stack as={"nav"} spacing={4} align="center" textAlign="center">
              {Links.map((link) => (
                <NavLink key={link.path} to={`/${link.path}`} onClick={handleMenuToggle}>{link.name}</NavLink>
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
