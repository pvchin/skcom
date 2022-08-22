import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/sklogo.bmp';

const Hero = () => {
  const [isLargerThan62] = useMediaQuery('(min-width: 62em)');
  const navigate = useNavigate();

  const OpenContact = () => {
    navigate('/contact');
  };
  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThan62 ? '16' : '6'}
      py="10"
      minHeight="20vh"
      justifyContent="space-between"
      flexDirection={isLargerThan62 ? 'row' : 'column'}
    >
      <Box mr={isLargerThan62 ? '6' : '0'} w={isLargerThan62 ? '60%' : 'full'}>
        <Text
          fontSize={isLargerThan62 ? '4xl' : '2xl'}
          fontWeight="bold"
          mb="4"
        >
          {' '}
          Let's customize your business needs!
        </Text>

        <Text mb="6" fontSize={isLargerThan62 ? 'lg' : 'base'} opacity={0.7}>
          We can assist to design and customize your business requirements
        </Text>

        <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThan62 ? 'lg' : 'md'}
          mb={isLargerThan62 ? '0' : '10'}
          onClick={() => OpenContact()}
        >
          CONTACT US
        </Button>
      </Box>

      <Spacer />

      <Flex
        w={isLargerThan62 ? '40%' : 'full'}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={logo} alt="Chakra UI" />
      </Flex>
    </Flex>
  );
};

export default Hero;
