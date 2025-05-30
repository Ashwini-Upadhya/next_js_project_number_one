// app/layout.js
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Navbar/page";
import { fetchAllData } from "@/lib/api";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "This is test title for my first Next.js project.",
  description: "Description for my first Next.js project.",
};

export default async function RootLayout({ children }) {
  const { mergedContent } = await fetchAllData();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
