import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-900 flex flex-row items-center justify-between">
      <div>
        <Link href="/" passHref>
          <h2
            className="text-5xl font-bold text-yellow-400 font-body ml-6 cursor-auto text-red-300"
            // _hover={{
            //   cursor: "pointer",
            //   color: "teal.500",
            // }}
            // color={"teal.100"}
            // ml="6"
          >
            P
          </h2>
        </Link>
      </div>
      <div className="p-4 justify-self-end">
        <Link href="/" passHref>
          <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow mr-5">
            Home
          </button>
        </Link>
        <Link href="/projects" passHref>
          <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow mr-5">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
