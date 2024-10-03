"use client";

import Image from "next/image";
import Earth from "../public/earth.png";
import Controller from "../public/controller.png";
import Nft from "../public/Nft.jpg";
import Testnet from "../public/Testnet.png";
import { AiFillFire } from "react-icons/ai";
import { BiDownvote, BiSolidUpvote } from "react-icons/bi";
import { IoBookmarkOutline } from "react-icons/io5";

//IoBookmarkSharp BiSolidDownvote, BiUpvote,

// import { useEffect, useState } from "react";
// import WebApp from "@twa-dev/sdk";

// Define the interface for user data
// interface UserData {
//   id: number;
//   first_name: string;
//   last_name?: string;
//   username?: string;
//   language_code: string;
//   is_premium?: boolean;
// }

export default function Home() {
  // const [userData, setUserData] = useState<UserData | null>(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   try {
  //     if (WebApp.initDataUnsafe.user) {
  //       setUserData(WebApp.initDataUnsafe.user as UserData);
  //     } else {
  //       setError("User data is not available.");
  //     }
  //   } catch (error) {
  //     setError(`"Failed to retrieve user data, ${error}`);
  //   }
  // }, []);

  // if (error) {
  //   return (
  //     <main className="p-4">
  //       <div className="text-red-500">{error}</div>
  //     </main>
  //   );
  // }

  return (
    <main className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
      <div className="px-4 z-10  min-h-16 rounded-lg m-2 mt-2 flex justify-start items-center gap-4">
        <div className="h-[3.5rem] w-[3.5rem] bg-red-500 rounded-[1rem]"></div>
        <div className="flex flex-col items-center gap-0 py-4">
          <p className="text-[#a7a7a7]">Welcome</p>
          <p className="text-lg">Fuad Issa</p>
        </div>
      </div>

      <div className="flex-grow mt-4 bg-gradient-to-r from-[#ffc999] via-[#fb8c00] to-[#e65a00] rounded-t-[48px] relative top-glow z-0">
        <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px] justify-start items-center pb-4 pt-6 flex flex-col gap-4">
          <h1 className="text-2xl">Reccommend Projects</h1>
          <div className="w-full flex justify-start items-center overflow-x-scroll no-scrollbar gap-4 px-3">
            <div className="min-h-[3rem] flex justify-start gap-2 pl-1 pr-7 items-center border-[1px] border-[#008000] rounded-3xl shrink-0">
              <Image
                src={Earth} // Relative path from the `public` directory
                alt="Testnet"
                className="mx-auto w-9 h-9 rounded-full bg-neutral-100"
              />
              {/* <div className="w-9 h-9 rounded-full bg-neutral-100"></div> */}
              <p>General</p>
            </div>
            <div className="min-h-[3rem] flex justify-start gap-2 pl-1 pr-7 items-center border-[1px] border-[#800080] rounded-3xl shrink-0">
              {/* #504f4f */}
              <Image
                src={Controller} // Relative path from the `public` directory
                alt="Testnet"
                className="mx-auto w-9 h-9 rounded-full bg-neutral-100"
              />
              {/* <div className="w-9 h-9 rounded-full bg-neutral-100"></div> */}
              <p className="text-[#9a9b9c]">GameFi</p>
            </div>
            <div className="min-h-[3rem] flex justify-start gap-2 pl-1 pr-7 items-center border-[1px] border-[#FFA500] rounded-3xl shrink-0">
              <Image
                src={Nft} // Relative path from the `public` directory
                alt="Testnet"
                className="mx-auto w-9 h-9 rounded-full bg-neutral-100"
              />
              {/* <div className="w-9 h-9 rounded-full bg-neutral-100"></div> */}
              <p>Nft's</p>
            </div>
            <div className="min-h-[3rem] flex justify-start gap-2 pl-1 pr-7 items-center border-[1px] border-[#343499] rounded-3xl shrink-0">
              <Image
                src={Testnet} // Relative path from the `public` directory
                alt="Testnet"
                className="mx-auto w-9 h-9 rounded-full bg-neutral-100"
              />
              {/* <div className="w-9 h-9 rounded-full bg-neutral-100"></div> */}
              <p>Testnet</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4 w-full p-4">
            <div className="h-[14rem] w-full rounded-[1rem]  relative flex justify-center items-center">
              <div className="relative h-[80%] bg-[#3a3f46] w-full flex flex-col justify-center items-center rounded-[1rem]">
                <div className="absolute top-[-1.3rem] h-[4rem] w-[4rem] bg-red-600 rounded-[1rem] shadow-[rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px]">
                  <Image
                    src={Nft} // Relative path from the `public` directory
                    alt="Testnet"
                    className="mx-auto rounded-[1rem] h-full w-full object-contain"
                  />
                </div>

                <div className="w-[100%] px-4 flex flex-col justify-center items-center gap-2 pt-3">
                  <div className="w-full flex justify-center items-center">
                    <span className="font-bold font-sans overflow-hidden whitespace-nowrap truncate">
                      Sonic Speed Games Play
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center bg-[#1d2025] rounded-[1rem] h-[2.3rem] pr-2">
                    <div className="flex justify-evenly items-center gap-2 px-2 text-[1rem] min-w-[70%] w-auto">
                      <BiSolidUpvote className="text-[#fb8c00]" />
                      <p className="text-[1rem] text-[#3a3f46] font-bold">
                        123.7k
                      </p>
                      <BiDownvote />
                    </div>

                    <div className="text-gray-500">
                      <IoBookmarkOutline />
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-1 text-xl">
                    <AiFillFire className="text-[#fb8c00]" />
                    <AiFillFire className="text-[#fb8c00]" />
                    <AiFillFire className="text-gray-500" />
                  </div>
                </div>

                <div className="absolute shadow-[rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px] bottom-[-1.25rem] h-[2.5rem] bg-gradient-to-r from-[#ffc999] via-[#fb8c00] to-[#e65a00] rounded-[1.3rem] w-[50%] flex justify-center items-center">
                  Play
                </div>
              </div>
            </div>
            <div className="h-[14rem] w-full rounded-[1rem]  relative flex justify-center items-center">
              <div className="relative h-[80%] bg-[#3a3f46] w-full flex flex-col justify-center items-center rounded-[1rem]">
                <div className="absolute top-[-1.3rem] h-[4rem] w-[4rem] bg-red-600 rounded-[1rem] shadow-[rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px]">
                  <Image
                    src={Nft} // Relative path from the `public` directory
                    alt="Testnet"
                    className="mx-auto rounded-[1rem] h-full w-full object-contain"
                  />
                </div>

                <div className="w-[100%] px-4 flex flex-col justify-center items-center gap-2 pt-3">
                  <div className="w-full flex justify-center items-center">
                    <span className="font-bold font-sans overflow-hidden whitespace-nowrap truncate">
                      Sonic Speed Games Play
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center bg-[#1d2025] rounded-[1rem] h-[2.3rem] pr-2">
                    <div className="flex justify-evenly items-center gap-2 px-2 text-[1rem] min-w-[70%] w-auto">
                      <BiSolidUpvote className="text-[#fb8c00]" />
                      <p className="text-[1rem] text-[#3a3f46] font-bold">
                        123.7k
                      </p>
                      <BiDownvote />
                    </div>

                    <div className="text-gray-500">
                      <IoBookmarkOutline />
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-1 text-xl">
                    <AiFillFire className="text-[#fb8c00]" />
                    <AiFillFire className="text-[#fb8c00]" />
                    <AiFillFire className="text-gray-500" />
                  </div>
                </div>

                <div className="absolute shadow-[rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px] bottom-[-1.25rem] h-[2.5rem] bg-gradient-to-r from-[#ffc999] via-[#fb8c00] to-[#e65a00] rounded-[1.3rem] w-[50%] flex justify-center items-center">
                  Play
                </div>
              </div>
            </div>
            {/* <div className="h-[14rem] w-full rounded-[1rem]  relative flex justify-center items-center">
              <div className="relative h-[80%] bg-[#3a3f46] w-full flex flex-col justify-center items-center rounded-[1rem]">
                <div className="absolute top-[-1.3rem] h-[4rem] w-[4rem] bg-red-600 rounded-[1rem] shadow-[rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px]">
                  <Image
                    src={Nft} // Relative path from the `public` directory
                    alt="Testnet"
                    className="mx-auto rounded-[1rem] h-full w-full object-contain"
                  />
                </div>

                <div className="w-[100%] px-4 flex flex-col justify-center items-center gap-2 pt-3">
                  <div className="w-full flex justify-center items-center">
                    <span className="font-bold font-sans overflow-hidden whitespace-nowrap truncate">
                      Sonic Speed Games Play
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center bg-[#1d2025] rounded-[1rem] h-[2.3rem] pr-2">
                    <div className="flex justify-evenly items-center gap-2 px-2 text-[1rem] min-w-[70%] w-auto">
                      <BiSolidUpvote className="text-[#fb8c00]" />
                      <p className="text-[1rem] text-[#3a3f46] font-bold">
                        123.7k
                      </p>
                      <BiDownvote />
                    </div>

                    <div className="text-gray-500">
                      <IoBookmarkOutline />
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-1 text-xl">
                    <AiFillFire className="text-[#fb8c00]" />
                    <AiFillFire className="text-[#fb8c00]" />
                    <AiFillFire className="text-gray-500" />
                  </div>
                </div>

                <div className="absolute shadow-[rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px] bottom-[-1.25rem] h-[2.5rem] bg-gradient-to-r from-[#ffc999] via-[#fb8c00] to-[#e65a00] rounded-[1.3rem] w-[50%] flex justify-center items-center">
                  Play
                </div>
              </div>
            </div>
            <div className="h-[14rem] w-full rounded-[1rem]  relative flex justify-center items-center">
              <div className="relative h-[80%] bg-[#3a3f46] w-full flex flex-col justify-center items-center rounded-[1rem]">
                <div className="absolute top-[-1.3rem] h-[4rem] w-[4rem] bg-red-600 rounded-[1rem] shadow-[rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px]">
                  <Image
                    src={Nft} // Relative path from the `public` directory
                    alt="Testnet"
                    className="mx-auto rounded-[1rem] h-full w-full object-contain"
                  />
                </div>

                <div className="w-[100%] px-4 flex flex-col justify-center items-center gap-2 pt-3">
                  <div className="w-full flex justify-center items-center">
                    <span className="font-bold font-sans overflow-hidden whitespace-nowrap truncate">
                      Sonic Speed Games Play
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center bg-[#1d2025] rounded-[1rem] h-[2.3rem] pr-2">
                    <div className="flex justify-evenly items-center gap-2 px-2 text-[1rem] min-w-[70%] w-auto">
                      <BiSolidUpvote className="text-[#fb8c00]" />
                      <p className="text-[1rem] text-[#3a3f46] font-bold">
                        123.7k
                      </p>
                      <BiDownvote />
                    </div>

                    <div className="text-gray-500">
                      <IoBookmarkOutline />
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-1 text-xl">
                    <AiFillFire className="text-[#fb8c00]" />
                    <AiFillFire className="text-[#fb8c00]" />
                    <AiFillFire className="text-gray-500" />
                  </div>
                </div>

                <div className="absolute shadow-[rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px] bottom-[-1.25rem] h-[2.5rem] bg-gradient-to-r from-[#ffc999] via-[#fb8c00] to-[#e65a00] rounded-[1.3rem] w-[50%] flex justify-center items-center">
                  Play
                </div>
              </div>
            </div> */}

            {/* <div className="h-[13rem] w-full rounded-[1rem] bg-gray-50"></div>
            <div className="h-[13rem] w-full rounded-[1rem] bg-gray-50"></div>
            <div className="h-[13rem] w-full rounded-[1rem] bg-gray-50"></div>
            <div className="h-[13rem] w-full rounded-[1rem] bg-gray-50"></div>
            <div className="h-[15rem] w-full rounded-[1rem] bg-gray-50"></div>
            <div className="h-[15rem] w-full rounded-[1rem] bg-gray-50"></div> */}
          </div>
        </div>
      </div>
      {/* {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name || "N/A"}</li>
            <li>Username: {userData.username || "N/A"}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? "Yes" : "No"}</li>
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )} */}
    </main>
  );
}
