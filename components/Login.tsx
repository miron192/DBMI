import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex gap-3 items-center align-middle ">
        <Link
          href="/api/auth/signin"
          className="px-5 py-2 bg-gradient-to-r from-indigo-600 via-violet-700 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all text-base"
        >
          Signup/Login
        </Link>
      </div>
    );
  }
  if (session) {
    return (
      <div className="flex gap-12">
        <Link href={`/profile/${session?.user?.id}`}>
          <Image
            src={session?.user?.image || ""}
            alt="Profile"
            width={100}
            height={100}
            className="w-12 h-12 rounded-full"
          />
        </Link>

        <LogoutButton />
      </div>
    );
  }
};

export default Login;
