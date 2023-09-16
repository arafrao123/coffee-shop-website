"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Discover() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
      await controls.start({ scale: 1.1, transition: { duration: 0.3 } });
      await controls.start({ scale: 1, transition: { duration: 0.3 } });
    };

    sequence();
  }, [controls]);

  return (
    <div className="grid md:grid-cols-2 grid-rows-1">
      <div className="md:col-span-1 row-span-1 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          className="p-8"
        >
          <h1 className="text-[#603809] text-[3rem] font-Playfair font-bold mt-[6rem]">
            Discover the best coffee
          </h1>
          <p className="text-[#707070] font-Playfair">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="my-4 text-[16px] font-Playfair font-extrabold w-fit h-fit px-4 py-2 bg-[#F9C06A] rounded-full hover:shadow-white hover:shadow-sm"
          >
            Learn More
          </motion.button>
        </motion.div>
        <Image
          src="/coffee_blast.svg"
          alt="coffee blast"
          width={400}
          height={200}
        />
      </div>
      <div className="md:col-span-1 row-span-1 items-center justify-center flex">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          className="items-center justify-center flex"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Image
            src="/styledcoffee.svg"
            alt="coffeecup"
            width={500}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
}
