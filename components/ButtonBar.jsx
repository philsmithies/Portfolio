import { Button, Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ButtonBar = () => {
  const isSmallerScreen = useMediaQuery({
    query: "(max-width:600px)",
  });

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
          color="white"
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
          color="white"
        >
          Linkedin
        </Button>
      </Link>
      <Link href="mailto:philsmithies@gmail.com">
        <Button
          mt={!isSmallerScreen ? 0 : 3}
          backgroundColor={"gray.900"}
          leftIcon={<FaEnvelope />}
          variant="solid"
          color="white"
        >
          Email
        </Button>
      </Link>
    </Box>
  );
};

export default ButtonBar;
