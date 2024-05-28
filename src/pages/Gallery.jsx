import React, { useState } from 'react';
import { Box, Grid, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
  ];

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box p={4}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={4}
      >
        {images.map((imageUrl, index) => (
          <Box
            key={index}
            position="relative"
            _hover={{
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            }}
            onClick={() => handleImageClick(imageUrl)}
            cursor="pointer"
          >
            <Image src={imageUrl} alt={`Image ${index + 1}`} borderRadius="md" />
          </Box>
        ))}
      </Grid>

      <Modal isOpen={selectedImage !== null} onClose={handleCloseModal} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {selectedImage && <Image src={selectedImage} alt="Selected Image" />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Gallery;

