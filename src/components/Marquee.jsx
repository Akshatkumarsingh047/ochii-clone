import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-10 bg-[#004d43] "
    >
      <div className="text border-t-2 border-b-2 border-zinc-400 flex mt-24 whitespace-nowrap overflow-hidden pr-10">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="  text-[28vw] tracking-tighter fonts leading-none -py-10  -mb-[1vw] uppercase font-[600]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className=" text-[28vw]  tracking-tighter fonts leading-none -py-10  uppercase font-[600]  -mb-[1vw]"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
