import {
  Box,
  Flex,
  IconButton,
  Image,
  Badge,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/layout";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

export default function Card(props) {
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      maxW="450"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt={5}
    >
      <Link href={props.link}>
        <Image
          height="195px"
          width="100%"
          object-fit="cover"
          src={props.imageUrl}
          alt={props.imageAlt}
        />
      </Link>
      <Box p="5">
        <Box fontWeight="semibold" as="h4" lineHeight="tight">
          <Flex alignItems="center">
            {props.title}
            <Spacer />
            <Link href={props.link}>
              <IconButton
                backgroundColor={backgroundColor}
                aria-label="Github"
                size="sm"
                icon={<FaGithub />}
              />
            </Link>
            <Link href={props.link}>
              <IconButton
                backgroundColor={backgroundColor}
                aria-label="Launch"
                size="sm"
                icon={<MdLaunch />}
              />
            </Link>
          </Flex>
        </Box>
        {props.react && (
          <Badge fontSize="0.8em" colorScheme="green">
            React
          </Badge>
        )}
        {props.ruby && (
          <Badge fontSize="0.8em" colorScheme="pink">
            Ruby on Rails
          </Badge>
        )}
        {props.javascript && (
          <Badge
            ml={props.react || props.ruby ? 1 : ""}
            fontSize="0.8em"
            colorScheme="red"
          >
            Javascript
          </Badge>
        )}
        {props.node && (
          <Badge ml="1" fontSize="0.8em" colorScheme="orange">
            Node.JS
          </Badge>
        )}
        <Box mt={2}>{props.body}</Box>
      </Box>
    </Box>
  );
}
