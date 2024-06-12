import { motion, useAnimate, useAnimation } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

export const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 bg-zinc-800">
      <div className="w-full px-10 border border-b-[1px] border-zinc-600 pb-10 text-center">
        <h1 className="text-8xl fonts tracking-tight pt-10">
          {" "}
          Featured Products
        </h1>
      </div>
      <div className="px-20 mt-10">
        <div className="cards flex gap-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer w-1/2 h-[80vh] relative "
          >
            <h1 className="absolute text-8xl leading-none tracking-tighter right-0 flex translate-x-1/2 -translate-y-1/2 top-1/2 text-[#cdea68] font-semibold z-[9] fonts overflow-hidden  uppercase ">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden   rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer w-1/2 h-[80vh] relative  "
          >
            <div className="card w-full h-full overflow-hidden   rounded-xl">
              <h1 className="absolute text-8xl leading-none tracking-tighter right-full translate-x-1/2 -translate-y-1/2 top-1/2 flex overflow-hidden text-[#cdea68] font-semibold z-[9] fonts uppercase">
                {"vise".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.02,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
