import React from 'react';
import { Button } from '@chakra-ui/react';

const ReserveButton = () => {
  return (
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
        bgGradient: 'linear(to-r, #a07400, #926800)',
      }}
      _active={{
        bgGradient: 'linear(to-r, #a07400, #926800)',
        transform: 'translateY(1px)',
      }}
      bgGradient="linear(to-r, #cc9a00, #bf8c00)"
      boxShadow='dark-lg'
      fontFamily="Roper"
      borderWidth="1px"
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
    >
      Rezerviraj termin
    </Button>
  );
};

export default ReserveButton;
