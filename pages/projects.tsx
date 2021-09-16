import {
  Button,
  Flex,
  Box,
  Spacer,
  Grid,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Intro from "../components/Intro";
import Card from "../components/Card";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const Projects = () => {
  const formBackground = useColorModeValue("gray.100", "gray.800");
  const breakpoints = createBreakpoints({
    sm: "380px",
    md: "500px",
    lg: "850px",
    xl: "1048px",
  });
  return (
    <Flex
      pt={"5%"}
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mb="15%"
      background={formBackground}
    >
      <Grid
        templateColumns={{
          sm: "repeat(1, 380px)",
          md: "repeat(1, 430px)",
          lg: "repeat(2, 380px)",
        }}
        templateRows={{ sm: "200px", md: "250px" }}
        gap={5}
      >
        <Head>
          <title>Projects</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Flex maxHeight="420px" justifyContent="center" alignItems="center">
          <Heading color="teal.100">My Projects</Heading>
        </Flex>
        <Card
          imageUrl={"./preview_map.png"}
          imageAlt={"Shuttr - A Photo Location Discovery Application"}
          title={"Shuttr"}
          body={"A Photo Sharing and Location Discovery Application"}
          link={"https://www.github.com/philsmithies/shuttr"}
          react={true}
          javascript={true}
          node={true}
        />

        <Card
          imageUrl="./chitter.png"
          imageAlt={"Chitter - A Twitter Clone"}
          title={"Chitter"}
          body={"A Social Media Clone"}
          link={"https://www.github.com/philsmithies/chitter-react"}
          react={true}
          javascript={true}
          node={true}
        />
        <Card
          imageUrl={"./cv_generator.png"}
          imageAlt={"CV Generator - A CV Generator in React"}
          title={"CV Generator"}
          body={"A dynamic CV Generator written in React"}
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
        <Card
          imageUrl={"./tictactoe.png"}
          imageAlt={"Tic Tac Toe"}
          title={"Tic Tac Toe"}
          body={"TDD Game of the coding students favourite."}
          link={"https://github.com/philsmithies/tictactoe/"}
          javascript={true}
        />
      </Grid>
    </Flex>
  );
};

export default Projects;
