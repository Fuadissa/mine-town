import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { FcHome } from "react-icons/fc";
import Testnet from "../public/Testnet.png";
import Meme from "../public/Meme-icon.png";
import Coin from "../public/coin.png";
import Save from "../public/save.png";

import Image from "next/image";

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
      <body className="bg-black flex justify-center">
        {children}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-between items-center z-50 rounded-3xl text-xs">
          <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
            <FcHome className="w-8 h-8 mx-auto" />
            <p className="mt-1">Home</p>
          </div>

          <div className="text-center text-[#85827d] w-1/5">
            <Image
              src={Testnet} // Relative path from the `public` directory
              alt="Testnet"
              className="w-8 h-8 mx-auto"
            />
            <p className="mt-1">Testnets</p>
          </div>

          <div className="text-center text-[#85827d] w-1/5">
            <Image
              src={Meme} // Relative path from the `public` directory
              alt="Testnet"
              className="w-8 h-8 mx-auto"
            />
            <p className="mt-1">Meme</p>
          </div>

          <div className="text-center text-[#85827d] w-1/5">
            <Image
              src={Coin} // Relative path from the `public` directory
              alt="Testnet"
              className="w-8 h-8 mx-auto"
            />
            <p className="mt-1">Tokens</p>
          </div>

          <div className="text-center text-[#85827d] w-1/5">
            <Image
              src={Save} // Relative path from the `public` directory
              alt="Testnet"
              className="w-8 h-8 mx-auto"
            />
            <p className="mt-1">Pin</p>
          </div>
        </div>
      </body>
    </html>
  );
}
