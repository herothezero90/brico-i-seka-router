import React from 'react';
import { Box, Flex, Link, Icon } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = ({ show }) => {
  return (
    <Box
      as="footer"
      bg="teal.700"
      color="white"
      py={4}
      position="fixed" // Set position to fixed
      bottom={0}
      left={0}
      right={0}
      zIndex={10}
      width="100%"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        px={4}
      >
        <Box 
          flexBasis={{ base: '100%', md: 'auto' }} 
          textAlign={{ base: 'center', md: 'left' }} 
          mb={{ base: 4, md: 0 }}
          fontFamily={ "Merriweather, serif"}
        >
          <h2>KONTAKT</h2>
          <p>
            Ul. kralja Zvonimira 26, Velika Gorica<br />
            <Link href="tel:+385917886920" aria-label="Call barbershop on the phone" color="white">
              <Icon as={FaPhone} mr={2} />
              +385 91 788 6920
            </Link>
            <br />
            <Link href="mailto:tomnorsic@gmail.com" color="white">
              <Icon as={FaEnvelope} mr={2} />
              tomnorsic@gmail.com
            </Link>
          </p>
        </Box>

        <Box 
        flexBasis={{ base: '100%', md: 'auto' }} 
        textAlign="center"
        fontFamily={ "Merriweather, serif"}
        >
          <Link href="https://maps.app.goo.gl/HqGnNuu93wkYoiTo7" aria-label="Locate barbershop on google maps" color="white" mr={4}>
            <Icon as={FaMapMarkerAlt} mr={2} />
            Locate us
          </Link>
          <Box mt={2}>
            <Link href="https://www.instagram.com/brico_i_seka/" aria-label="Barbershop Instagram page" color="white" mr={4}>
              <Icon as={FaInstagram} mr={2} />
              Instagram
            </Link>
            <Link href="https://www.facebook.com/BricoiSeka/" aria-label="Barbershop Facebook page" color="white">
              <Icon as={FaFacebook} mr={2} />
              Facebook
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
