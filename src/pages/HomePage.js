import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';

const HomePage = () => {
  return (
    <Box>
      <Hero />
      <AboutUs />
      <Services />
    </Box>
  );
};

export default HomePage;
