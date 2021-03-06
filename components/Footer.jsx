import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative ">
      <div className="pt-5 pb-5 absolute bottom-0 w-full flex flex-col items-center bg-black border-t-2 border-gray-900">
        <div className="flex items-center ">
          <p className="text-white">Developed by&nbsp;</p>
          <Link href="https://github.com/philsmithies" passHref>
            <p className="inline-block text-teal300 hover:text-teal600 cursor-pointer">
              Phil Smithies
            </p>
          </Link>
          <Link href="http://www.github.com/philsmithies" passHref>
            <button className="ml-1 inline-flex items-center justify-center h-6 w-6 transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-teal600">
              <FaGithub className="h-4 w-4 text-white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
