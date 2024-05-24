import React, { useState } from 'react';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://source.unsplash.com/random/600x600?sig=1',
  'https://source.unsplash.com/random/600x600?sig=2',
  'https://source.unsplash.com/random/600x600?sig=3',
  'https://source.unsplash.com/random/600x600?sig=4',
  'https://source.unsplash.com/random/600x600?sig=5',
  'https://source.unsplash.com/random/600x600?sig=6',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box padding="30px 0" position="relative">
      <Box width="600px" marginY="20" borderRadius="3px" overflow="hidden">
        <SimpleGrid columns={3} spacing={0}>
          {images.map((image, index) => (
            <Box
              key={index}
              className="img-c"
              width="200px"
              height="200px"
              position="relative"
              overflow="hidden"
              onClick={() => handleClick(image)}
              cursor="pointer"
              transition="width ease 400ms, height ease 350ms, left cubic-bezier(0.4, 0, 0.2, 1) 420ms, top cubic-bezier(0.4, 0, 0.2, 1) 420ms"
              _hover={{
                '& .img-w': {
                  transform: 'scale(1.08)',
                  transition: 'transform cubic-bezier(0.4, 0, 0.2, 1) 450ms',
                },
              }}
            >
              <Box
                className="img-w"
                as={motion.div}
                backgroundImage={`url(${image})`}
                backgroundSize="cover"
                backgroundPosition="center"
                width="100%"
                height="100%"
                position="absolute"
                transition="transform ease-in-out 300ms"
              >
                <Image src={image} display="none" />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <AnimatePresence>
        {selectedImage && (
          <Box
            as={motion.div}
            className="img-c active positioned"
            width="100% !important"
            height="100% !important"
            position="absolute"
            zIndex="2"
            top="0 !important"
            left="0 !important"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.05 }}
          >
            <Box
              as={motion.div}
              backgroundImage={`url(${selectedImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
              width="100%"
              height="100%"
              position="absolute"
              zIndex="2"
              onClick={handleClose}
            />
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Gallery;
