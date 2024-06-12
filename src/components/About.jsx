import React from "react";

export const About = () => {
  return (
    <div className="w-full p-20 bg-[#cdea68]">
      <h1 className="text-black font-['Nueue Montreal'] text-[3vw] leading-[3.5vw]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nam,
        voluptate quaerat officia voluptatum, fugiat molestiae rem, ut magni
        obcaecati eveniet aut! Possimus, aspernatur reiciendis excepturi sequi
        hic numquam! Harum.
      </h1>
      <div className="w-full  border-t-[1px] border-[#1111] mt-20 pt-10 flex ">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="px-10 uppercase py-6 flex items-center gap-10 bg-zinc-600 rounded-full text-white mt-10">
            Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
            className="w-full h-full bg-contain overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};
