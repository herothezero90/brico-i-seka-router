import React from 'react';
import { Box, Image, Text, Flex} from '@chakra-ui/react';

const Team = () => {
  return (
    <Flex justify="center" 
    align="center" 
    flexWrap="wrap" 
    maxW="1200px" 
    m="auto">
      {teamMembers.map((member, index) => (
        <Box key={index} 
          bg="yellow.600" 
          maxW="300px" 
          borderWidth="0px" 
          borderRadius="lg" 
          overflow="hidden" 
          shadow="md"
          m={4}
          >
          <Image src={member.image} alt={member.name} />
          <Box p="6">
            <Box d="flex" 
            alignItems="baseline">
              <Text fontSize="xl" fontWeight="semibold" mt="2" mb="2">
                {member.name}
              </Text>
            </Box>
            <Text fontSize="sm" color="black.100">
              {member.description}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
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
