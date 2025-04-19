"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import Image from "next/image";
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Page5 = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("ecommerce");

  return (
    <section className="py-1 px-2 sm:px-6 bg-black text-white w-full relative">
      <div className="relative min-h-screen flex flex-col items-center">
        {/* Hide decorative images on mobile */}
        <Image
          src="/Combined Shape.svg"
          alt="relative"
          width={250}
          height={370}
          className="w-auto hidden xl:block absolute mt-[410px] ml-[1262px] xl:mt-[580px] 2xl:ml-[1310px] 2xl:mt-[500px]"
        />
        <div className="hidden lg:block absolute -ml-[1800px] w-[900px]">
          <Image
            src="/Ornaments.svg"
            alt="Ornaments"
            width={200}
            height={200}
            className="w-auto lg:ml-[250px] xl:ml-[60px] 2xl:-ml-[10px]"
          />
        </div>

        {/* Header */}
        <div className="text-center mt-[20px] sm:mt-[40px] mb-[50px] sm:mb-[100px]">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-600">
              Portfolio
            </span>
          </h1>
        </div>

        {/* Main content grid */}
        <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left side - Portfolio category navigation */}
          <div className="lg:w-1/4 flex flex-col justify-start items-start px-4 relative z-10">
            <ul className="space-y-4 md:space-y-6 text-gray-400 text-base sm:text-lg lg:text-xl text-left w-full">
              <li
                className={`cursor-pointer ${
                  selectedPortfolio === "ecommerce" ? "text-pink-500" : "text-white"
                } flex items-center`}
                onClick={() => setSelectedPortfolio("ecommerce")}
              >
                <span>Ecommerce Websites</span>
                {selectedPortfolio === "ecommerce" && (
                  <FaArrowRight
                    className="ml-4 text-pink-500 text-lg"
                    style={{ transform: "scaleX(2)" }}
                  />
                )}
              </li>
              <li
                className={`cursor-pointer ${selectedPortfolio === "machine-learning" ? "text-pink-500" : "text-white"
                  } flex items-center`}
                onClick={() => setSelectedPortfolio("machine-learning")}
              >
                Machine Learning
                {selectedPortfolio === "machine-learning" && (
                  <FaArrowRight
                    className="ml-4 text-pink-500 text-lg"
                    style={{ transform: "scaleX(2)" }}
                  />
                )}
              </li>
              <li
                className={`cursor-pointer ${selectedPortfolio === "frontend" ? "text-pink-500" : "text-white"
                  } flex items-center`}
                onClick={() => setSelectedPortfolio("frontend")}
              >
                Front-End Developer
                {selectedPortfolio === "frontend" && (
                  <FaArrowRight
                    className="ml-4 text-pink-500 text-lg"
                    style={{ transform: "scaleX(2)" }}
                  />
                )}
              </li>
              <li
                className={`cursor-pointer ${selectedPortfolio === "infrastructure" ? "text-pink-500" : "text-white"
                  } flex items-center`}
                onClick={() => setSelectedPortfolio("infrastructure")}
              >
                Infrastructure
                {selectedPortfolio === "infrastructure" && (
                  <FaArrowRight
                    className="ml-4 text-pink-500 text-lg"
                    style={{ transform: "scaleX(2)" }}
                  />
                )}
              </li>
            </ul>
          </div>

          {/* Right side - Swiper slider */}
          <div className="lg:w-3/4 relative">
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              effect={'coverflow'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1.8,
                  spaceBetween: 40,
                }
              }}
              className="w-full h-[300px] sm:h-[350px] lg:h-[400px] pb-[50px]"
            >
              {selectedPortfolio === "ecommerce" && (
                <>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4149.svg"
                        alt="Portfolio Image"
                        width={320}
                        height={380}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4148.svg"
                        alt="Machine Learning Portfolio Image 2"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4149.svg"
                        alt="Machine Learning Portfolio Image 3"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4148.svg"
                        alt="Machine Learning Portfolio Image 4"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}

              {selectedPortfolio === "machine-learning" && (
                <>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4149.svg"
                        alt="Machine Learning Portfolio Image 1"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4148.svg"
                        alt="Machine Learning Portfolio Image 2"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4149.svg"
                        alt="Machine Learning Portfolio Image 3"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4148.svg"
                        alt="Machine Learning Portfolio Image 4"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}

              {selectedPortfolio === "frontend" && (
                <>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4149.svg"
                        alt="Frontend Portfolio Image 1"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4148.svg"
                        alt="Frontend Portfolio Image 2"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4149.svg"
                        alt="Frontend Portfolio Image 2"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4148.svg"
                        alt="Frontend Portfolio Image 2"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}

              {selectedPortfolio === "infrastructure" && (
                <>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4149.svg"
                        alt="Infrastructure Portfolio Image 1"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4148.svg"
                        alt="Infrastructure Portfolio Image 2"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4149.svg"
                        alt="Infrastructure Portfolio Image 2"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[250px] sm:w-[280px] lg:w-[320px] h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      <Image
                        src="/Rectangle 4148.svg"
                        alt="Infrastructure Portfolio Image 2"
                        width={250}
                        height={350}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page5;
