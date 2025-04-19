import Image from "next/image";
import { memo } from "react";

// Service card component for better code organization and reusability
const ServiceCard = memo(({ item }: { item: number }) => (
  <div className="flex flex-col md:flex-row bg-white text-black border-2 w-full max-w-[900px] lg:max-w-[1203px] min-h-[305px] overflow-hidden mx-auto">
    <div className="w-full md:w-[40%] lg:w-1/3 bg-gray-300 flex items-center justify-center md:mt-[10px] min-h-[250px] md:min-h-[295px] overflow-hidden rounded-lg">
      <Image
        src="/.svg"
        alt="Service Image"
        width={400}
        height={300}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="w-full md:w-[60%] lg:w-2/3 p-4 md:p-6 lg:p-8 flex flex-col relative">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Service Title</h2>
      <p className="text-gray-700 text-sm md:text-base mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
      </p>

      <div className="flex space-x-3 absolute bottom-0 right-2">
        {[1, 2, 3].map((iconIndex) => (
          <div key={iconIndex} className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] bg-gray-300"></div>
        ))}
      </div>
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

// Contact section component for better organization
const ContactSection = memo(() => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-black rounded-lg mt-8 md:mt-12 max-w-[900px] lg:max-w-[1247px] min-h-[305px] mx-auto">
    <div className="w-full md:w-[40%] lg:w-1/3 bg-gray-700 flex items-center justify-center min-h-[250px] md:min-h-[295px] rounded-lg"></div>

    <div className="w-full md:flex-1 flex flex-col">
      <div className="bg-white text-black text-center font-semibold text-xl md:text-2xl w-full h-[60px] md:h-[74px] flex items-center justify-center mb-4 shadow">
        Contact
      </div>
      <div className="space-y-3 md:space-y-4 px-2 md:px-4">
        <p className="text-gray-700 text-sm md:text-base">
          Contact us for more information about our services and how we can help you
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          achieve your goals through our comprehensive solutions and expert guidance.
        </p>
      </div>
    </div>
  </div>
));

ContactSection.displayName = 'ContactSection';

// Main Services component
export default function Services() {
  return (
    <section className="bg-black text-white min-h-screen py-6 md:py-10 px-4">
      <div className="max-w-[900px] lg:max-w-[1200px] mx-auto">
        <div className="text-center md:text-left mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:ml-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500">Services</span>
          </h1>
          <div className="w-[200px] md:w-[300px] h-1 mx-auto md:mx-0 md:-ml-0 bg-gradient-to-r from-purple-500 to-teal-400"></div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {[1, 2, 3, 4].map((item) => (
            <ServiceCard key={item} item={item} />
          ))}
        </div>

        <ContactSection />
      </div>
    </section>
  );
}


