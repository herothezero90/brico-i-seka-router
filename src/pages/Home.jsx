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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('Images/pjenaipivo.png')`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      />
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
        {/* First Image */}
        <motion.img
          src="Images/brico_i_seka_cropped.png"
          alt="First Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }} 
          width={{ base: '100%', sm: '100%', md: '50%', lg: '40%' }}
          mb={4}
          zIndex={10}
        />

        {/* Second Image */}
        <motion.img
          src="Images/framed_image_2.png"
          alt="Second Image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }} 
          width={{ base: '100%', sm: '100%', md: '50%', lg: '40%' }}
          zIndex={5}
        />
      </Box>
    </Box>
  );
};

export default Home;
