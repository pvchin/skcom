import React from 'react';
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  useMediaQuery,
  Icon,
  Image,
} from '@chakra-ui/react';
import {
  FaTools,
  FaHandshake,
  FaStar,
  FaCloudflare,
  FaHive,
} from 'react-icons/fa';
import Img1 from '../assets/logo512.png';

const AboutUs = () => {
  const [isLargerThan48] = useMediaQuery('(min-width: 48em)');

  const array = [
    {
      id: 1,
      text: ' Digitize and customize your business solutions!',
      icon: FaTools,
    },
    {
      id: 2,
      text: 'Through team work',
      icon: FaHandshake,
    },
    {
      id: 3,
      text: 'Provide best after-sales services',
      icon: FaStar,
    },
  ];

  return (
    <Flex
      minH="50vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThan48 ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThan48 ? 'row' : 'column'}
    >
      <Flex
        height={isLargerThan48 ? '350' : '450'}
        bg="blackAlpha.200"
        width={isLargerThan48 ? '32%' : 'full'}
        shadow="md"
        p="6"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        flexDirection="column"
        textAlign="center"
        mb={isLargerThan48 ? '0' : '4'}
        border="1px solid #C4DDFF"
      >
        <Icon as={FaHive} boxSize={14} color="blue.600" mb="5" />
        <Heading>Business Solutions</Heading>
        <Text fontSize="lg">
          Point-of-Sales and Inventory Management System
        </Text>
        <Text fontSize="20">Inventory Management and Accounting System</Text>
        <Text fontSize="20">Hotel and Property Management System</Text>
        <Text fontSize="20">Human Resource and Payroll System</Text>
        <Text fontSize="20">Term Contract Management System</Text>
        <Text fontSize="20">Lab Information and Management System</Text>
        <Text fontSize="20">Cost Recovery System</Text>
      </Flex>
      <Flex
        height="350px"
        bg="blackAlpha.200"
        width={isLargerThan48 ? '32%' : 'full'}
        shadow="md"
        p="6"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        flexDirection="column"
        textAlign="center"
        mb={isLargerThan48 ? '0' : '4'}
        border="1px solid #C4DDFF"
      >
        <Icon as={FaTools} boxSize={14} color="blue.600" mb="5" />
        <Heading>Custom-made Solution</Heading>
        <Text fontSize="lg">We tailor made to your business needs</Text>
      </Flex>
      <Flex
        height="350px"
        bg="blackAlpha.200"
        width={isLargerThan48 ? '32%' : 'full'}
        shadow="md"
        p="6"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        flexDirection="column"
        textAlign="center"
        mb={isLargerThan48 ? '0' : '4'}
        border="1px solid #C4DDFF"
      >
        <Icon as={FaCloudflare} boxSize={14} color="blue.600" mb="5" />
        <Heading>Business Services</Heading>
        <Text fontSize="lg">Clouding and Hosting Services</Text>
        <Text fontSize="lg">Web Design and Hosting Services</Text>
        <Text fontSize="lg">Cloud Database Solutions</Text>
      </Flex>
      {/* {array.map(arr => (
        <>
          <Flex
            height="300px"
            bg="blackAlpha.200"
            width={isLargerThan48 ? '32%' : 'full'}
            shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThan48 ? '0' : '4'}
            border="1px solid #C4DDFF"
          >
            <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
            <AspectRatio ratio="">
              <Image src={Img1} alt="services" />
            </AspectRatio>
            <Text>{arr.text}</Text>
          </Flex>

          <Spacer />
        </>
      ))} */}
    </Flex>
  );
};

export default AboutUs;
