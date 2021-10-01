import Head from "next/head";
import Link from "next/link";
import Intro from "../components/Intro";
import About from "../components/About";
import Contact from "../components/Contact";
import Card from "../components/Card";

const IndexPage = () => {
  return (
    <div className="bg-black">
      <div className="pt-5 flex flex-col w-11/12 lg:max-w-screen-2xl place-items-center h-full mx-auto">
        <div className="pt-10">
          <Head>
            <title>Phil Smithies: Dev</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className="mb-15 max-w-7xl">
            <Intro />
            <About />
            <div className="flex flex-col md:flex-row mb-10 lg:ml-10 items-center md:mt-40">
              <div className="flex flex-col pt-10 md:w-1/2 lg:mr-5 items-center">
                <div>
                  <h2 className="text-5xl font-bold lg:mr-10 text-white">
                    View my projects
                  </h2>
                  <p className="text-white ml-2 md:ml-0 mb-10 md:mb-0">
                    All of my projects can be seen{" "}
                    <Link href="/projects" passHref>
                      <span className="text-teal300">here</span>
                    </Link>
                  </p>
                </div>
                <div className="md:mt-10 min-w-min w-96 md:mr-4">
                  <Card
                    imageUrl={"/preview_map.png"}
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
              <div className="flex flex-col md:w-1/2">
                <div className=" min-w-min w-96">
                  <Card
                    imageUrl="/chitter.png"
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
                <div className="min-w-min w-96">
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
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
