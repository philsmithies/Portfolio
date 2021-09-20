import {
  Button,
  Flex,
  Box,
  Spacer,
  Heading,
  // useColorMode,
  // useColorModeValue,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";

  return (
    <Flex backgroundColor={"gray.900"}>
      <Box pt="4">
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
        {/* <IconButton
          ml={5}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton> */}
        {/* <Button mr="5">Projects</Button> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
