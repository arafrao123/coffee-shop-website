import Image from "next/image";
import { BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
export default function Footer() {
  return (
    <div className="relative">
      <div className="flex flex-row bg-[url('/bg3.svg')] bg-cover bg-no-repeat w-screen h-fit overflow-x-hidden z-40 ">
        <div className="grid grid-rows-1 gap-10">
          <div className="grid grid-cols-2 w-screen row-span-1">
            <div
              className="absolute -top-[12rem] left-0  z-50 hidden md:visible"
              style={{ zIndex: 50 }}
            >
              <Image src="/splash1.svg" alt="splash" width={350} height={350} />
            </div>
            <div
              className="absolute -top-[12rem] right-0 z-50 hidden md:visible"
              style={{ zIndex: 50 }}
            >
              <Image src="/splash2.svg" alt="splash" width={350} height={350} />
            </div>
          </div>
          <div className="grid md:grid-cols-4 grid-rows-2 mx-6 gap-1 row-span-1 md:mt-[15rem]">
            <div className="md:col-span-1 row-span-1">
              <h1 className="self-center text-6xl  font-clickerscript whitespace-nowrap  text-white">
                {" "}
                Bean Scene
              </h1>
              <p className=" pt-6 text-white   font-Playfair">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <div className="grid grid-cols-4 gap-2 my-6 justify-center items-center">
                <div className="col-span-1">
                  <BsFacebook color="white" size={30} />
                </div>
                <div className="col-span-1">
                  <BiLogoInstagramAlt color="white" size={35} />
                </div>
                <div className="col-span-1">
                  <BsTwitter color="white" size={30} />
                </div>
                <div className="col-span-1">
                  <BsYoutube color="white" size={30} />
                </div>
              </div>
            </div>
            <div className="md:col-span-1 row-span-1 text-center">
              <h1 className=" self-center text-4xl  font-Playfair whitespace-nowrap  text-white">
                About
              </h1>
              <div className="mx-5 my-5 flex justify-center">
                <ul className="font-Playfair text-md text-white text-left  py-4 ">
                  <li className="py-2 hover:font-extrabold">Menu</li>
                  <li className="py-2 hover:font-extrabold">Features</li>
                  <li className="py-2 hover:font-extrabold">News & Blogs </li>
                  <li className="py-2 hover:font-extrabold">Help & Support</li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-1 row-span-1 text-center">
              <h1 className=" self-center text-4xl  font-Playfair whitespace-nowrap  text-white">
                Company
              </h1>
              <div className="mx-5 my-5 flex justify-center">
                <ul className="font-Playfair text-md text-white text-left py-4">
                  <li className="py-2 hover:font-extrabold">How We Work</li>
                  <li className="py-2 hover:font-extrabold">
                    Terms Of Service
                  </li>
                  <li className="py-2 hover:font-extrabold">Pricing </li>
                  <li className="py-2 hover:font-extrabold">FAQ</li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-1 row-span-1 text-center">
              <h1 className=" self-center text-4xl  font-Playfair whitespace-nowrap  text-white">
                Contact Us
              </h1>
              <div className="mx-5 my-5 flex justify-center">
                <ul className="font-Playfair text-md text-white text-left py-4">
                  <li className="py-2 hover:underline">
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                    Bangalore-560016
                  </li>
                  <li className="py-2 hover:underline">+1 202-918-2132</li>
                  <li className="py-2 hover:underline">beanscene@mail.com </li>
                  <li className="py-2 hover:underline">www.beanscene.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
