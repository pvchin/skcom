import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { IoReturnUpBack } from 'react-icons/io5';
import { ArrowBackIcon } from '@chakra-ui/icons';

const PageHero = () => {
  return (
    <Grid templateColumns="repeat(5,1fr)" w="100%">
      <GridItem colSpan={1} px={10}>
        <HStack>
          <Icon as={IoReturnUpBack} boxSize="10" />
          <Link to="/">
            <Heading size="lg">Home</Heading>
          </Link>
        </HStack>
          </GridItem>
          <GridItem colSpan={4}>
              
          </GridItem>
    </Grid>
  );
};

export default PageHero;
