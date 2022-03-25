import profileImage from "../public/profileImage.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col mx-auto md:flex-row items-center max-w-screen-lg mt-10 md:mt-20">
      <div className="pb-20 md:pb-0 md:mr-2 md:max-w-1/2">
        <h3 className="mb-5 text-3xl font-bold text-white">About Me</h3>
        <p className="text-white text-xl font-light">
          Hey! I&apos;m Phil Smithies - France based Brit. I love building web
          applications and bringing my ideas into a full fledged product.
        </p>
        <br />
        <p className="text-white text-xl font-light">
          React is in everything and I specialise in using the JAMstack to
          create quick, fluid and modern websites. I currently ♡ building
          applications in and not limited to{" "}
          <span className="text-teal300">Javascript</span>,{" "}
          <span className="text-teal300">Typescript</span>,{" "}
          <span className="text-teal300">React</span>, Ruby, HTML, CSS.
        </p>
      </div>
      <div className="mt-3 h-96 md:mt-0 max-w-1/2 sm:max-w-xs md:max-w-1/4 md:ml-5 ">
        <div className="absolute ml-20 sm:ml-64 md:ml-20 w-36 sm:w-40 lg:w-60 md:max-w-1/2 opacity-80 z-0 overflow-hidden">
          <Image width="400" height="400" src="/dots.svg" alt="Dots" />
        </div>
        <div className="mt-8">
          <Image
            src={profileImage}
            alt="Profile photo"
            className="rounded-full z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
