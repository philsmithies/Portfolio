import {
  Button,
  Flex,
  Box,
  Spacer,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Head from "next/head";
import Intro from "../components/Intro";
import About from "../components/About";
import Contact from "../components/Contact";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.800");
  return (
    <Flex
      mt={"10%"}
      height="100vh"
      alignItems="center"
      flexDirection="column"
      background={formBackground}
    >
      <Head>
        <title>Phil Smithies: Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box maxWidth="1200px">
        <Intro />
        <About />
        <Contact />
      </Box>
    </Flex>
  );
};

export default IndexPage;
