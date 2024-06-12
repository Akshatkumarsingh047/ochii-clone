import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { MdArrowOutward } from "react-icons/md";

export const LandingPage = () => {
  const [rotateAngle, setRotateAngle] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotateAngle(angle - 180);
    });
  });
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full  bg-zinc-900 pt-1"
    >
      <div className="textstructure flex  mt-52 px-20">
        <div>
          {["we create", "eye opening", "presentations"].map((item, index) => {
            return (
              <div key={index} className="masker ">
                <div className="flex  w-fit items-center overflow-hidden">
                  {index == 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="w-[8vw] mr-5 h-[5.7vw] mt-4 rounded-md bg-red-600 overflow-hidden"
                    >
                      <img
                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                        className="h-full w-full bg-cover"
                        alt=""
                      />
                    </motion.div>
                  )}
                  <h1 className="text-[9vw] flex items-center uppercase  tracking-tight font-bold  font-['Test Founders Grotesk X-Cond SmBd'] leading-[8vw]">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="eye flex gap-5">
          <div className="w-[7vw] h-[7vw] flex  items-center justify-center bg-zinc-100 rounded-full">
            <div className="h-[70%] w-[70%] rounded-full  relative">
              <div
                style={{
                  transform: ` translate(-50%,-50%) rotate(${rotateAngle}deg)`,
                }}
                className="line w-full h-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[5vw] h-[5vw] rounded-full relative p-2 bg-black">
                  <div
                    style={{
                      transform: ` translate(-50%,-50%) rotate(${rotateAngle}deg)`,
                    }}
                    className={`line w-full h-10 p-2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] `}
                  >
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[7vw] h-[7vw] flex  items-center justify-center bg-zinc-100 rounded-full">
            <div className="h-[70%] w-[70%] rounded-full  relative">
              <div
                style={{
                  transform: ` translate(-50%,-50%) rotate(${rotateAngle}deg)`,
                }}
                className="line w-full h-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[5vw] h-[5vw] rounded-full relative p-2 bg-black">
                  <div
                    style={{
                      transform: ` translate(-50%,-50%) rotate(${rotateAngle}deg)`,
                    }}
                    className={`line w-full h-10 p-2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] `}
                  >
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] mt-20 flex justify-between items-center py-5 px-24  border-zinc-700">
        {[
          "for public and private  companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light leading-none tracking-tighter"
          >
            {item}
          </p>
        ))}
        <div className="start flex gap-[1px]">
          <div className="px-5 py-2 rounded-full border-[2px] border-zinc-600 text-sm font-light capitalize cursor-pointer">
            start the project
          </div>
          <div className=" p-3  text-center rounded-full border-2 border-zinc-600 cursor-pointer ">
            <span>
              {" "}
              <MdArrowOutward />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
