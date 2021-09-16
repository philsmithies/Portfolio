import { Box, Flex, Heading } from "@chakra-ui/react";
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
      flexDirection={{ sm: "column", md: "row" }}
      mt={10}
    >
      <Box
        mr={{ sm: 0, md: 5, lg: 10 }}
        className={styles.profileText}
        pb={{ sm: "4em" }}
        textAlign={{ sm: "center", md: "left" }}
      >
        <Heading as="h3" mb={5}>
          About Me
        </Heading>
        <p>
          Hey! I&apos;m Phil Smithies, I&apos;ve been interested in computers
          since I was small. I love building web applications and bringing my
          ideas into a full fledged product.
        </p>
        <br />
        <p>
          I program multiple languages, and have just graduated from{" "}
          <b>Makers Academy</b> - a selective full stack bootcamp. I&apos;m
          interested in building applications in and not limited to <b>React</b>
          , <b>Javascript</b>, Ruby, HTML, CSS.
        </p>
        <br />
        <p>
          I&apos;m a Pho officiando and have been trying to perfect my own
          recipe since visiting Vietnam in 2017. 🍜
        </p>
      </Box>
      <Box className={styles.profilePhoto}>
        <Image src={profileImage} alt="Profile photo" />
      </Box>
    </Flex>
  );
};

export default About;
