import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Team = () => {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Flex 
        flex="1" 
        justify="center" 
        align="center" 
        flexWrap="wrap" 
        maxW="1200px" 
        m="auto"
        p={4}
        overflowY="auto"
      >
        {teamMembers.map((member, index) => (
          <MotionBox 
            key={index}
            bg="yellow.600"
            maxW="300px"
            borderWidth="0px"
            borderRadius="lg"
            overflow="hidden"
            shadow="md"
            m={4}
            p={6}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} 
          >
            <Image src={member.image} alt={member.name} />
            <Box mt={4}>
              <Text fontSize="xl" fontWeight="semibold" mb={2}>
                {member.name}
              </Text>
              <Text fontSize="sm" color="black.100">
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    image: 'Images/portret4.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    image: 'Images/portret1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'John Doe',
    image: 'Images/portret4.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    image: 'Images/portret4.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default Team;
