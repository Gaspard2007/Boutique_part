import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuParticulier from "@/components/menu-particulier";
import Boutique from "@/app/boutique/page";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <MenuParticulier/>
          <section className="">
            <div className="">
            
            {children}
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
