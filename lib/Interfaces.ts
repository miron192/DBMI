// next-auth.d.ts
import NextAuth from "next-auth";
export default interface MovieItem {
  id: string;
  title: string;
  poster_path: string;
}

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
  }
}
