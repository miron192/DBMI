"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-5 cursor-pointer py-2 border-2 border-indigo-500 text-indigo-700 font-bold rounded-lg hover:bg-indigo-50 shadow-md hover:scale-105 active:scale-95 transition-all text-base bg-white bg-opacity-40 backdrop-blur-sm"
    >
      Log Out
    </button>
  );
}
