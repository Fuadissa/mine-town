import React from "react";
import Binance from "../../public/binanace.png";
import Image from "next/image";

const Testnets = () => {
  return (
    <div className="text-white w-full flex flex-col justify-start items-center p-[0.8rem] bg-[#1d2025] pb-[6.5rem]">
      <h1 className="text-3xl pb-6">Testnets</h1>
      <div className="grid grid-cols-2 gap-3 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => {
          return (
            <div
              className="h-[10rem] w-full rounded-[2rem] bg-gradient-to-r from-[#ffc999] via-[#fb8c00] to-[#e65a00] p-[0.25rem]"
              key={data}
            >
              <div
                className="w-full h-full rounded-[1.6rem] flex flex-col justify-between items-center p-[0.4rem]"
                style={{
                  background:
                    "linear-gradient(135deg, #1d2025, #3a3f46, #5d6678)",
                }}
              >
                <div className="flex justify-start items-center w-full gap-2">
                  <div className="h-[3.2rem] w-[3.2rem] rounded-full ">
                    <Image
                      src={Binance} // Relative path from the `public` directory
                      alt="Testnet"
                      className="mx-auto rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-[60%] flex justify-center items-center">
                    <span className="font-bold font-sans overflow-hidden whitespace-nowrap truncate">
                      Sonic Speed Games Play
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full">
                  <span className="text-2xl font-bold">$200.5M</span>
                  <span className="h-full flex justify-end items-end text-[#9b9b9c]">
                    raised
                  </span>
                </div>

                <div className="flex justify-between items-center w-full px-3 pb-2">
                  <span className="h-full flex justify-end items-end text-[#9b9b9c]">
                    need
                  </span>
                  <span className="">$2000</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testnets;
