import { Box, Center, IconButton,Image, Spacer,Text, Flex } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import logo from "../assets/sklogo.bmp"

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex bg="teal.100" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Box flex="2" w={100}  pl={10}>
        <Image src={logo} alt="logo" />
      </Box>
      <Spacer />
      <Box>
        welcome
      </Box>
      <Box flex="1" />
    </Flex>
  );
}

export default Header
