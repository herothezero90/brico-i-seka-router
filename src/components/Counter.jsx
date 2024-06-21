import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import './Counter.css';

const Counter = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    if (year > 1950) {
      const timer = setTimeout(() => {
        setYear(prevYear => prevYear - 1);
      }, 70); 
      return () => clearTimeout(timer);
    }
  }, [year]);

  return (
    <>
      <Text
        className='counter'
        fontSize='2rem'
        textAlign='center'
        marginTop='10px'
        textShadow='1px 1px #000000' m='6'
      >
        Since
      </Text>
      <Box
        className='counter'
        fontSize='4rem'
        textAlign='center'
        textShadow='1px 1px #000000' m='6'
      >
        {year}
      </Box>
    </>
  );
};

export default Counter;