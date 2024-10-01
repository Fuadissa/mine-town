"use client";

import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

// Define the interface for user data
interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (WebApp.initDataUnsafe.user) {
        setUserData(WebApp.initDataUnsafe.user as UserData);
      } else {
        setError("User data is not available.");
      }
    } catch (error) {
      setError(`"Failed to retrieve user data, ${error}`);
    }
  }, []);

  if (error) {
    return (
      <main className="p-4">
        <div className="text-red-500">{error}</div>
      </main>
    );
  }

  return (
    <main className="p-4">
      {userData ? (
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
      )}
    </main>
  );
}
