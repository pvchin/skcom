import React, { useRef } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import SideDrawer from './components/SideDrawer';

import { Home, AboutUs, ContactUs } from './pages';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box>
      <Nav btnRef={btnRef} onOpen={onOpen} />
      <SideDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
      {/* <Routes>
        {/* <Hero /> */}
      {/* <AboutUs />
        <Services />  */}

      {/* <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactUs />} /> */}

      <Footer />
      {/* </Routes> */}
    </Box>
  );
}

export default App;
