import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-900 flex flex-row items-center justify-between">
      <div>
        <Link href="/" passHref>
          <h2 className="text-4xl font-bold font-body ml-6 cursor-pointer pb-1">
            <span className="text-5xl text-secondary">&#123;</span>
            <span className="text-teal300">PS</span>
            <span className="text-5xl text-secondary">&#125;</span>
          </h2>
        </Link>
      </div>
      <div className="p-4 justify-self-end align-middle">
        <Link href="/" passHref>
          <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow mr-2">
            Home
          </button>
        </Link>
        <Link href="/projects" passHref>
          <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 hover:border-gray-400 rounded shadow">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
