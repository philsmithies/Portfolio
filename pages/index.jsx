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
import Card from "../components/Card";
import chitterImg from "../public/chitter.png";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.800");
  return (
    <Flex
      pt={"10%"}
      alignItems="center"
      flexDirection="column"
      background={formBackground}
    >
      <Head>
        <title>Phil Smithies: Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box maxWidth="1200px" mb={"15%"}>
        <Intro />
        <About />
        <Flex justifyContent="center" mt={20}>
          <Flex direction="column" pt={10}>
            <Box alignSelf="flex-start">
              <Heading>View my projects</Heading>
              <p>All of my projects can be seen here</p>
            </Box>
            <Box mt={10}>
              <Card
                imageUrl={"./preview_map.png"}
                imageAlt={"Shuttr - A Photo Location Discovery Application"}
                title={"Shuttr"}
                body={"A Photo Sharing and Location Discovery Application"}
                link={"https://www.github.com/philsmithies/shuttr"}
              />
            </Box>
          </Flex>
          <Box ml={6}>
            <Card
              imageUrl="./chitter.png"
              imageAlt={"Chitter - A Twitter Clone"}
              title={"Chitter"}
              body={"A Social Media Clone"}
              link={"https://www.github.com/philsmithies/chitter-react"}
            />
            <Card
              imageUrl={"./cv_generator.png"}
              imageAlt={"asda - A Photo Location Discovery Application"}
              title={"CV Generator"}
              body={"A Photo Sharing and Location Discovery Application"}
              link={"https://www.github.com/philsmithies/shuttr"}
              react={true}
              javascript={true}
              node={true}
            />
          </Box>
        </Flex>
        <Contact />
      </Box>
    </Flex>
  );
};

export default IndexPage;
