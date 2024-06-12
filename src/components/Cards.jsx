import React from "react";

export const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-800">
      <div className="border-[1px] border-zinc-600 mb-28"></div>
      <div className="flex items-center gap-10 px-20">
        <div className="cardContainer h-[50vh] flex gap-10 w-1/2">
          <div className="card relative rounded-xl w-full h-full flex items-center justify-center  bg-[#004d43] ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute left-10 bottom-10 px-6 py-2 border-2 rounded-full">
              &copy;2021-2024
            </button>
          </div>
        </div>
        <div className="cardContainer relative flex gap-5 h-[50vh] w-1/2">
          <div className="card rounded-xl flex flex-col  items-center justify-center  w-full p-14 bg-[#212121] ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="px-5 py-1 absolute left-2  top-[80%] rounded-full border-2 uppercase text-sm ">
              rating 5.0 on clutch
            </button>
          </div>
          <div className="card rounded-xl w-full flex items-center justify-center relative bg-[#212121] overflow-hidden p-24 ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              className="  "
              alt=""
            />
            <button className="px-5 py-1 absolute left-1  top-[80%] rounded-full border-2 uppercase text-sm">
              business bootcamp alumni
            </button>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-zinc-700 mt-32 mb-20"></div>
    </div>
  );
};
