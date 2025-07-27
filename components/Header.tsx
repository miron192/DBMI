import Link from "next/link";
import SearchBar from "./SearchBar";
import Login from "./Login";

const Header = () => {
  return (
    <header className="flex  p-3 sticky top-0 z-50 sm:justify-between w-full flex-col sm:flex-row items-center backdrop-blur-lg shadow-md rounded-b-2xl mx-auto">
      <Link
        href="/"
        className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-violet-800 to-pink-600 drop-shadow tracking-wide transition-colors hover:from-yellow-400 hover:via-pink-400 hover:to-indigo-400"
      >
        DBMI
      </Link>

      <SearchBar />
      <Login />
    </header>
  );
};

export default Header;
