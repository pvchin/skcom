import React, { useRef } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import SideDrawer from "./components/SideDrawer";

function App() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const btnRef = useRef();
  return (
    <Box>
      <Nav ref={btnRef} onOpen={onOpen} />
      <SideDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Hero />
      <AboutUs />
      <Services />
      {/* <Testimonials />
      <ContactUs /> */}
      <Footer />
    </Box>
  );
}

export default App;
