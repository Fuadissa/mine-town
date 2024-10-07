import React from "react";
import { AiFillFire } from "react-icons/ai";
import { BiDownvote, BiSolidUpvote } from "react-icons/bi";
import { IoBookmarkOutline } from "react-icons/io5";
import Image from "next/image";
import Nft from "../../public/Nft.jpg";

// Define the type of data
interface PlayCardProps {
  data: number; // or whatever type the data is, here it's 'number'
}

const PlayCard: React.FC<PlayCardProps> = ({ data }) => {
  return (
    <div className="h-[14rem] w-full rounded-[1rem]  relative flex justify-center items-center">
      <div className="relative h-[80%] bg-[#3a3f46] w-full flex flex-col justify-center items-center rounded-[1rem]">
        <div className="absolute top-[-1.3rem] h-[4rem] w-[4rem] bg-[#35383a] rounded-[1rem] shadow-[rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px]">
          <Image
            src={Nft} // Relative path from the `public` directory
            alt={`Testnet ${data}`}
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
            <div className="flex justify-evenly items-center gap-2 px-2 text-[1.2rem] min-w-[70%] w-auto">
              <BiSolidUpvote className="text-[#fb8c00]" />
              <p className="text-[1rem] text-[#3a3f46] font-bold">123.7k</p>
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
  );
};

export default PlayCard;
