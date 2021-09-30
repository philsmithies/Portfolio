import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative ">
      <div className="pt-6 absolute bottom-0 w-full pb-5 flex flex-col items-center bg-gray-900">
        <div className="flex items-center ">
          Developed by&nbsp;
          <Link href="https://github.com/philsmithies" passHref>
            <p className="inline-block text-teal300 hover:text-teal600 cursor-pointer">
              Phil Smithies
            </p>
          </Link>
          <Link href="http://www.github.com/philsmithies" passHref>
            <button className="ml-1 inline-flex items-center justify-center h-6 w-6 transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-teal600">
              <FaGithub className="h-4 w-4" />
            </button>
          </Link>
        </div>
        <div className="flex">
          <p className="text-white">
            Built with{" "}
            <Link className="text-teal300" href="https://nextjs.org/" passHref>
              <p className="inline-block text-teal300 hover:text-teal600 cursor-pointer">
                Next JS.
              </p>
            </Link>
            <span> & </span>
            <Link href="https://tailwindcss.com/" passHref>
              <p className="inline-block text-teal300 hover:text-teal600 cursor-pointer">
                Tailwind CSS.
              </p>
            </Link>
            Hosted on{" "}
            <Link className="text-teal300" href="https://vercel.com/" passHref>
              <p className="inline-block text-teal300 hover:text-teal600 cursor-pointer">
                Vercel
              </p>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
