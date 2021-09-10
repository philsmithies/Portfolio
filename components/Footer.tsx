import { Flex } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";

const Footer = () => {
  return (
    <Flex
      pt={5}
      pb={5}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <p>
        Developed by Phil Smithies.{" "}
        <Link href="http://www.github.com/philsmithies">
          <IconButton aria-label="Github" size="sm" icon={<FaGithub />} />
        </Link>
      </p>
      <p>
        Built with{" "}
        <Link color="#1EA1A0" href="https://nextjs.org/">
          Next.js
        </Link>
        <span> & </span>
        <Link color="#1EA1A0" href="https://chakra-ui.com/">
          Chakra UI
        </Link>
        . Hosted on{" "}
        <Link color="#1EA1A0" href="https://vercel.com/">
          Vercel
        </Link>
        .
      </p>
    </Flex>
  );
};

export default Footer;
