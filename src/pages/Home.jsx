import React from 'react';
import Counter from '../components/Counter';
import { Box, Image, Heading } from '@chakra-ui/react';

const Home = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      overflow="hidden"
      mt={0}
      position="relative"
    >
      <Image
        src='Images/pjenaipivo.png'
        alt="Brico main image"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-1}
        transform={{ base: 'scale(1)', md: 'none' }}
      />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        p={8}
        borderRadius={8}
        zIndex={1}
        textAlign="center"
        color="white"
      >
        <Heading
          size={{ base: "3xl", md: "4xl" }}  
          mb={4}
          fontFamily="Roper"
          color="teal.600"
          textAlign="center"
        >
          Brico i Seka
        </Heading>
        <Counter />
      </Box>
    </Box>
  );
};

export default Home;
