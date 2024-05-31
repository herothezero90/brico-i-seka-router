import React from 'react';
import { Button } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const ReserveButton = () => {
  const shakeAnimation = useSpring({
    from: { transform: 'translateX(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateX(-10px)' });
        await next({ transform: 'translateX(10px)' });
        await next({ transform: 'translateX(-10px)' });
        await next({ transform: 'translateX(10px)' });
        await next({ transform: 'translateX(0px)' });
        break; // To prevent infinite loop, remove this if you want continuous shaking
      }
    },
    config: { duration: 100 },
  });

  return (
    <animated.div style={shakeAnimation}>
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
    </animated.div>
  );
};

export default ReserveButton;
