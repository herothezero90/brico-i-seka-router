import React from 'react';
import { Flex, Link, Icon, Text, Image } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="80vh"
      flexDirection="column"
      textAlign="center"
      px={4}
      overflow="hidden"
    >
      <Image
        src="Images/salon2.jpeg"
        alt="Brico i Seka Logo"
        mb={4}
        borderRadius={10}
        maxW={{ base: '80%', md: '50%', lg: '40%' }} // Responsive max-width
        height="auto" // Ensures the image scales proportionally
      />
      <Text fontSize="2xl" fontFamily="Roper" fontWeight="bold" mb={2} color="orange.200">
        Brico i seka
      </Text>
      <Text fontSize="lg" fontFamily="Roper" mb={4} color="orange.200">
        Ul. kralja Zvonimira 26, Velika Gorica
      </Text>
      <Link
        href="https://maps.app.goo.gl/HqGnNuu93wkYoiTo7"
        aria-label="Locate barbershop on google maps"
        fontFamily="Roper"
        display="block"
        mb={4}
        color="orange.200"
      >
        <Icon as={FaMapMarkerAlt} mr={2} color="black" />
        Find us
      </Link>
      <Link
        href="tel:+385917886920"
        aria-label="Call barbershop"
        fontFamily="Roper"
        display="block"
        mb={2}
        color="orange.200"
      >
        <Icon as={FaPhone} mr={2} color="black" />
        +385 91 788 6920
      </Link>
      <Link
        href="mailto:tomnorsic@gmail.com"
        aria-label="Email barbershop"
        fontFamily="Roper"
        display="block"
        mb={4}
        color="orange.200"
      >
        <Icon as={FaEnvelope} mr={2} color="black"/>
        tomnorsic@gmail.com
      </Link>
      <Flex justifyContent="center" alignItems="center">
        <Link
          href="https://www.instagram.com/brico_i_seka/"
          aria-label="Barbershop Instagram page"
          mr={4}
          fontSize="md"
          fontFamily="Roper"
          color="orange.200"
        >
          <Icon as={FaInstagram} mr={2} color="black"/>
          Instagram
        </Link>
        <Link
          href="https://www.facebook.com/BricoiSeka/"
          aria-label="Barbershop Facebook page"
          fontSize="md"
          fontFamily="Roper"
          color="orange.200"
        >
          <Icon as={FaFacebook} mr={2} color="black"/>
          Facebook
        </Link>
      </Flex>
    </Flex>
  );
};

export default Contact;
