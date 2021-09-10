import {
  Button,
  Flex,
  Box,
  Spacer,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const fontColor = useColorModeValue("black", "white");
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <Flex backgroundColor={backgroundColor}>
      <Box p="4">
        <Heading color={fontColor} ml="6">
          P
        </Heading>
      </Box>
      <Spacer />
      <Box p="4" mr="5">
        <Button mr="5">Home</Button>
        {/* <Button mr="5">Projects</Button> */}
        <Button onClick={toggleColorMode}>Toggle Night Mode</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
