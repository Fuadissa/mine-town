"use client";

import Image from "next/image";
import Earth from "../public/earth.png";
import Controller from "../public/controller.png";
import Nft from "../public/Nft.jpg";
import { useState } from "react";
import PlayCard from "@/component/PlayCard";

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

const scrollData = [
  {
    name: "General",
    image: Earth,
    path: "/",
    colour: "#008000",
  },
  {
    name: "GameFi",
    image: Controller,
    path: "/games",
    colour: "#800080",
  },
  {
    name: "Nft's",
    image: Nft,
    path: "/nft",
    colour: "#ff7b33",
  },
];

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
  const [dataSortColour, setDataSortColour] = useState<string>("General");

  return (
    <main className="w-full bg-orange-700 text-white font-bold min-h-full flex flex-col max-w-xl">
      <div className="px-4 z-10  min-h-16 rounded-lg m-2 mt-2 flex justify-start items-center gap-4">
        <div className="h-[3rem] w-[3rem] bg-red-500 rounded-[.7rem]">
          <Image
            src={Nft} // Relative path from the `public` directory
            alt="Testnet"
            className="mx-auto rounded-[.7rem] h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-0 py-4">
          <p className="text-[#a7a7a7]">Welcome</p>
          <p className="text-lg">Fuad Issa</p>
        </div>
        {/* <div>
          <p className="text-lg">Fuad Issa</p>
        </div> */}
      </div>

      <div className="flex-grow mt-1 bg-gradient-to-r from-[#ffc999] via-[#fb8c00] to-[#e65a00] rounded-t-[48px] top-glow z-0 sticky">
        <div className="sticky flex-grow top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px] justify-start items-center pb-[5rem] pt-6 flex flex-col gap-4">
          <h1 className="text-2xl">Reccommend Projects</h1>
          <div className="w-full flex justify-start items-center overflow-x-auto no-scrollbar gap-3 px-3">
            {scrollData?.map((data) => {
              return (
                <div
                  className={`min-h-[3rem] flex justify-start gap-2 pl-1 pr-7 items-center border-[1px] border-[${data.colour}] rounded-3xl shrink-0`}
                  key={data.colour}
                  style={{
                    borderColor: `${data.colour}`,
                    backgroundColor: `${
                      dataSortColour === data.name ? `${data?.colour}` : ""
                    }`,
                  }}
                  onClick={() => setDataSortColour(data.name)}
                >
                  <Image
                    src={data.image} // Relative path from the `public` directory
                    alt={`${data.name}`}
                    className="mx-auto w-9 h-9 rounded-full bg-neutral-100"
                  />
                  <p>{data?.name}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-4 w-full p-4 pt-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
              return <PlayCard data={data} key={data}/>;
            })}
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
