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

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ButtonBar = () => {
  return (
    <ButtonGroup mt={5}>
      <Button leftIcon={<FaGithub />} variant="solid">
        Github
      </Button>
      <Button leftIcon={<FaLinkedin />} variant="solid">
        Linkedin
      </Button>
      <Button leftIcon={<FaEnvelope />} variant="solid">
        Email
      </Button>
    </ButtonGroup>
  );
};

export default ButtonBar;
