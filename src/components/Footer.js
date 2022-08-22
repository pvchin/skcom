import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="20vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
    >
      <Text mb="3">
        <h5>&copy; {new Date().getFullYear()}</h5>
        <span> SK Communication Services </span>
        <h5> All rights reserved</h5>
      </Text>
    </Flex>
  );
};

export default Footer;
