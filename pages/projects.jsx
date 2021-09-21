import {
  Flex,
  Grid,
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Intro from "../components/Intro";
import Card from "../components/Card";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { useMediaQuery } from "@chakra-ui/react";

const Projects = () => {
  const formBackground = "gray.800";
  const breakpoints = createBreakpoints({
    sm: "380px",
    md: "500px",
    lg: "850px",
  });

  const [isSmallerScreen] = useMediaQuery(`(max-width: 380px)`);

  return (
    <Flex alignItems="center" flexDirection="column" background={"gray.800"}>
      <Grid
        maxWidth="90%"
        templateColumns={{
          sm: "360px",
          lg: "repeat(2, 380px)",
        }}
        templateRows={{
          sm: "100px",
          lg: "repeat(3, 430px)",
        }}
        gap={6}
        pt={!isSmallerScreen ? "9%" : "15%"}
        pb={!isSmallerScreen ? "20%" : "30%"}
      >
        <Head>
          <title>Projects</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Flex justifyContent="center" alignItems="center">
          <Heading color="teal.100">My Projects</Heading>
        </Flex>

        <Card
          imageUrl={"./preview_map.png"}
          imageAlt={"Shuttr - A Photo Location Discovery Application"}
          title={"Shuttr"}
          body={
            "A Photo Sharing and Location Discovery Application using the Google Maps API."
          }
          link={"https://www.github.com/philsmithies/shuttr"}
          react={true}
          javascript={true}
          node={true}
        />

        <Card
          imageUrl="./chitter.png"
          imageAlt={"Chitter - A Twitter Clone"}
          title={"Chitter"}
          body={"A Popular Social Media Clone built using the MERN Stack."}
          link={"https://www.github.com/philsmithies/chitter-react"}
          react={true}
          javascript={true}
          node={true}
        />
        <Card
          imageUrl={"./cv_generator.png"}
          imageAlt={"CV Generator - A CV Generator in React"}
          title={"CV Generator"}
          body={
            "A dynamic CV Generator written in React, written utilizing React Hooks"
          }
          link={"https://github.com/philsmithies/cv-generator/"}
          react={true}
          javascript={true}
        />
        <Card
          imageUrl={"./bookface.jpg"}
          imageAlt={"Bookface"}
          title={"Bookface"}
          body={
            "A full-stack web app inspired by the functionality of Facebook."
          }
          link={"https://github.com/philsmithies/acebook-team-smiley-face"}
          ruby={true}
          javascript={true}
        />
      </Grid>
    </Flex>
  );
};

export default Projects;
