import "../globals.css";
import Header from "@/components/Header";
import { Providers } from "@/components/Providers";
export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Providers>
        <div className="px-15 py-4">{children}</div>
      </Providers>
    </>
  );
}
