import ContactButtonBar from "./ContactButtonBar";

const Contact = () => {
  return (
    <div className="flex flex-col mx-auto items-center pt-8 pb-8 w-10/12 border-2 border-white rounded-lg">
      <h2 className="pb-5 text-white font-bold text-3xl">Get in touch.</h2>
      <p className="text-white text-center">
        Full Stack Developer looking for roles in React
        <br />
        and Javascript frameworks.
      </p>
      <ContactButtonBar />
    </div>
  );
};

export default Contact;
