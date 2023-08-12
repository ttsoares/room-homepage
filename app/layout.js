import "./globals.css";
import { League_Spartan } from "next/font/google";
const lspartan = League_Spartan({ subsets: ["latin"] });

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Room Homepage",
  description: "FrontEnd Master",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lspartan.className} h-screen w-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
