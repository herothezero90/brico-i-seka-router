import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import CenteredContainer from './components/CenteredContainer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import Contact from './pages/Contact'; 
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';

const App = () => {
  const [showFooter] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Box mx="auto">
          <Navbar />
          <CenteredContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} /> 
            </Routes>
          </CenteredContainer>
          {showFooter && <Footer />}
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
