"use client";

import React from "react";
import { FcHome } from "react-icons/fc";
import Testnet from "../../public/Testnet.png";
import Meme from "../../public/Meme-icon.png";
import Winner from "../../public/winner.png";
import Save from "../../public/save.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLink = [
    {
      name: "Home",
      href: "/",
      Icon: true,
    },
    {
      name: "Testnets",
      image: Testnet,
      href: "/testnets",
      Icon: false,
    },
    {
      name: "Memes",
      image: Meme,
      href: "/meme",
      Icon: false,
    },
    {
      name: "Contest",
      image: Winner,
      href: "/contest",
      Icon: false,
    },
    {
      name: "Saved",
      image: Save,
      href: "/saved",
      Icon: false,
    },
  ];
  
  return (
    <>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
        {navLink?.map((links) => {
          const isActive = pathname === links.href;
          return (
            <Link
              href={`${links.href}`}
              className={
                isActive
                  ? "bg-[#1c1f24] p-2 m-1 rounded-[1.2rem] text-center text-[#85827d] w-1/5"
                  : "text-center text-[#85827d] w-1/5"
              }
              key={links.href}
            >
              <div>
                {links?.Icon ? (
                  <FcHome className="w-8 h-8 mx-auto" />
                ) : (
                  <Image
                    src={links?.image || ""} // Relative path from the `public` directory
                    alt="Testnet"
                    className="w-8 h-8 mx-auto"
                  />
                )}

                <p className="mt-1">{links.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
