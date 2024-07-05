import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Data Storage",
  description: "Testing my supabase skills along side tailwind and other APIs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full overflow-x-hidden`}>
        <SiteHeader/>
        {children}
      </body>
    </html>
  );
}
