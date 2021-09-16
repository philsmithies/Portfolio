import {
  Button,
  ButtonGroup,
  IconButton,
  Flex,
  Box,
  Spacer,
  Text,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/layout";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ButtonBar = () => {
  const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <ButtonGroup mt={5}>
      <Link
        href="https://www.github.com/philsmithies"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
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
    </ButtonGroup>
  );
};

export default ButtonBar;
