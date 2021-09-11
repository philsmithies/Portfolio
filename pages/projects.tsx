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
import Card from "../components/Card";

const Projects = () => {
  const formBackground = useColorModeValue("gray.100", "gray.800");
  return (
    <Flex
      pt={"5%"}
      alignItems="center"
      flexDirection="column"
      background={formBackground}
    >
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading>My Projects</Heading>

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
        />
      </Box>
      <Box ml={6} mb={"10%"}>
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
      </Box>
    </Flex>
  );
};

export default Projects;
