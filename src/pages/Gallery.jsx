import React, { useState } from 'react';
import { Box, Grid, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, IconButton, Center } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    'Images/pjenaipivo.png',
    'Images/Brico i Seka 1.jpg',
    'Images/Brico i Seka 1.jpg',
    'Images/salon2.png',
    'Images/salon2.png',
    'Images/salon2.png',
    'Images/pjenaipivo.png',
    'Images/Brico i Seka 1.jpg',
    'Images/pjenaipivo.png',
    'Images/salon2.png',
    'Images/pjenaipivo.png',
    'Images/Brico i Seka 1.jpg',
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Box 
      p={4}
      mt={10}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={4}
      >
        {images.map((imageUrl, index) => (
          <Box
            key={index}
            position="relative"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
            onClick={() => handleImageClick(index)}
            cursor="pointer"
          >
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              borderRadius="md"
              width="100%"
              height="150px"
              objectFit="cover"
            />
          </Box>
        ))}
      </Grid>

      <Modal 
        isOpen={selectedImageIndex !== null} 
        onClose={handleCloseModal} 
        isCentered size="xxl"
        >
        <ModalOverlay />
        <ModalContent
          bg="teal.700">
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            {selectedImageIndex !== null && (
              <Center position="relative">
                <IconButton
                  icon={<ArrowBackIcon boxSize={6} />}
                  onClick={handlePrevImage}
                  variant="solid"
                  aria-label="Previous Image"
                  mr={2}
                  zIndex={2}
                  bg="teal.700"
                  _hover={{ bg: "teal.500" }}
                />
                <Box p={2}>
                  <Image src={images[selectedImageIndex]} alt={`Selected Image ${selectedImageIndex + 1}`} borderRadius="md" maxHeight="80vh" maxWidth="100%" />
                </Box>
                <IconButton
                  icon={<ArrowForwardIcon boxSize={6} />}
                  onClick={handleNextImage}
                  variant="solid"
                  aria-label="Next Image"
                  ml={2}
                  zIndex={2}
                  bg="teal.700"
                  _hover={{ bg: "teal.500" }}
                />
              </Center>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Gallery;
