import {
    AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Image,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
//mport { Logo } from './Logo';
import logo from '../assets/sklogo.bmp';

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <AspectRatio maxW="400px" ratio={4 / 3}>
              <Image
                src={logo}
                alt="logo"
                objectFit="cover"
              />
            </AspectRatio>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['Product', 'Pricing', 'Resources', 'Support'].map(item => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
