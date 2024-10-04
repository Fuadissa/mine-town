import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/component/Navbar";

export const metadata: Metadata = {
  title: "Mine Town",
  description:
    "Your one-stop hub for the latest crypto airdrop updates and opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-black flex justify-center min-h-screen overflow-x-hidden">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
