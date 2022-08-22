import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from '@chakra-ui/react';

const SideDrawer = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      zIndex="popover"
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <Flex flexDirection="column" gap={5}>
            <Link mb="5" to="/">
              Home
            </Link>
            <Link mb="5" to="/about">
              About
            </Link>
            <Link to="/contact">Contact</Link>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
