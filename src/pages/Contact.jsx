import React from 'react';
import { Flex, Link, Icon, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionLink = motion(Link);

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
      fontFamily="Montserrat" 
    >
      <MotionImage
        src="Images/salon2.jpeg"
        alt="Brico i Seka Logo"
        mb={4}
        borderRadius={10}
        maxW={{ base: '80%', md: '50%', lg: '40%' }} 
        height="auto" 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <MotionFlex
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        flexDirection="column"
        alignItems="center"
      >
        <MotionText fontSize="4xl" mb={4} color="orange.300" fontWeight="bold">
          BRICO I SEKA
        </MotionText>
        <MotionText fontSize="lg" mb={4} color="orange.200">
          Ul. kralja Zvonimira 26,
          <br /> Velika Gorica
        </MotionText>
        <MotionLink
          href="https://maps.app.goo.gl/HqGnNuu93wkYoiTo7"
          aria-label="Locate barbershop on google maps"
          display="block"
          mb={4}
          color="orange.200"
        >
          <Icon as={FaMapMarkerAlt} mr={2} color="black" />
          Kako do nas
        </MotionLink>
        <MotionLink
          href="tel:+385917886920"
          aria-label="Call barbershop"
          display="block"
          mb={4}
          color="orange.200"
        >
          <Icon as={FaPhone} mr={2} color="black" />
          +385 91 788 6920
        </MotionLink>
        <MotionLink
          href="mailto:tomnorsic@gmail.com"
          aria-label="Email barbershop"
          display="block"
          mb={4}
          color="orange.200"
        >
          <Icon as={FaEnvelope} mr={2} color="black"/>
          tomnorsic@gmail.com
        </MotionLink>
        <Flex justifyContent="center" alignItems="center">
          <MotionLink
            href="https://www.instagram.com/brico_i_seka/"
            aria-label="Barbershop Instagram page"
            mr={4}
            fontSize="md"
            color="orange.200"
          >
            <Icon as={FaInstagram} mr={2} color="black"/>
            Instagram
          </MotionLink>
          <MotionLink
            href="https://www.facebook.com/BricoiSeka/"
            aria-label="Barbershop Facebook page"
            fontSize="md"
            color="orange.200"
          >
            <Icon as={FaFacebook} mr={2} color="black"/>
            Facebook
          </MotionLink>
        </Flex>
      </MotionFlex>
    </Flex>
  );
};

export default Contact;
