import React, { useState, useEffect } from 'react';
import { Box, Flex, Link, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router

const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isShrunk, setIsShrunk] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const controlFooter = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsShrunk(true);
        } else {
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

  const isVisibleOnRoute = () => {
    const visibleRoutes = ['/home', '/gallery'];
    return visibleRoutes.includes(location.pathname);
  };

  return (
    <Box
      as="footer"
      bg="teal.900"
      color="orange.200"
      py={isShrunk ? 2 : 4}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={10}
      width="100%"
      transition="all 0.3s"
      display={isMobile && !isVisibleOnRoute() ? 'none' : 'block'} // Adjust visibility based on route
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        px={4}
        display={isMobile ? 'none' : 'flex'}
      >
        <Box
          flexBasis={{ base: '100%', md: 'auto' }}
          textAlign={{ base: 'center', md: 'left' }}
          mb={{ base: 4, md: 0 }}
          fontFamily="Roper"
        >
          <Text fontSize="md" fontFamily="Roper">
            Kontakt
          </Text>
          <Text fontSize="md" fontFamily="Roper">
            Ul. kralja Zvonimira 26, Velika Gorica
          </Text>
          <Link
            href="tel:+385917886920"
            aria-label="Call barbershop on the phone"
            fontFamily="Roper"
          >
            <Icon as={FaPhone} mr={2} />
            +385 91 788 6920
          </Link>
          <br />
          <Link
            href="mailto:tomnorsic@gmail.com"
            aria-label="Email barbershop"
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
            fontSize="md"
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
              fontSize="md"
              fontFamily="Roper"
            >
              <Icon as={FaInstagram} mr={2} />
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/BricoiSeka/"
              aria-label="Barbershop Facebook page"
              fontSize="md"
              fontFamily="Roper"
            >
              <Icon as={FaFacebook} mr={2} />
              Facebook
            </Link>
          </Box>
        </Box>
      </Flex>

      {/* Mobile size */}
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        display={isMobile ? 'flex' : 'none'}
        mt={2}
        flexWrap="wrap"
        px={4}
      >
        <Link href="tel:+385917886920" aria-label="Call barbershop">
          <Flex flexDirection="column" alignItems="center">
            <Icon as={FaPhone} boxSize={6} color="orange.200" />
            <Text fontSize="xs" color="orange.200" mt={1} fontFamily="Roper">
              Poziv
            </Text>
          </Flex>
        </Link>
        <Link href="mailto:tomnorsic@gmail.com" aria-label="Email barbershop">
          <Flex flexDirection="column" alignItems="center">
            <Icon as={FaEnvelope} boxSize={6} color="orange.200" />
            <Text fontSize="xs" color="orange.200" mt={1} fontFamily="Roper">
              Mail
            </Text>
          </Flex>
        </Link>
        <Link href="https://maps.app.goo.gl/HqGnNuu93wkYoiTo7" aria-label="Locate barbershop">
          <Flex flexDirection="column" alignItems="center">
            <Icon as={FaMapMarkerAlt} boxSize={6} color="orange.200" />
            <Text fontSize="xs" color="orange.200" mt={1} fontFamily="Roper">
              Mapa
            </Text>
          </Flex>
        </Link>
        <Link href="https://www.instagram.com/brico_i_seka/" aria-label="Barbershop Instagram page">
          <Flex flexDirection="column" alignItems="center">
            <Icon as={FaInstagram} boxSize={6} color="orange.200" />
            <Text fontSize="xs" color="orange.200" mt={1} fontFamily="Roper">
              IG
            </Text>
          </Flex>
        </Link>
        <Link href="https://www.facebook.com/BricoiSeka/" aria-label="Barbershop Facebook page">
          <Flex flexDirection="column" alignItems="center">
            <Icon as={FaFacebook} boxSize={6} color="orange.200" />
            <Text fontSize="xs" color="orange.200" mt={1} fontFamily="Roper">
              FB
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
