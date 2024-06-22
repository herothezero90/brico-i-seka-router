import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
      position="relative"
    >
      {/* Background image */}
      <img
        src='Images/pjenaipivo.png'
        alt="Brico main"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="90vh"
        zIndex={1}
        textAlign="center"
        color="white"
      >
        {/* First Image with fade-in animation */}
        <motion.img
          src="Images/brico_i_seka_cropped.png"
          alt="First Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }} // Adjust delay as needed
          width={{ base: '100%', md: '100%' }}
          mb={4}
          zIndex={10}
        />

        {/* Second Image with fade-in animation */}
        <motion.img
          src="Images/framed_image_2.png"
          alt="Second Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }} // Adjust delay as needed
          width={{ base: '100%', md: '100%' }}
          zIndex={5}
        />
      </Box>
    </Box>
  );
};

export default Home;
