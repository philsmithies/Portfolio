import profileImage from "../public/profileImage.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:mr-5 items-center">
      <div className="pb-20 md:pb-0 md:mr-2, lg:mr-10">
        <h3 className="mb-5 text-3xl font-bold">About Me</h3>
        <p className="text-white text-xl">
          Hey! I&apos;m Phil Smithies, I&apos;ve been interested in computers
          since I was small. I love building web applications and bringing my
          ideas into a full fledged product.
        </p>
        <br />
        <p className="text-white text-xl">
          I program multiple languages, and have just graduated from{" "}
          <b>Makers Academy</b> - a selective full stack bootcamp. I&apos;m
          interested in building applications in and not limited to <b>React</b>
          , <b>Javascript</b>, Ruby, HTML, CSS.
        </p>
        <br />
        <p className="text-white text-xl">
          I&apos;m a self certified Pho officiando and have been trying to
          perfect my own recipe. 🍜
        </p>
      </div>
      <div className="mt-3 md:mt-0 md:ml-12 max-w-max">
        <Image
          src={profileImage}
          alt="Profile photo"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default About;
