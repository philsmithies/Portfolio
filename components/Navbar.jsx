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
import { createBreakpoints } from "@chakra-ui/theme-tools";

const Navbar = () => {
  return (
    <Flex backgroundColor={"gray.900"}>
      <Box p="4">
        <Link href="/" passHref>
          <Heading
            _hover={{
              cursor: "pointer",
              color: "teal.500",
            }}
            color={"teal.100"}
            ml="6"
          >
            P
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <Box p="4">
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
