import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Intro from "../components/Intro";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      background={formBackground}
    >
      <Intro />
    </Flex>
  );
};

export default IndexPage;
