import ContactButtonBar from "./ContactButtonBar";

const Contact = () => {
  return (
    <div className="flex flex-col mx-auto items-center p-8 md:pt-8 md:pb-8 mb-40 w-10/12 max-w-3xl border-2 border-white rounded-lg">
      <h2 className="pb-5 text-white font-bold text-3xl">Get in touch.</h2>
      <p className="text-white text-center">
        Full Stack Developer looking for roles in React and Javascript
        frameworks.
      </p>
      <ContactButtonBar />
    </div>
  );
};

export default Contact;
