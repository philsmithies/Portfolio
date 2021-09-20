import { Button, Box, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { Link } from "@chakra-ui/layout";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ButtonBar = () => {
  const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <Box mt="5">
      <Link
        href="https://www.github.com/philsmithies"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          mr="2"
          backgroundColor={"gray.900"}
          leftIcon={<FaGithub />}
          variant="solid"
        >
          Github
        </Button>
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/phil-smithies/"
      >
        <Button
          mr="2"
          backgroundColor={"gray.900"}
          leftIcon={<FaLinkedin />}
          variant="solid"
        >
          Linkedin
        </Button>
      </Link>
      <Link href="mailto:philsmithies@gmail.com">
        <Button
          backgroundColor={"gray.900"}
          leftIcon={<FaEnvelope />}
          variant="solid"
        >
          Email
        </Button>
      </Link>
    </Box>
  );
};

export default ButtonBar;
