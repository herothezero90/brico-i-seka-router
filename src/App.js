import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme";
import CenteredContainer from "./components/CenteredContainer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer"; 
import "./App.css";

const App = () => {
  const [showFooter] = useState(true); 

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <CenteredContainer>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </CenteredContainer>
        {showFooter && <Footer />}
      </Router>
    </ChakraProvider>
  );
};

export default App;
