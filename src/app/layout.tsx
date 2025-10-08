import type { Metadata } from "next";
import "../styles/globals.css";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Cypress | Next.js App Router Example",
  description: "An example of using Cypress with Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        {/* footer here */}
      </body>
    </html>
  );
}
