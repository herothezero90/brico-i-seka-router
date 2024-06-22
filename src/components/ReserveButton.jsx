import React from 'react';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion'; 

const ReserveButton = () => {
  return (
    <motion.div
      initial={{ x: 0 }} 
      animate={{
        x: [-10, 10, -10, 10, 0], 
      }}
      transition={{ duration: 3 }} 
    >
      <Button
        as="a"
        href="https://app.zoyya.com/rndko/1434"
        target="_blank"
        size="md"
        colorScheme="transparent"
        color="teal.700"
        variant="outline"
        mt={10}
        mb={10}
        _hover={{
          bgColor: 'orange.200',
        }}
        _active={{
          bgColor: 'orange.200',
          transform: 'translateY(1px)',
        }}
        bgColor='orange.200'
        boxShadow='dark-lg'
        fontFamily="Roper"
        borderWidth="1px"
        transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      >
        Rezerviraj termin
      </Button>
    </motion.div>
  );
};

export default ReserveButton;
