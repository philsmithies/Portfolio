import {
  Button,
  Flex,
  Text,
  Box,
  Spacer,
  Heading,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

import Head from "next/head";
import Intro from "../components/Intro";
import About from "../components/About";
import Contact from "../components/Contact";
import Card from "../components/Card";

const IndexPage = () => {
  // const isSmallerScreen = useMediaQuery({
  //   query: "(max-width:600px)",
  // });

  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "600px",
    lg: "850px",
    xl: "1048px",
  });

  const [isSmallerScreen] = useMediaQuery(`(max-width: 600px)`);

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
      <Box width={!isSmallerScreen ? "80%" : "90%"} maxWidth="800px" mb={"20%"}>
        <Intro />
        <About />

        <Flex
          direction={!isSmallerScreen ? "row" : "column"}
          justifyContent="center"
          alignItems="center"
          mt={"10%"}
          mb="15%"
        >
          <Flex direction="column" pt={10}>
            <Box alignSelf="flex-start">
              <Heading
                fontSize={!isSmallerScreen ? "52px" : "35px"}
                mr={!isSmallerScreen ? 10 : 0}
                color="white"
              >
                View my projects
              </Heading>
              <Text color="white">
                All of my projects can be seen{" "}
                <Link color={"teal.400"} href="/projects">
                  here
                </Link>
              </Text>
            </Box>
            <Box mt={{ sm: 0, md: 10 }}>
              <Card
                imageUrl={"./preview_map.png"}
                imageAlt={"Shuttr - A Photo Location Discovery Application"}
                title={"Shuttr"}
                body={
                  "A Photo Sharing and Location Discovery Application combining the Google Maps API with image sharing."
                }
                link={"https://www.github.com/philsmithies/shuttr"}
                react={true}
                javascript={true}
                node={true}
                size={!isSmallerScreen ? "md" : "sm"}
              />
            </Box>
          </Flex>
          <Flex direction="column" ml={!isSmallerScreen ? "1em" : 0}>
            <Box>
              <Card
                imageUrl="./chitter.png"
                imageAlt={"Chitter - A Twitter Clone"}
                title={"Chitter"}
                body={
                  "A Popular Social Media Clone built using the MERN Stack."
                }
                link={"https://www.github.com/philsmithies/chitter-react"}
                react={true}
                javascript={true}
                node={true}
                size={!isSmallerScreen ? "md" : "sm"}
              />
            </Box>
            <Box>
              <Card
                imageUrl={"./cv_generator.png"}
                imageAlt={"CV Generator"}
                title={"CV Generator"}
                body={
                  "A dynamic CV Generator written in React, written utilizing React Hooks"
                }
                link={"https://github.com/philsmithies/cv-generator/"}
                react={true}
                javascript={true}
                size={!isSmallerScreen ? "md" : "sm"}
              />
            </Box>
          </Flex>
        </Flex>
        <Contact />
      </Box>
    </Flex>
  );
};

export default IndexPage;
