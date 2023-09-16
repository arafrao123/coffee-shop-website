import Image from "next/image";
export default function OrderToday() {
  return (
    <div className="flex flex-grow-cols bg-[url('/bg2.svg')] bg-cover bg-no-repeat w-screen h-screen overflow-y-hidden mt-[6rem] ">
      <div className="w-full h-full flex">
        <div className="grid grid-cols-6 items-center justify-center">
          <div className="col-span-4 mx-4">
            <h1 className="text-white text-left font-Playfair text-4xl font-extrabold">
              Get a chance to have an <br></br> Amazing morning
            </h1>
            <p className="text-md font-Playfair font-thin text-white py-3">
              We are giving you are one time opportunity to
              <br></br> experience a better life with coffee.
            </p>
            <div className="my-2">
              <button className="text-[16px] font-Playfair font-extrabold w-fit h-fit px-8 py-2  bg-[#F9C06A] rounded-full hover:shadow-white hover:shadow-sm">
                Order Now
              </button>
            </div>
          </div>
          <div className="col-span-2 justify-start mr-6 hover:animate-pulse">
            <Image src="/cup.svg" alt="cup" width={400} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}
