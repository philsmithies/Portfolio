import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";

const ContactButtonBar = () => {
  return (
    <div className="mt-5 flex">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/phil-smithies/"
        passHref
      >
        <button className="mr-2 bg-red hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center">
          <FaLinkedin className="mr-2" />
          Linkedin
        </button>
      </Link>
      <Link href="mailto:philsmithies@gmail.com" passHref>
        <button className="mr-2 bg-red hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center">
          <FaEnvelope className="mr-2" />
          Email
        </button>
      </Link>
      <Link
        href="https://drive.google.com/file/d/1sdhTg7cy4NM-EndOXl0QXX9CxvIG9o3V/view?usp=sharing"
        passHref
      >
        <button className="mr-2 bg-red hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center">
          <FaFile className="mr-2" />
          CV
        </button>
      </Link>
    </div>
  );
};

export default ContactButtonBar;
