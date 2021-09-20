import { Flex, Box, Text } from "@chakra-ui/layout";
import { Link, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";

const Footer = () => {
  const buttonColor = "white";
  const backgroundColor = "gray.900";

  return (
    <Box position="relative">
      <Flex
        mt={10}
        pt={5}
        position="absolute"
        bottom="0"
        width="100%"
        pb={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor={backgroundColor}
      >
        <Flex justifyContent="center" color="white" alignItems="center">
          Developed by&nbsp;
          <Link color="teal.300" href="https://github.com/philsmithies">
            Phil Smithies
          </Link>
          <Link href="http://www.github.com/philsmithies">
            <IconButton
              backgroundColor={backgroundColor}
              aria-label="Github"
              size="sm"
              _hover={{
                cursor: "pointer",
                color: "teal.300",
              }}
              icon={<FaGithub />}
            />
          </Link>
        </Flex>
        <Text color="white">
          Built with{" "}
          <Link color="teal.300" href="https://nextjs.org/">
            Next.js
          </Link>
          <span> & </span>
          <Link color="teal.300" href="https://chakra-ui.com/">
            Chakra UI
          </Link>
          . Hosted on{" "}
          <Link color="teal.300" href="https://vercel.com/">
            Vercel
          </Link>
          .
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
