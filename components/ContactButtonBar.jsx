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
        <button className="mr-2 transition hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center">
          <FaLinkedin className="mr-2 text-teal300" />
          Linkedin
        </button>
      </Link>
      <Link href="mailto:philsmithies@gmail.com" passHref>
        <button className="mr-2 transition hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center">
          <FaEnvelope className="mr-2 text-teal300" />
          Email
        </button>
      </Link>
      <Link href="/cv" passHref>
        <button className="mr-2 transition hover:bg-gray-600 font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center text-white">
          <FaFile className="mr-2 text-teal300" />
          CV
        </button>
      </Link>
    </div>
  );
};

export default ContactButtonBar;
