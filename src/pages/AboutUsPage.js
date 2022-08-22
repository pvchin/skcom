import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  VStack,
  Text,
} from '@chakra-ui/react';
import PageHero from '../components/PageHero';
import ProfileImg from '../assets/profile.png';

const AboutUsPage = () => {
  return (
    <VStack>
      <PageHero />
      <Flex
        w="200"
        bg="blackAlpha.50"
        minHeight="50vh"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        justifyItems="center"
      >
        <VStack w="50%" h="400">
          <Box shadow="lg" h="400" borderWidth="2px">
            <Center>
              <Image src={ProfileImg} alt="profile" boxSize="140" />
            </Center>

            <Heading py={5}>Our Story:</Heading>
            <Text fontSize="2xl">
              Established in 1998, SK Communication Services is a local company
              which specialize in software development. We have provided a wide
              range of high quality business solutions to meet the needs of our
              local customers in all these years.
            </Text>
          </Box>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default AboutUsPage;