import React from "react";
import Image from "next/image";

const Page3 = () => {
  return (
    <section className="relative py-10 md:py-20 px-4 md:px-20 bg-black overflow-x-hidden">
      {/* วงกลมพื้นหลัง */}
      <div className="absolute inset-0 z-0 flex justify-center items-start pointer-events-none">
        <Image
          src="/Ornaments.svg"
          alt="Ornaments"
          width={1061}
          height={1061}
          className="opacity-50 w-[800px] md:w-[1061px] mt-[-432px] md:mt-[-532px] ml-0 md:ml-[30px] block lg:ml-[190px] lg:-mt-[710px]"
          priority
        />
        <Image
          src="/home1.svg"
          alt="Made for everyone banner"
          className="-ml-[150px] mt-[80px] hidden md:block"
          width={10}
          height={10}
        />
        <Image
          src="/home4.svg"
          alt="Made for everyone banner"
          className="-mt-[300px] -ml-[600px] hidden md:block"
          width={928}
          height={309}
        />
      </div>

      {/* Heading Section */}
      <div className="text-center mb-8 md:mb-12 md:-mt-[50px] -mt-[18px] lg:-mt-[25px] md:ml-[px]">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            background:
              "linear-gradient(to right, #cccccc 50%, #fbbf24, #ea580c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Made for everyone
        </h2>
        <p className="text-gray-600 text-sm md:text-base px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:-mt-[15px] lg:grid-cols-3 gap-8 mt-[91px] lg:mt-[62px]">
        {/* First Card */}
        <div className="bg-white shadow-lg rounded-lg text-center relative">
          {/* Image */}
          <div className="w-full mb-8 relative">
            <Image
              src="/Page3.1.svg"
              alt="For IT companies"
              className="w-full h-full object-cover rounded-md"
              width={370}
              height={370}
            />
            {/* Briefcase Icon overlapping the image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <Image
                src="/figure.svg"
                alt="Briefcase Icon"
                width={60}
                height={60}
              />

            </div>
          </div>
          {/* Title */}
          <h3 className="text-lg font-semibold mb-3">For IT companies</h3>
          {/* Description */}
          <p className="text-gray-600 mb-12">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
          </p>
          {/* Button */}
          <button
            className="text-white py-2 px-5 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #0079ff, #001F54)",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 50%)",
              top: "91%",
            }}
          >
            Read More
          </button>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-lg rounded-lg text-center relative">
          {/* Image section remains the same */}
          <div className="w-full mb-8 relative">
            <Image
              src="/Page3.2.svg"
              alt="For Startups"
              className="w-full h-full object-cover rounded-md"
              width={370}
              height={370}
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-2">
              <Image
                src="/figure1.svg"
                alt="Briefcase Icon"
                width={60}
                height={60}
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3">For Startups</h3>
          <p className="text-gray-600 mb-12">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
          </p>
          <button
            className="text-white py-2 px-5 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #0079ff, #001F54)",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 50%)",
              top: "91%",
            }}
          >
            Read More
          </button>
        </div>

        {/* Third Card */}
        <div className="bg-white shadow-lg rounded-lg text-center relative">
          {/* Image section remains the same */}
          <div className="w-full mb-8 relative">
            <Image
              src="/Page3.3.svg"
              alt="For Partners"
              className="w-full h-full object-cover rounded-md"
              width={370}
              height={370}
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-2">
              <Image
                src="/figur2.svg"
                alt="Briefcase Icon"
                width={60}
                height={60}
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3">Partners</h3>
          <p className="text-gray-600 mb-12">
            Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
          </p>
          <button
            className="text-white py-2 px-5 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #0079ff, #001F54)",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 50%)",
              top: "91%",
            }}
          >
            Read More
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/home3.svg"
          alt="Made for everyone banner"
          className="hidden md:block ml-[850px] mt-[20px]"
          width={18}
          height={18}
        />
        <Image
          src="/home2.svg"
          alt="Made for everyone banner"
          className="hidden md:block -ml-[40px] -mt-[575px]"
          width={19}
          height={19}
        />
      </div>
    </section>
  );
};

export default Page3; 3;
