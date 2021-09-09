import {
  Button,
  Flex,
  Box,
  Spacer,
  Text,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Intro = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex p={12} rounded={6} flexDirection={"column"}>
      <Heading color="#1EA1A0" mb={6} as="h3" size="lg">
        Hi there!, I'm-
      </Heading>
      <Heading as="h1" size="4xl">
        Phil Smithies.
      </Heading>
      <Text fontSize="lg">(4xl) In love with React & Next</Text>
    </Flex>
  );
};

export default Intro;
