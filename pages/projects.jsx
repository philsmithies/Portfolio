import { useEffect } from "react";
import Head from "next/head";
import Card from "../components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black pt-10">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-white text-4xl mb-10 mx-auto">PROJECTS</h2>
        <Head>
          <title>Projects</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <div
          data-aos="fade"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="h-full mb-36 lg:mb-36 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 lg:grid-flow-row-dense border-white max-w-7xl"
        >
          <div className="min-w-min w-96">
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
          </div>
          <div className="min-w-min w-96 mt-5 lg:mt-0">
            <Card
              imageUrl={"/maelys-home-wide.png"}
              imageAlt={"Maelys Portfolio"}
              title={"Maëlys Chay - Illustration Portfolio"}
              body={
                "An illustrators portfolio built using Next.js & Typescript 🎨 Sanity.io Headless CMS. Tailwind CSS."
              }
              link={"https://github.com/philsmithies/maelys_portfolio"}
              react={true}
              javascript={true}
              node={true}
              position={"bottom"}
            />
          </div>
          <div className="min-w-min w-96 mt-5 lg:mt-0">
            <Card
              imageUrl={"/sport-team.png"}
              imageAlt={"Sport Team"}
              title={"Sport Team"}
              body={
                "Sport Team coaching interface, using Typescript, GraphQL and Next.js."
              }
              link={"https://github.com/philsmithies/sport-team/"}
              react={true}
              javascript={true}
            />
          </div>
          <div className="min-w-min w-96 mt-5 lg:mt-0">
            <Card
              imageUrl="/gated-home-wide.png"
              imageAlt={"Gated Records"}
              title={"Gated Records"}
              body={
                "Gated Records - Record Label E-Commerce built using Typescript and Next.js"
              }
              link={"https://github.com/philsmithies/gated-recs-next-js"}
              react={true}
              javascript={true}
              node={true}
            />
          </div>
          <div className="min-w-min w-96 mt-5 lg:mt-0">
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
    </div>
  );
};

export default Projects;
