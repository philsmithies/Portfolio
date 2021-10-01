import { Text } from "@chakra-ui/react";
import ButtonBar from "./ButtonBar";

const Intro = () => {
  return (
    <div className="flex pb-3 md:pb-12">
      <div className="pb-5 md:mr-2 lg:mr-10">
        <h3 className="text-teal300 text-3xl font-bold">Hi there! I am-</h3>
        <h2 className="text-white mb-2 text-5xl font-bold">Phil Smithies.</h2>
        <h2 className="text-3xl">Full Stack Web Dev.</h2>
        <h3 className="text-white mt-3 mb-3">
          React & Node.JS. Specializing in building clean and stylish web
          applications.
        </h3>
        <h2 className="text-white text-xl mt-5">
          → &nbsp;Currently building a <strong>language learning</strong>{" "}
          application in React Native.
        </h2>
        <br />
        <h2 className="text-white text-xl">→ &nbsp;Makers Academy Alumni</h2>
        <ButtonBar />
      </div>
    </div>
  );
};

export default Intro;
