import React from 'react';
import Counter from '../components/Counter';
import { Box, Image, Heading } from '@chakra-ui/react';
import './Home.css';

const Home = () => {
  return (
    <Box 
      className="home-container" 
      mt={"20"}
      >
      <Image 
        src='Images/pjenaipivo.png' 
        alt="Brico main image"
        width="100%"
        height="600px"
        // objectFit="cover"
        borderRadius="md"
      />
      <Box className="text-container"
        position="absolute"
        top="60%"
        left="50%"
        transform="translate(-50%, -50%)"
        p={8}
        borderRadius={8}
      >
        {/* <Image src='Images/Seka Cropped.svg' alt="Brico logo" width="lg"  /> */}
        <Heading size="4xl" mb={4} 
        fontFamily="Roper"
        color="teal.600"
        textAlign="center" >
          Brico i Seka
        </Heading>
        <Counter />
      </Box>
      {/* <Counter /> */}
    </Box>
  );
};

export default Home;
