import { Flex, Heading, Box, Text } from "@chakra-ui/layout";
import ContactButtonBar from "./ContactButtonBar";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { useMediaQuery } from "@chakra-ui/react";

const Contact = () => {
  const breakpoints = createBreakpoints({
    sm: "300px",
    md: "480px",
    lg: "800px",
    xl: "1048px",
    "2xl": "1200px",
  });

  const [isSmallerScreen] = useMediaQuery(`(max-width: 380px)`);

  return (
    <Flex alignItems="center" flexDirection="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        padding="4em"
        flexDirection="column"
        border={{ sm: 0, md: "1px" }}
        borderColor="white"
        borderRadius="10px"
        mb={!isSmallerScreen ? "5%" : "30%"}
      >
        <Heading pb={5} color="white">
          Get in touch.
        </Heading>
        <Text color="white">
          Full Stack Developer looking for roles in React and other Javascript
          frameworks.
        </Text>
        <ContactButtonBar />
      </Flex>
    </Flex>
  );
};

export default Contact;
