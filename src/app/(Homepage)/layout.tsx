import StoreProvider from "@/store/StoreProvider";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="font-dmsans">
      <Navbar/>
    {children}
    <Footer/>
    </section>
  );
}
