import { Badge } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

export default function Card({
  imageUrl,
  imageAlt,
  title,
  link,
  react,
  ruby,
  javascript,
  node,
  body,
  width = "400",
  height = "250",
  position = "top",
}) {
  return (
    <div className="border-grey border-2 rounded w-100 overflow-hidden mb-5 min-h-full">
      <Link href={link} passHref>
        <div className="sm:h-46 md:h-56 w-full cursor-pointer">
          <Image
            src={imageUrl}
            alt={imageAlt}
            objectFit="cover"
            objectPosition={position}
            width={width}
            height={height}
            className="object-cover"
          />
        </div>
      </Link>

      <div className="sm:mt-1 md:mt-4 lg:mt-8 p-3 lg:p-4">
        <div className="font-bold text-white">
          <div className="flex mb-2 justify-between">
            {title}
            <div>
              <Link href={link} passHref>
                <button className="ml-1 inline-flex items-center justify-center h-6 w-6 transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-teal600">
                  <FaGithub className="h-4 w-4" />
                </button>
              </Link>
              <Link href={link} passHref>
                <button className="ml-1 inline-flex items-center justify-center h-6 w-6 transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-teal600">
                  <MdLaunch className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {react && (
          <Badge fontSize="0.8em" colorScheme="green">
            React
          </Badge>
        )}
        {ruby && (
          <Badge fontSize="0.8em" colorScheme="pink">
            Ruby on Rails
          </Badge>
        )}
        {javascript && (
          <Badge ml={react || ruby ? 1 : ""} fontSize="0.8em" colorScheme="red">
            Javascript
          </Badge>
        )}
        {node && (
          <Badge ml="1" fontSize="0.8em" colorScheme="orange">
            Node.JS
          </Badge>
        )}
        <p className="text-white mt-2 md:mt-3 ">{body}</p>
      </div>
    </div>
  );
}
