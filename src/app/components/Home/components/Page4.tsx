import React from 'react';
import Image from 'next/image';

const Page4 = () => {
  return (
    <section className="bg-black text-white py-4 sm:py-8 md:py-12 lg:py-16 relative flex justify-center items-center overflow-x-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
        {/* Text section */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 text-left relative z-10 pl-4 sm:pl-8 lg:pl-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl lg:-ml-[20px] font-bold leading-tight">
            Best <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-400">feature</span> info
            <br className="hidden sm:block" /> goes just here
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg lg:-ml-[20px] max-w-xl">
            When Im with you, everything feels right.. When im with you, nothing else matters. Do you have any idea how much I adore you? You've been a blessing to my life. All love is sweet, but ours is the sweetest. When I'm feeling lost
          </p>

          {/* Feature List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-2">
            {/* Feature items remain the same, just update the classes */}
            <li className="flex items-center gap-4 lg:-ml-[40px]">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <Image src="/Icons-feature.png" alt="Feature 1" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-xs md:text-base">NothatIvefoundyou,Imnever</span>
            </li>

            {/* Feature 2 */}
            <li className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <Image src="/Icons-feature.svg" alt="Feature 2" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-sm md:text-base">Evenafterallthistime,youstillkii</span>
            </li>

            {/* Feature 3 */}
            <li className="flex items-center gap-4 lg:-ml-[40px]">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <Image src="/Icons-feature.svg" alt="Feature 3" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-sm md:text-base">Becauseyoreinmylife,Iknow</span>
            </li>

            {/* Feature 4 */}
            <li className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <Image src="/Icons-feature.svg" alt="Feature 4" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-sm md:text-base">Youhavemademeanincredibly</span>
            </li>
          </ul>
        </div>

        {/* Image section */}
        <div className="flex justify-center items-center w-full mt-8 lg:mt-0 lg:ml-[20px]">
          <div className="relative w-full flex justify-center">
            <Image
              src="/Frame 2.svg"
              alt="Feature illustration"
              width={480}
              height={440}
              className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[400px] xl:w-[480px]
                rounded-lg shadow-lg object-contain
                transform hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="hidden lg:block absolute top-1/3 -left-8 transform -translate-x-1/3 ml-[200px] md:ml-[160px]">
        <Image
          src="/Group.svg"
          alt="Background illustration"
          width={400}
          height={352}
          className="w-[380px] xl:w-[500px] opacity-60"
        />
      </div>
    </section>
  );
};

export default Page4;
