"use client";

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
      <div className="px-4 z-10  min-h-16 rounded-lg m-2 mt-4 flex justify-start items-center gap-4">
        <div className="h-[3.5rem] w-[3.5rem] bg-red-500 rounded-[1rem]"></div>
        <div className="flex flex-col items-center gap-0 py-4">
          <p className="text-[#a7a7a7]">Welcome</p>
          <p className="text-lg">Fuad Issa</p>
        </div>
      </div>

      <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
        <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]"></div>
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
