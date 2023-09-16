"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Different() {
  return (
    <div className="text-center overflow-y-hidden">
      <div className="flex justify-end items-end">
        <Image
          src="/coffee_blast2.svg"
          alt="coffee blast"
          width={400}
          height={200}
        />
      </div>
      <h1 className="text-[3rem] font-bold font-Playfair text-[#603809]md:-mt-[9.75rem] sm:-mt-[15.75rem]  text-center">
        Why Are We Different?
      </h1>

      <p className="text-md font-Playfair text-[#707070]">
        We don’t just make your coffee, we make your day!
      </p>

      <div className="grid md:grid-cols-4 grid-rows-2 justify-center items-center m-7 gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:col-span-1 row-span-1 bg-[#FFF9F1] border border-[#F9C06A6B] "
        >
          <div>
            <div className="flex justify-center items-center p-4">
              <Image
                src="/coffee-beans.svg"
                alt="coffee-beans"
                width={100}
                height={100}
              />
            </div>

            <div className="text-center p-4">
              <h1 className="font-Playfair text-lg text-[#603809] font-bold ">
                Supreme Beans
              </h1>
              <h1 className="font-Playfair text-md text-[#603809] ">
                Beans that provides great taste
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:col-span-1 row-span-11 bg-[#FFF9F1] border border-[#F9C06A6B] "
        >
          <div>
            <div className="flex justify-center items-center p-4">
              <Image src="/badge.svg" alt="badge" width={100} height={100} />
            </div>

            <div className="text-center p-4">
              <h1 className="font-Playfair text-lg text-[#603809] font-bold ">
                High Quality
              </h1>
              <h1 className="font-Playfair text-md text-[#603809] ">
                We provide the highest quality
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:col-span-1 row-span-1 bg-[#FFF9F1] border border-[#F9C06A6B] "
        >
          <div>
            <div className="flex justify-center items-center p-4">
              <Image src="/coffee.svg" alt="coffee" width={100} height={100} />
            </div>

            <div className="text-center p-4">
              <h1 className="font-Playfair text-lg text-[#603809] font-bold ">
                Extraordinary
              </h1>
              <h1 className="font-Playfair text-md text-[#603809] ">
                Coffee like you have never tasted
              </h1>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:col-span-1 row-span-1 bg-[#FFF9F1] border border-[#F9C06A6B] "
        >
          <div>
            <div className="flex justify-center items-center p-4">
              <Image
                src="/best-price.svg"
                alt="best-price"
                width={100}
                height={100}
              />
            </div>

            <div className="text-center p-4">
              <h1 className="font-Playfair text-lg text-[#603809] font-bold ">
                Affordable Price
              </h1>
              <h1 className="font-Playfair text-md text-[#603809] ">
                Our Coffee prices are easy to afford
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
