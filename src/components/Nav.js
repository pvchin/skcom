import React, { useState } from 'react';
import {
  Button,
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Icon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaAlignJustify } from 'react-icons/fa';

const Nav = ({ onOpen, btnRef }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue('white', 'blackAlpha.200');
  const [isLargerThan48] = useMediaQuery('(min-width: 48em)');
  const navigate = useNavigate();

  const OpenContact = () => {
    navigate('/contact');
  };

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  const OpenAboutUs = () => {
    navigate('/about');
  };

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >
      {/* <Text fontSize="xl" fontWeight="bold">
        SK Communication Services
      </Text> */}

      <Spacer />

      <Flex alignItems="center">
        <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        {isLargerThan48 ? (
          <>
            <Button fontSize="md" mr={10} onClick={() => OpenAboutUs()}>
              About Us
            </Button>
            <Button fontSize="md" onClick={() => OpenContact()}>
              Contact Us
            </Button>
          </>
        ) : (
          // ------ The ref and OnOpen function is added -----
          <IconButton ref={btnRef} onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )}
      </Flex>
    </Flex>
  );
};

export default Nav;
