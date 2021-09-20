import {
  Button,
  Flex,
  Box,
  Text,
  Image,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import ButtonBar from "./ButtonBar";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { useMediaQuery } from "@chakra-ui/media-query";

const Intro = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = "gray.700";
  const fontColor = "white";

  const isSmallerScreen = useMediaQuery({
    query: "(max-width:600px)",
  });

  return (
    <Flex pb={12} rounded={6} flexDirection={"column"}>
      <Box mr={{ sm: 0, md: 2, lg: 10 }} pb={{ sm: "2em" }}>
        <Heading color="teal.300" mb={1} as="h3" size="lg">
          Hi there! I am-
        </Heading>
        <Heading mb={2} fontSize={!isSmallerScreen ? "3em" : "3.5em"}>
          Phil Smithies.
        </Heading>
        <Text fontSize="2xl">
          Full Stack Web Developer.{" "}
          <Text color={fontColor}>
            React & Node.JS. Specializing in building clean and stylish web
            applications.
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
      </Box>
    </Flex>
  );
};

export default Intro;
