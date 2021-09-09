import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="info@phil.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input
          placeholder="**********"
          variant="filled"
          mb={6}
          type="password"
        />
        <Button mb={6} colorScheme="teal">
          Log in
        </Button>
        <Button onClick={toggleColorMode}>Toggle Night Mode</Button>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
