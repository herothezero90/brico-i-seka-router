import React from 'react';
import Counter from '../components/Counter';
import { Button, Box } from '@chakra-ui/react';
import './Home.css';

const Home = () => {
  return (
    <Box className="home-container">
      <Box className="text-container">
        <h1 className="main-heading">Brico i seka</h1>
      </Box>
      <Counter />
      <Button
          size="lg"
          colorScheme="transparent" 
          variant="outline"
          mt={8} 
          _hover={{
            bgGradient: 'linear(to-r, #a07400, #926800)',
          }}
          _active={{
            bgGradient: 'linear(to-r, #a07400, #926800)', 
            transform: 'translateY(1px)',
          }}
          bgGradient="linear(to-r, #cc9a00, #bf8c00)"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" 
          fontFamily="Roper" 
          borderWidth="1px" 
          transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out" 
      >
  Make a Reservation
</Button>

    </Box>
  );
};

export default Home;
