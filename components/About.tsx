import { Box, Flex, Heading } from "@chakra-ui/react";
import profileImage from "../public/profileImage.jpg";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      mt={20}
    >
      <Box mr={10} className={styles.profileText}>
        <Heading as="h3" mb={5}>
          📣 About Me
        </Heading>
        <p>
          Hey! I'm Phil Smithies, I've been interested in computers since I was
          small. I love building web applications and bringing my ideas into a
          full fledged product.
        </p>
        <br />
        <p>
          I program multiple languages, and have just graduated from Makers
          Academy - a selective full stack bootcamp. I'm interested in building
          applications in and not limited to React, Javascript, Ruby, HTML, CSS.
        </p>
        <br />
        <p>
          I'm a Pho officiando and have been trying to perfect my own recipe
          since visiting Vietnam in 2017. 🍜
        </p>
      </Box>
      <Box className={styles.profilePhoto}>
        <Image src={profileImage} alt="Profile photo" />
      </Box>
    </Flex>
  );
};

export default About;
