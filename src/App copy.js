import React, { useState} from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
  const [select, setSelect] = useState('confirmorders');
  
  const SwitchCase = () => {
    switch (select) {
      case 'home':
        //return <AdminOrdersHistory status="Confirmed" />;
        return 
      case 'products':
        //return <AdminOrdersHistory status="Delivered" />;
        return
      case 'company':
        //return <AdminOrdersHistory status="Deleted" />;
        return
      case 'contact':
        return 
        //return <ItemsTable />;
      default:
        return 
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex w="100%" h="auto" overflow="scroll">
        <Navbar />
        {/* <Header />
        <Sidebar setSelect={setSelect} />
        <Flex mt={50} w="full" h="100%" justify="center">
          <SwitchCase />
        </Flex> */}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
