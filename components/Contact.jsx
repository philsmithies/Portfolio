import { useEffect } from "react";
import ContactButtonBar from "./ContactButtonBar";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col mx-auto items-center p-8 md:pt-8 md:pb-8 mb-40 w-10/12 max-w-3xl border-2 border-white rounded-lg">
      <h2 className="pb-5 text-white font-bold text-3xl">Get in touch.</h2>
      <p className="text-white text-center">
        Full Stack Developer looking for roles in React and Javascript
        frameworks.
      </p>
      <div
        data-aos="fade-zoom-out"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <ContactButtonBar />
      </div>
    </div>
  );
};

export default Contact;
