import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  VStack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import PageHero from '../components/PageHero';
import ContactImg from '../assets/contact.png';

const ContactUsPage = () => {
  const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

  return (
    <VStack>
      <PageHero />
      <Flex
        w="full"
        bg="blackAlpha.50"
        minHeight="50vh"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        justifyItems="center"
      >
        <Box
          shadow="xl"
          w={isLargerThan62 ? '50%' : 'auto'}
          h="450"
          borderWidth="2px"
          p={2}
        >
          <Center>
            <Image src={ContactImg} alt="profile" boxSize="140" />
          </Center>
          <Heading py={5}>Our Address:</Heading>
          <Text fontSize={isLargerThan62 ? '24' : '10'} color="blue">
            Lot Q11, Tapak Perindustrian Lambak Kanan
          </Text>
          <Text fontSize={isLargerThan62 ? '24' : '10'} color="blue">
            Jalan Berakas, Brunei Darussalam
          </Text>
          <Text fontSize={isLargerThan62 ? '24' : '10'} color="blue">
            Tel: 6738722945 Email:pvchin@skcombn.com
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
};

export default ContactUsPage;
