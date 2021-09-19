import {
  Button,
  Flex,
  Box,
  Spacer,
  Heading,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

import Head from "next/head";
// import Link from "next/link";
import Intro from "../components/Intro";
import About from "../components/About";
import Contact from "../components/Contact";
import Card from "../components/Card";
import chitterImg from "../public/chitter.png";

const IndexPage = () => {
  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "600px",
    lg: "850px",
    xl: "1048px",
    "2xl": "1200px",
  });
  const { toggleColorMode } = useColorMode();
  // const formBackground = useColorModeValue("gray.100", "gray.800");
  return (
    <Flex
      pt={"5%"}
      alignItems="center"
      flexDirection="column"
      background={"gray.800"}
    >
      <Head>
        <title>Phil Smithies: Dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box width={"70%"} mb={"20%"}>
        <Intro />
        <About />
        <Flex justifyContent="center" mt={"20%"} mb="15%">
          <Flex direction="column" pt={10}>
            <Box alignSelf="flex-start">
              <Heading
                fontSize={{ sm: "24px", md: "40px", lg: "52px" }}
                mr={{ lg: 10 }}
              >
                View my projects
              </Heading>
              <p>
                All of my projects can be seen{" "}
                <Link color={"teal.400"} href="/projects">
                  here
                </Link>
              </p>
            </Box>
            <Box mt={10}>
              <Card
                imageUrl={"./preview_map.png"}
                imageAlt={"Shuttr - A Photo Location Discovery Application"}
                title={"Shuttr"}
                body={"A Photo Sharing and Location Discovery Application"}
                link={"https://www.github.com/philsmithies/shuttr"}
                react={true}
                javascript={true}
                node={true}
                size={"sm"}
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
              react={true}
              javascript={true}
              node={true}
              size={"sm"}
            />
            <Card
              imageUrl={"./cv_generator.png"}
              imageAlt={"CV Generator - A CV Generator in React"}
              title={"CV Generator"}
              body={"A dynamic CV Generator written in React"}
              link={"https://github.com/philsmithies/cv-generator/"}
              react={true}
              javascript={true}
              size={"sm"}
            />
          </Box>
        </Flex>
        <Contact />
      </Box>
    </Flex>
  );
};

export default IndexPage;
