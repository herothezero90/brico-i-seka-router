import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    if (year > 1950) {
      const timer = setTimeout(() => {
        setYear(prevYear => prevYear - 1);
      }, 150); 
      return () => clearTimeout(timer);
    }
  }, [year]);

  return (
    <>
    <p 
      className='counter'
      style={{ fontSize: '2rem', textAlign: 'center' }}>
      Since
      </p>
    <div 
    className='counter' 
    style={{ fontSize: '4rem', textAlign: 'center' }}>
      {year}
    </div>
    </>
  );
};

export default Counter;
