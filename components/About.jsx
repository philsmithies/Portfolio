import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import profileImage from "../public/profileImage.jpg";
import Image from "next/image";
import styles from "../styles/About.module.css";

import { createBreakpoints } from "@chakra-ui/theme-tools";

const About = () => {
  const breakpoints = createBreakpoints({
    sm: "300px",
    md: "600px",
    lg: "850px",
    xl: "1048px",
    "2xl": "1200px",
  });

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection={{ sm: "column", lg: "row" }}
      mt={{ sm: 0, md: 10 }}
      mr={{ md: 5 }}
    >
      <Box
        mr={{ sm: 0, md: 2, lg: 10 }}
        className={styles.profileText}
        pb={{ sm: "4em" }}
      >
        <Heading as="h3" mb={5}>
          About Me
        </Heading>
        <Text fontSize={{ sm: "1.2em", md: "1.3em" }}>
          Hey! I&apos;m Phil Smithies, I&apos;ve been interested in computers
          since I was small. I love building web applications and bringing my
          ideas into a full fledged product.
        </Text>
        <br />
        <Text fontSize={{ sm: "1.2em", md: "1.3em" }}>
          I program multiple languages, and have just graduated from{" "}
          <b>Makers Academy</b> - a selective full stack bootcamp. I&apos;m
          interested in building applications in and not limited to <b>React</b>
          , <b>Javascript</b>, Ruby, HTML, CSS.
        </Text>
        <br />
        <Text fontSize={{ sm: "1.2em", md: "1.3em" }}>
          I&apos;m a Pho officiando and have been trying to perfect my own
          recipe since visiting Vietnam in 2017. 🍜
        </Text>
      </Box>
      <Box
        maxWidth={{ sm: "150px", md: "250px" }}
        className={styles.profilePhoto}
      >
        <Image src={profileImage} alt="Profile photo" />
      </Box>
    </Flex>
  );
};

export default About;
