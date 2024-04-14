import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opportunities Discovery Platform",
  description: "Discover Global Opportunities to Grow",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 border-b">
        Opportunities Discovery Platform
        </div>
        {children}
      </body>
    </html>
  );
}
