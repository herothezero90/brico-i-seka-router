import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ServiceGroup = ({ heading, children, index }) => (
  <MotionBox
    bg="orange.200"
    shadow="lg"
    _hover={{ shadow: '2xl' }}
    p={{ base: 4, md: 6 }}
    mb={{ base: 8, md: 16 }}
    borderRadius="md"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.3 }}  
  >
    <Heading as="h3" mb={4} fontSize={{ base: 'xl', md: '2xl' }} color="teal.500">
      {heading}
    </Heading>
    <Text fontSize={{ base: 'sm', md: 'md' }}>{children}</Text>
  </MotionBox>
);

const Services = () => {
  const serviceData = [
    {
      heading: 'ŠIŠANJE',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      heading: 'FRIZURA',
      content:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      heading: 'BUZZ CUT',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      heading: 'RAZOR SHAVE',
      content:
        'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    }
  ];

  return (
    <Box as="article" className="services" id="services" textAlign="center" px={{ base: 4, md: 8 }} py={{ base: 8, md: 16 }}>
      <Heading mb={10} fontFamily="Roper" fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold" color="orange.200">
        USLUGE
      </Heading>
      <Box maxW="xl" mx="auto">
        {serviceData.map((service, index) => (
          <ServiceGroup key={index} heading={service.heading} index={index}>
            {service.content}
          </ServiceGroup>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
