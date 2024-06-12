import React, { useEffect, useState } from "react";

export const Eyes = () => {
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
    <div className="eyes w-full h-screen overflow-hidden ">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full relative h-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] "
      >
        <div className="absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] transition-all ease-linear">
          <div className="w-[15vw] h-[15vw] flex  items-center justify-center bg-zinc-100 rounded-full">
            <div className="h-[70%] w-[70%] rounded-full  relative">
              <div
                style={{
                  transform: ` translate(-50%,-50%) rotate(${
                    rotateAngle + Number(225)
                  }deg)`,
                }}
                className="line w-full h-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[10vw] h-[10vw] rounded-full relative  bg-black">
                  <div
                    style={{
                      transform: ` translate(-50%,-50%) rotate(${rotateAngle}deg)`,
                    }}
                    className={`line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] `}
                  >
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="h-[70%] w-[70%] rounded-full  relative">
              <div
                style={{
                  transform: ` translate(-50%,-50%) rotate(${
                    rotateAngle + Number(225)
                  }deg)`,
                }}
                className="line w-full h-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[10vw] h-[10vw] rounded-full relative  bg-black">
                  <div
                    style={{
                      transform: ` translate(-50%,-50%) rotate(${rotateAngle}deg)`,
                    }}
                    className={`line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] `}
                  >
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
