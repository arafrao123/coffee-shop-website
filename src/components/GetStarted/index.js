"use client";
import { motion } from "framer-motion";
export default function GetStarted() {
  return (
    <div className="grid justify-center items-center">
      <h1 className="text-md font-Playfair text-[#707070]">
        Great ideas start with great coffee, Lets help you achieve that
      </h1>
      <h1 className="text-[#603809] text-xl font-Playfair font-bold text-center ">
        Get started today.
      </h1>
      <div className="my-2 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="my-4 text-[16px] font-Playfair font-extrabold w-fit h-fit px-4 py-2 bg-[#F9C06A] rounded-full hover:shadow-white hover:shadow-sm"
        >
          Join Us
        </motion.button>
      </div>
    </div>
  );
}
