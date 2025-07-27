import "../globals.css";
import Header from "@/components/Header";
import { Providers } from "@/components/Providers";
export const metadata = {
  title: "DBMI",
  description: "MOVIE WEB APP",
};

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Providers>
        <div className="px-15 py-4">{children}</div>
      </Providers>
    </>
  );
}
