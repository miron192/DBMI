"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() === "") return;

    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 w-full md:max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border px-2 py-1 w-full h-10 rounded-lg text-black"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-gradient-to-r from-indigo-600 cursor-pointer via-violet-700 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all text-base"
      >
        <IoMdSearch />
      </button>
    </div>
  );
};
export default SearchBar;
