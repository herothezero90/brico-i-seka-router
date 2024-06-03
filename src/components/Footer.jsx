import React, { useState, useEffect } from 'react';
import { Box, Flex, Link, Icon, Text, Button, useMediaQuery } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isShrunk, setIsShrunk] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const controlFooter = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsShrunk(true);
        } else {
          // Scrolling up
          setIsShrunk(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlFooter);
      return () => {
        window.removeEventListener('scroll', controlFooter);
      };
    }
  }, [lastScrollY]);

  return (
    <Box
      as="footer"
      bg="teal.900"
      color="yellow.400"
      py={isShrunk ? 2 : 4}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={10}
      width="100%"
      transition="all 0.3s"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        px={4}
        display={isMobile && !isExpanded ? 'none' : 'flex'}
      >
        <Box
          flexBasis={{ base: '100%', md: 'auto' }}
          textAlign={{ base: 'center', md: 'left' }}
          mb={{ base: 4, md: 0 }}
          fontFamily="Roper"
          display={{ base: isExpanded ? 'block' : 'none', md: 'block' }}
        >
          <Text
            fontSize='md'
            color="yellow.400"
            fontFamily="Roper"
            display={{ base: "none", md: "inline" }}>
            Kontakt
          </Text>
          <Text
            fontSize='md'
            color="yellow.400"
            fontFamily="Roper">
            Ul. kralja Zvonimira 26, Velika Gorica
          </Text>
          <Link
            href="tel:+385917886920"
            aria-label="Call barbershop on the phone"
            color="yellow.400"
            fontSize='md'
            fontFamily="Roper"
          >
            <Icon
              color="yellow.400"
              as={FaPhone} mr={2}
            />
            +385 91 788 6920
          </Link>
          <br />
          <Link
            href="mailto:tomnorsic@gmail.com"
            aria-label="Email barbershop"
            fontSize='md'
            color="yellow.400"
            fontFamily="Roper"
          >
            <Icon as={FaEnvelope} mr={2} />
            tomnorsic@gmail.com
          </Link>
        </Box>

        <Box
          flexBasis={{ base: '100%', md: 'auto' }}
          textAlign="center"
          fontFamily="Merriweather, serif"
        >
          <Link
            href="https://maps.app.goo.gl/HqGnNuu93wkYoiTo7"
            aria-label="Locate barbershop on google maps"
            mr={4}
            fontSize='md'
            color="yellow.400"
            fontFamily="Roper"
          >
            <Icon as={FaMapMarkerAlt} mr={2} />
            Kako do nas
          </Link>
          <Box mt={2}>
            <Link
              href="https://www.instagram.com/brico_i_seka/"
              aria-label="Barbershop Instagram page"
              mr={4}
              fontSize='md'
              color="yellow.400"
              fontFamily="Roper"
            >
              <Icon as={FaInstagram} mr={2} />
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/BricoiSeka/"
              aria-label="Barbershop Facebook page"
              fontSize='md'
              color="yellow.400"
              fontFamily="Roper"
            >
              <Icon as={FaFacebook} mr={2} />
              Facebook
            </Link>
          </Box>
        </Box>
      </Flex>

      {/* Mobile size */}
      <Box display={isMobile ? 'flex' : 'none'} justifyContent="center" mt={2}>
        <Button
          size="sm"
          mb={"2"}
          bg='yellow.500'
          onClick={handleExpandClick}
        >
          {isExpanded ? 'Manje' : 'Više'}
        </Button>
      </Box>

      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        display={isMobile && !isExpanded ? 'flex' : 'none'}
        mt={2}
      >
        <Link href="tel:+385917886920" aria-label="Call barbershop">
          <Icon as={FaPhone} boxSize={6} color="yellow.500" />
        </Link>
        <Link href="mailto:tomnorsic@gmail.com" aria-label="Email barbershop">
          <Icon as={FaEnvelope} boxSize={6} color="yellow.500" />
        </Link>
        <Link href="https://maps.app.goo.gl/HqGnNuu93wkYoiTo7" aria-label="Locate barbershop">
          <Icon as={FaMapMarkerAlt} boxSize={6} color="yellow.500" />
        </Link>
        <Link href="https://www.instagram.com/brico_i_seka/" aria-label="Barbershop Instagram page">
          <Icon as={FaInstagram} boxSize={6} color="yellow.500" />
        </Link>
        <Link href="https://www.facebook.com/BricoiSeka/" aria-label="Barbershop Facebook page">
          <Icon as={FaFacebook} boxSize={6} color="yellow.500" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
