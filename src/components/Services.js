import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import teamImage from '../assets/solutions.jpg';

const Services = () => {
  const [isLargerThan62] = useMediaQuery('(min-width: 62em)');
 const navigate = useNavigate();
    const OpenContact = () => {
      navigate('/contact');
    };
    
  return (
    <Flex
      width="full"
      minHeight="50vh"
      alignItems="center"
      px={isLargerThan62 ? '16' : '6'}
      py="16"
      justifyContent="center"
      flexDirection={isLargerThan62 ? 'row' : 'column'}
    >
      <Flex
        w={isLargerThan62 ? '40%' : 'full'}
        mb={isLargerThan62 ? '0' : '6'}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={teamImage} alt="Chakra Team" w="full" />
      </Flex>

      <Spacer />

      <Flex
        w={isLargerThan62 ? '60%' : 'full'}
        flexDirection="column"
        ml={isLargerThan62 ? '7' : '0'}
      >
        <Text fontSize={isLargerThan62 ? '5xl' : '4xl'} fontWeight="bold">
          We build, We solve
        </Text>

        <Text mb="6" opacity="0.8">
          Customize to your business needs!
        </Text>

        <Button
          width="200px"
          size="lg"
          colorScheme="blue"
          onClick={() => OpenContact()}
        >
          CONTACT US
        </Button>
      </Flex>
    </Flex>
  );
};

export default Services;
