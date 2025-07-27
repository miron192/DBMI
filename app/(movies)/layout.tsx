import "../globals.css";
import Header from "@/components/Header";
import { Providers } from "@/components/Providers";
export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default async function HeaderLayout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Providers>
        <div className="px-15 py-4">{children}</div>
      </Providers>
    </>
  );
}
