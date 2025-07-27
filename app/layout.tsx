import React from "react";

import "./globals.css";
export const metadata = {
  title: "DBMI",
  description: "MOVIE WEB APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
