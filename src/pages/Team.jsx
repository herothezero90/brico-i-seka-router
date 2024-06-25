import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Team = () => {
  return (
    <Box display="flex" flexDirection="column" minH="100vh" fontFamily="Montserrat">
      <Flex
        flex="1"
        justify="center"
        align="center"
        flexWrap={{ base: 'wrap', xl: 'nowrap' }} 
        maxW="2000px"
        m="auto"
        p={4}
        overflowY="auto"
        mb={20}
      >
        {teamMembers.map((member, index) => (
          <MotionBox
            key={index}
            bg="orange.200"
            maxW={{ base: '300px', md: '350px', xl: '100vw' }} 
            borderWidth="1px"
            borderRadius="lg"
            borderColor="black"
            overflow="hidden"
            shadow="lg"
            m={4}
            p={6}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              borderRadius="full"
              boxSize={{ base: '100px', md: '120px', xl: '140px' }}
              mx="auto"
              mb={4}
            />
            <Box textAlign="center">
              <Text fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }} fontWeight="semibold" mb={2}>
                {member.name}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md', xl: 'lg' }} color="gray.600">
                {member.description}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
};

const teamMembers = [
  {
    name: 'John Doe',
    image: 'Images/portret1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    image: 'Images/portret4.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    image: 'Images/portret1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'John Doe',
    image: 'Images/portret4.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    image: 'Images/portret4.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default Team;
