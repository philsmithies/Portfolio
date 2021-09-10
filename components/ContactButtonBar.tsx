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

import { FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";

const ContactButtonBar = () => {
  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <ButtonGroup mt={5}>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/phil-smithies/"
      >
        <Button
          backgroundColor={backgroundColor}
          leftIcon={<FaLinkedin />}
          variant="solid"
        >
          Linkedin
        </Button>
      </Link>
      <Link href="mailto:philsmithies@gmail.com">
        <Button
          backgroundColor={backgroundColor}
          leftIcon={<FaEnvelope />}
          variant="solid"
        >
          Email
        </Button>
      </Link>
      <Link href="https://drive.google.com/file/d/1sdhTg7cy4NM-EndOXl0QXX9CxvIG9o3V/view?usp=sharing">
        <Button
          backgroundColor={backgroundColor}
          leftIcon={<FaFile />}
          variant="solid"
        >
          CV
        </Button>
      </Link>
    </ButtonGroup>
  );
};

export default ContactButtonBar;
