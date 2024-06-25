import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
      maxWidth={'2000px'}
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
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        // height="85%"
        height={{base: '85%', lg: '85%'}}
        zIndex={1}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={{sm: '100%', base: '100%', lg: '43%' }}
          textAlign="center"
          color="white"
          p={{ base: '2', md: '2' }}
          mb={{lg: '1'}}
        >
          {/* Brico i seka logo */}
          <motion.img
            src="Images/brico_i_seka_cropped.png"
            alt="Brico logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }} 
            mb={4}
            zIndex={10}
          />

          {/* Framed images */}
          <motion.img
            src="Images/framed_image_2.png"
            alt="Framed images"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }} 
            zIndex={5}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
