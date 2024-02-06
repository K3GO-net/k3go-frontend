import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { DefaultLayout } from "../layout/DefaultLayout";
import Provider from "./provider";
import { getServerSession } from "next-auth";
import SessionProvider from "@/src/context/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KOL3 | Home Page",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Provider>
            <DefaultLayout>{children}</DefaultLayout>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
