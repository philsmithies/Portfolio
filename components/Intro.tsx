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
  const fontColor = useColorModeValue("grey", "white");

  return (
    <Flex p={12} rounded={6} flexDirection={"column"}>
      <Heading color="#1EA1A0" mb={1} as="h3" size="lg">
        Hi there!, I'm-
      </Heading>
      <Heading as="h1" mb={2} size="4xl">
        Phil Smithies.
      </Heading>
      <Text fontSize="2xl">
        Full Stack Web Developer.{" "}
        <Text color={fontColor}>
          Specialising in building clean, and engaging applications on the web.
        </Text>
      </Text>
      <br />
      <Text fontSize="2xl">🚀 Currently working on this portfolio....</Text>
      <br />
      <Text fontSize="2xl">🌱 Makers Academy Alumni</Text>
    </Flex>
  );
};

export default Intro;
