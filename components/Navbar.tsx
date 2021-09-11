import {
  Button,
  Flex,
  Box,
  Spacer,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

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
        <Link href="/" passHref>
          <Button mr="5">Home</Button>
        </Link>
        <Link href="/projects" passHref>
          <Button>Projects</Button>
        </Link>
        {/* <Button mr="5">Projects</Button> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
