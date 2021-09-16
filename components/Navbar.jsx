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
  // const { toggleColorMode } = useColorMode();
  // const fontColor = useColorModeValue("black", "white");
  // const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <Flex backgroundColor={"gray.900"}>
      <Box p="4">
        <Link href="/" passHref>
          <Heading
            _hover={{
              cursor: "pointer",
              color: "teal.300",
            }}
            color={"white"}
            ml="6"
          >
            P
          </Heading>
        </Link>
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
