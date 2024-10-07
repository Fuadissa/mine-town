import PlayCard from "@/component/PlayCard";
import React from "react";

const Saved = () => {
  return (
    <div className="bg-[#1d2025] flex justify-start items-center flex-col text-white w-full gap-4 px-3 pt-6 pb-[6.5rem]">
      <h1 className="bg-gradient-naive-orange bg-clip-text text-transparent animate-shimmer bg-[length:200%_200%] text-4xl pb-2">
        Your Saves
      </h1>
      <div className="grid grid-cols-2 gap-x-3 gap-y-4 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
          return <PlayCard data={data} key={data} />;
        })}
      </div>
    </div>
  );
};

export default Saved;
