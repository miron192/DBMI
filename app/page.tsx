import Link from "next/link";
import { FaFilm } from "react-icons/fa";

export default async function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-violet-800 to-purple-700 p-6">
      <div className="absolute w-96 h-96 bg-indigo-600 opacity-30 rounded-full -top-1/3 -left-1/3 blur-3xl animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-pink-500 opacity-20 rounded-full -bottom-1/4 -right-1/4 blur-2xl"></div>

      <main className="relative z-10 p-8 sm:p-12 rounded-3xl shadow-2xl bg-gradient-to-br from-white/90 via-white/70 to-white/60 backdrop-blur-md max-w-xl w-full animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-indigo-500 via-violet-600 to-pink-400 p-3 rounded-full shadow-lg">
            <FaFilm className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-violet-800 to-pink-600 mb-4 drop-shadow-xl tracking-tight">
          Welcome to DBMI Movies
        </h1>
        <p className="text-gray-700 text-lg mb-7 font-medium text-center drop-shadow-sm">
          Dive into the world of cinema.
          <br />
          Explore movies, rate your favorites, and join the DBMI film community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/movies"
            className="inline-block px-7 py-3 bg-gradient-to-r from-indigo-600 via-violet-700 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transform transition-all"
          >
            Browse Movies
          </Link>
        </div>
      </main>
    </div>
  );
}
