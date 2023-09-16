"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <div className="text-center overflow-y-hidden">
      <h1 className="text-[3rem] font-bold font-Playfair text-[#603809]">
        Enjoy a new blend of coffee style
      </h1>
      <p className="text-md font-Playfair text-[#707070]">
        Explore all flavors of coffee with us. There is always a new cup worth
        experiencing.
      </p>

      <div className="grid md:grid-cols-4 grid-rows-2 justify-center items-center m-7 gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:col-span-1 row-span-1  bg-[#F9C06A] border border-[#F9C06A6B]"
        >
          <Image
            src="/cappucino.svg"
            alt="cappuccino"
            width={400}
            height={400}
          />
          <div className="text-center p-4">
            <h1 className="font-Playfair text-lg text-[#603809]">Cappuccino</h1>
            <h1 className="font-Playfair text-md">Coffee 50% | Milk 50%</h1>
            <h1 className="font-Playfair text-md font-bold text-[#603809]">
              $8.50
            </h1>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:col-span-1 row-span-1 bg-[#F9C06A] border border-[#F9C06A6B]"
        >
          <Image
            src="/chailatte.svg"
            alt="chai latte"
            width={400}
            height={400}
          />
          <div className="text-center p-4">
            <h1 className="font-Playfair text-lg text-[#603809]">Chai Latte</h1>
            <h1 className="font-Playfair text-md">Coffee 50% | Milk 50%</h1>
            <h1 className="font-Playfair text-md font-bold text-[#603809]">
              $8.50
            </h1>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:col-span-1 row-span-1 bg-[#F9C06A] border border-[#F9C06A6B]"
        >
          <Image
            src="/machiatto.svg"
            alt="macchiato"
            width={400}
            height={400}
          />
          <div className="text-center p-4">
            <h1 className="font-Playfair text-lg text-[#603809]">Macchiato</h1>
            <h1 className="font-Playfair text-md">Coffee 50% | Milk 50%</h1>
            <h1 className="font-Playfair text-md font-bold text-[#603809]">
              $8.50
            </h1>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:col-span-1 row-span-1 bg-[#F9C06A] border border-[#F9C06A6B]"
        >
          <Image src="/expresso.svg" alt="espresso" width={400} height={400} />
          <div className="text-center p-4">
            <h1 className="font-Playfair text-lg text-[#603809]">Espresso</h1>
            <h1 className="font-Playfair text-md">Coffee 50% | Milk 50%</h1>
            <h1 className="font-Playfair text-md font-bold text-[#603809]">
              $8.50
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
