import React, { useState, Suspense, lazy } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import CenteredContainer from './components/CenteredContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  const [showFooter] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Box mx="auto">
          <Navbar />
          <CenteredContainer>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} /> 
              </Routes>
            </Suspense>
          </CenteredContainer>
          {showFooter && <Footer />}
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
