export default function Subscribe() {
  return (
    <div className="relative flex flex-row bg-[url('/bg2.svg')] bg-cover bg-no-repeat w-screen h-fit overflow-y-hidden mt-[6rem] justify-center items-center z-10 ">
      <div className="text-center mb-8 -z-10 relative">
        <h1 className="font-Playfair font-light text-white text-6xl mt-10">
          Subscribe to get the Latest News
        </h1>
        <p className="text-lg font-Playfair text-white py-4">
          Don’t miss out on our latest news, updates, tips, and special offers
        </p>
        <div className="flex justify-center items-center rounded-lg">
          <div className="bg-[#FFF8F1] p-4 rounded-l-lg">
            <p className="font-Playfair text-[#A8A49F] text-left font-light md:mr-[15rem]">
              Enter your mail
            </p>
          </div>
          <div className="bg-[#F9C06A] font-Playfair text-[#603809] font-bold p-4 rounded-r-lg">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
}
