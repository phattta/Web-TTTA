import React from 'react';
import Image from 'next/image';

const Page6 = () => {
  return (
    <section className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16 min-h-screen relative">
      {/* Title */}
      <div className="text-center mb-4 sm:mb-6 lg:mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-600">Partners</span>
        </h2>
      </div>

      {/* Background image */}
      <div className="relative max-w-[320px] sm:max-w-2xl lg:max-w-6xl mx-auto px-4 mt-20 sm:mt-24 lg:mt-32">
        <Image
          src="/Map.svg"
          alt="World map"
          width={1246}
          height={629}
          className="w-full h-auto object-contain opacity-80"
          priority
        />

        {/* Center the logos */}
        <div className="absolute inset-0 flex items-center justify-center -mt-[10px] sm:-mt-[150px] lg:-mt-[200px]">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 w-full px-4 sm:px-8 lg:px-16">
            <div className="flex items-center justify-center">
              <Image
                src="/mitrphol.png"
                alt="Partner 1"
                width={300}
                height={150}
                className="w-[80px] sm:w-[120px] lg:w-[180px] h-auto object-contain transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/knacx.png"
                alt="Partner 2"
                width={300}
                height={160}
                className="w-[100px] sm:w-[150px] lg:w-[200px] h-auto object-contain transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/clinter.png"
                alt="Partner 3"
                width={300}
                height={150}
                className="w-[100px] sm:w-[150px] lg:w-[200px] h-auto object-contain transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/eqtechenergy.png"
                alt="Partner 4"
                width={300}
                height={150}
                className="w-[100px] sm:w-[150px] lg:w-[200px] h-auto object-contain 
                          transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page6;
