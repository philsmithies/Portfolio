import {
  Button,
  Flex,
  Box,
  Spacer,
  useMediaQuery,
  Text,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ButtonBar from "./ButtonBar";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const Intro = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const fontColor = useColorModeValue("grey", "white");
  const breakpoints = createBreakpoints({
    sm: "300px",
    md: "480px",
    lg: "800px",
    xl: "1048px",
    "2xl": "1200px",
  });

  return (
    <Flex pb={12} rounded={6} flexDirection={"column"}>
      <Heading color="teal.300" mb={1} as="h3" size="lg">
        Hi there! I am-
      </Heading>
      <Heading
        as="h1"
        mb={2}
        fontSize={{ sm: "3.8em", md: "4.25em", lg: "5.6em" }}
      >
        Phil Smithies.
      </Heading>
      <Text fontSize="2xl">
        Full Stack Web Developer.{" "}
        <Text color={fontColor}>
          Specializing in building clean, and engaging applications on the web.
        </Text>
      </Text>
      <br />
      <Text color={fontColor} fontSize="large">
        → &nbsp;Currently building a <strong>language learning</strong>{" "}
        application in React Native.
      </Text>
      <br />
      <Text color={fontColor} fontSize="large">
        → &nbsp;Makers Academy Alumni
      </Text>
      <ButtonBar />
    </Flex>
  );
};

export default Intro;
