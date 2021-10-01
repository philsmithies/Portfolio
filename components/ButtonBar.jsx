import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ButtonBar = () => {
  return (
    <div className="mt-5 flex">
      <Link
        href="https://www.github.com/philsmithies"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <button className="mr-2 bg-gray-900 transition duration-300 hover:bg-gray-700 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center">
          <FaGithub className="mr-2" />
          Github
        </button>
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/phil-smithies/"
        passHref
      >
        <button className="mr-2 bg-gray-900 transition duration-300 hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center">
          <FaLinkedin className="mr-2" />
          Linkedin
        </button>
      </Link>
      <Link href="mailto:philsmithies@gmail.com" passHref>
        <button className="mr-2 bg-gray-900 transition duration-300 hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow flex items-center">
          <FaEnvelope className="mr-2" />
          Email
        </button>
      </Link>
    </div>
  );
};

export default ButtonBar;
