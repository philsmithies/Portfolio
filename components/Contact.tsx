import { Flex, Heading } from "@chakra-ui/layout";
import ContactButtonBar from "./ContactButtonBar";

const Contact = () => {
  return (
    <Flex alignItems="center" flexDirection="column" pt={"11%"}>
      <Heading>Get in touch.</Heading>
      <p>
        Full Stack Developer looking for roles in React and other Javascript
        frameworks.
      </p>
      <ContactButtonBar />
    </Flex>
  );
};

export default Contact;
