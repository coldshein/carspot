import type { Metadata } from "next";
import '@radix-ui/themes/styles.css';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Theme } from "@radix-ui/themes";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarSpot",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Navbar />
          {children}
          <Footer/>
        </Theme>
      </body>
    </html>
  );
}
