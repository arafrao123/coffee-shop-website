"use client";
import { useState } from "react";
import "animate.css";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className=" overflow-hidden w-screen h-screen bg-[url('/bg.svg')] bg-cover bg-no-repeat">
        <nav className="w-full h-fit  border-black bg-transparent bg-clip-padding backdrop-brightness-50 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
            <a href="#home" className="flex items-center">
              <span className="ml-2 self-center text-4xl  font-clickerscript whitespace-nowrap  text-white">
                Bean Scene
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white focus:ring-4 focus:outline-none font-medium  text-sm px-4 py-2 text-center mr-3 md:mr-0 hover:underline
            focus:ring-yellow-900 font-Playfair rounded-xl "
              >
                Sign In
              </button>
              <button
                type="button"
                className="text-black font-semibold focus:ring-4 focus:outline-none rounded-xl text-sm px-4 py-2 text-center ml-3 md:mr-0 bg-[#F9C06A]  focus:ring-yellow-900 font-Playfair hover:shadow-white hover:shadow-sm"
              >
                Sign Up
              </button>

              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={menuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                menuOpen ? "" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="#home"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 hover:text-yellow-700 font-Playfair"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about-me"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:font-bold md:p-0 hover:text-yellow-700  border-gray-700 font-Playfair mix-blend-multiply"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:font-bold md:p-0 hover:text-yellow-700  border-gray-700 font-Playfair"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/arafkhalid/"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:font-bold md:p-0 hover:text-yellow-700  border-gray-700 font-Playfair"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex flex-grow-cols  w-screen h-screen overflow-hidden ">
          <div className="w-full h-full flex backdrop-brightness-50">
            <div className="grid grid-rows-1 justify-center items-center mx-8">
              <div className="row-span-1 text-left md:mt-5 mt-0">
                <h1 className="text-white text-left font-Playfair animate__animated animate__fadeInLeft">
                  We’ve got your morning covered with
                </h1>
                <h1 className="text-[9rem] text-white font-clickerscript my-1 animate__animated animate__fadeInLeft">
                  Coffee
                </h1>
                <div className="w-fit">
                  <h1 className="text-white text-left font-Playfair w-fit animate__animated animate__fadeInUp">
                    It is best to start your day with a cup of coffee. Discover
                    the
                    <br></br>
                    best flavours coffee you will ever have. We provide the best
                    <br></br>
                    for our customers.
                  </h1>
                </div>
                <div className="">
                  <button className="my-4  text-[16px] font-Playfair font-extrabold w-fit h-fit px-4 py-2 bg-[#F9C06A] rounded-full hover:shadow-white hover:shadow-sm">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
