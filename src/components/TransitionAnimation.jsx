import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const TransitionAnimation = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 1000); // Delay to give time for the component to mount
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <AnimatePresence>
        {showImage && (
          <motion.div
            key="old-man"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }} // Longer duration for dissolve effect
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <Image src="Images/Brico i Seka 1.jpg" alt="Old Man" />
          </motion.div>
        )}
        {!showImage && (
          <motion.div
            key="young-man"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }} // Longer duration for dissolve effect
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <Image src="Images/Brico i Seka 6.jpg" alt="Young Man" />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default TransitionAnimation;
