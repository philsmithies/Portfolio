import {
  Flex,
  Text,
  Box,
  Heading,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import Head from "next/head";
import Intro from "../components/Intro";
import About from "../components/About";
import Contact from "../components/Contact";
import Card from "../components/Card";

const IndexPage = () => {
  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "600px",
    lg: "850px",
    xl: "1048px",
  });

  const [isSmallerScreen] = useMediaQuery(`(max-width: 425px)`);

  return (
    <div className="bg-gray-800 pt-5 flex flex-col w-full place-items-center h-full">
      <div className="pt-10">
        <Head>
          <title>Phil Smithies: Dev</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="mb-15 max-w-3xl">
          <Intro />
          <About />
          <div className="flex mb-10 items-center mt-10">
            <div className="flex flex-col pt-10 md:mr-10">
              <div>
                <h2 className="text-5xl font-bold md:mr-10 text-white">
                  View my projects
                </h2>
                <p className="text-white">
                  All of my projects can be seen{" "}
                  <Link href="/projects">
                    <p className="text-teal300">here</p>
                  </Link>
                </p>
              </div>
              <div className="md:mt-5">
                <Card
                  imageUrl={"./preview_map.png"}
                  imageAlt={"Shuttr - A Photo Location Discovery Application"}
                  title={"Shuttr"}
                  body={
                    "A Photo Sharing and Location Discovery Application combining the Google Maps API with image sharing."
                  }
                  link={"https://www.github.com/philsmithies/shuttr"}
                  react={true}
                  javascript={true}
                  node={true}
                />
              </div>
            </div>
            <div className="flex flex-col md:mr-10">
              <div>
                <Card
                  imageUrl="./chitter.png"
                  imageAlt={"Chitter - A Twitter Clone"}
                  title={"Chitter"}
                  body={
                    "A Popular Social Media Clone built using the MERN Stack."
                  }
                  link={"https://www.github.com/philsmithies/chitter-react"}
                  react={true}
                  javascript={true}
                  node={true}
                />
              </div>
              <div>
                <Card
                  imageUrl={"./cv_generator.png"}
                  imageAlt={"CV Generator"}
                  title={"CV Generator"}
                  body={
                    "A dynamic CV Generator written in React, written utilizing React Hooks"
                  }
                  link={"https://github.com/philsmithies/cv-generator/"}
                  react={true}
                  javascript={true}
                />
              </div>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
