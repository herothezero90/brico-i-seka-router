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
        mb={20}
        gap={4}
      >
        {teamMembers.map((member, index) => (
          <MotionBox 
            key={index}
            bg="yellow.500"
            w={['100%', '45%', '30%']}  
            borderWidth="1px"
            borderRadius="lg"
            borderColor="black"
            overflow="hidden"
            boxShadow="xl" 
            _hover={{ boxShadow: '2xl' }}  
            transition={{ duration: 0.5, delay: index * 0.3 }}  
            m={5} 
            p={6}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
          >
            <Image 
              src={member.image} 
              alt={member.name} 
              borderRadius="full" 
              boxSize="100px" 
              objectFit="cover" 
              mx="auto" 
              mb={4} 
            />
            <Box textAlign="center">
              <Text fontSize="xl" fontWeight="semibold" mb={2}>
                {member.name}
              </Text>
              <Text fontSize="sm" color="gray.600">
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
