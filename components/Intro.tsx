import { useEffect } from "react";
import ButtonBar from "./ButtonBar";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro: React.FunctionComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex pb-3 md:pb-12 max-w-screen-lg mx-auto">
      <div className="pb-5 md:mr-2 lg:mr-10">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <h3 className="text-teal300 text-3xl md:text-4xl font-bold z-10">
            Hi there! I am-
          </h3>
          <h2 className="text-white mb-2 text-5xl md:text-6vw font-bold z-10">
            Phil Smithies.
          </h2>
        </div>
        <h2
          className="text-white text-xl mt-3 mb-3 md:text-2vw xl:text-2xl"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          Full Stack Web Dev. Time Person of the Year 2006.
        </h2>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <h3 className="text-white text-xl mt-3 mb-3 md:text-2vw xl:text-2xl">
            Building modern web applications.
          </h3>
          <h2 className="text-white text-xl md:text-2vw xl:text-2xl mt-5">
            → &nbsp;Currently looking for remote collaboration opportunities.
          </h2>
          <br />
          <h2 className="text-white text-xl md:text-2vw xl:text-2xl">
            → &nbsp; React, Next.js & Node.js.
          </h2>
        </div>
        <div
          data-aos="fade-zoom-out"
          data-aos-delay="400"
          data-aos-duration="2000"
        >
          <ButtonBar />
        </div>
      </div>
    </div>
  );
};

export default Intro;
