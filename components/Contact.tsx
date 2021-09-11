import { Flex, Heading, Box } from "@chakra-ui/layout";
import ContactButtonBar from "./ContactButtonBar";

const Contact = () => {
  return (
    <Flex alignItems="center" flexDirection="column" pt={"11%"}>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding="4em"
        flexDirection="column"
        border="1px"
        borderColor="white"
        borderRadius="10px"
      >
        <Heading>Get in touch.</Heading>
        <p>
          Full Stack Developer looking for roles in React and other Javascript
          frameworks.
        </p>
        <ContactButtonBar />
      </Flex>
    </Flex>
  );
};

export default Contact;
