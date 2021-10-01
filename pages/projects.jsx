import Head from "next/head";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="bg-black pt-10">
      <div className="flex flex-col items-center">
        <Head>
          <title>Projects</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h2 className="text-teal300 text-4xl mb-10">RECENT PROJECTS</h2>
        <div className="h-full w-8/12 mb-36 lg:mb-40 flex flex-col lg:grid lg:grid-flow-col lg:grid-rows-3 lg:gap-4 border-white justify-evenly min-w-min max-w-sm lg:max-w-3xl">
          <Card
            imageUrl={"/preview_map.png"}
            imageAlt={"Shuttr - A Photo Location Discovery Application"}
            title={"Shuttr"}
            body={
              "A Photo Sharing and Location Discovery Application using the Google Maps API."
            }
            link={"https://www.github.com/philsmithies/shuttr"}
            react={true}
            javascript={true}
            node={true}
          />

          <Card
            imageUrl="/chitter.png"
            imageAlt={"Chitter - A Twitter Clone"}
            title={"Chitter"}
            body={"A Popular Social Media Clone built using the MERN Stack."}
            link={"https://www.github.com/philsmithies/chitter-react"}
            react={true}
            javascript={true}
            node={true}
          />

          <Card
            imageUrl={"/cv_generator.png"}
            imageAlt={"CV Generator - A CV Generator in React"}
            title={"CV Generator"}
            body={
              "A dynamic CV Generator written in React, written utilizing React Hooks"
            }
            link={"https://github.com/philsmithies/cv-generator/"}
            react={true}
            javascript={true}
          />
          <Card
            imageUrl={"/bookface.jpg"}
            imageAlt={"Bookface"}
            title={"Bookface"}
            body={
              "A full-stack web app inspired by the functionality of Facebook."
            }
            link={"https://github.com/philsmithies/acebook-team-smiley-face"}
            ruby={true}
            javascript={true}
          />
          <Card
            imageUrl={"/clockapp.png"}
            imageAlt={"ClockApp"}
            title={"Clock App"}
            body={
              "A mobile first Clock App complete with CSS animations and API calls. Built in Next.JS and with TailwindCSS"
            }
            link={"https://github.com/philsmithies/clockapp"}
            react={true}
            javascript={true}
            position={"bottom"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
