"use client";
import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

const feedbackData = [
  {
    name: "Jonny Thomas",
    designation: "Project Manager",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    imageSrc: "/person1.svg",
  },
  {
    name: "Wednesday Addams",
    designation: "CEO",
    text: "I recently ventured into your coffee shop, a place so filled with sunlight and cheerfulness it could give even the most devoted member of the Addams family pause. While your Caramel Macchiato was an intriguing blend of bitter coffee and sugary oblivion, and your pastries delectably flaky, it was your relentlessly cheerful staff that truly amused me. Their boundless enthusiasm in wishing me a great day left me shivering with a feeling I hadn't experienced in ages. While it may not become my dark and brooding haunt of choice, I'll return when I'm feeling masochistic for a dose of sunlight and saccharine caffeination.",
    imageSrc: "/person2.svg",
  },
];

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    console.log("Left arrow click");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentFeedback = feedbackData[currentIndex];

  return (
    <>
      <div className="overflow-hidden my-6">
        <h1 className="font-Playfair font-bold text-[#603809] text-6xl text-center">
          Our coffee perfection feedback
        </h1>
        <p className="text-lg font-Playfair text-[#707070] text-center py-4">
          Our customers have amazing things to say about us
        </p>
      </div>
      <div className="flex justify-end">
        <Image
          src="/coffee_blast2.svg"
          alt="coffee blast"
          height={400}
          width={400}
        />
      </div>
      <div className="mx-20 md:-mt-[10rem] bg-[#FFF9F1] w-fit h-full border border-[#F9C06A]">
        <div className="grid grid-rows-1">
          <div className="row-span-1">
            <div className="grid grid-cols-6">
              <div className="col-span-1 w-fit flex justify-center items-center">
                <div
                  className="bg-[#F9C06A] p-6 rounded-lg -ml-10"
                  onClick={handleLeftArrowClick}
                >
                  <BsArrowLeftShort size={30} color="black" />
                </div>
              </div>
              <div className="col-span-4 w-fit">
                <h1 className="p-4">
                  <Image
                    src="/marks.svg"
                    alt="inverted commas"
                    height={100}
                    width={100}
                  />
                </h1>
                <p className="text-[#707070] font-Playfair text-lg p-8 text-center">
                  {currentFeedback.text}
                </p>
                <h1 className="font-Playfair font-bold text-2xl text-[#603809] text-center">
                  {currentFeedback.name}
                </h1>
                <p className="font-Playfair font-light text-lg text-[#707070] text-center">
                  {currentFeedback.designation}
                </p>
              </div>

              <div className="col-span-1 w-fit flex justify-end items-center md:ml-20 sm:ml-36">
                <div
                  className="bg-[#F9C06A] p-6 rounded-lg"
                  onClick={handleRightArrowClick}
                >
                  <BsArrowRightShort size={30} color="black" />
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1">
            <div className="flex justify-center rounded-md mt-10">
              <Image
                src={currentFeedback.imageSrc}
                alt="person"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start md:-mt-[13rem]">
        <Image
          src="/coffee_blast.svg"
          alt="coffee blast"
          height={400}
          width={400}
        />
      </div>
    </>
  );
}
