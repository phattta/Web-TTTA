import React from 'react';
import Image from 'next/image';

const teamMembers = [
  { name: 'Name', position: 'Position', image: '/About3-1.svg', width: 270, height: 300 },
  { name: 'Name', position: 'Position', image: '/About3-1.svg', width: 270, height: 300 },
  { name: 'Name', position: 'Position', image: '/About3-1.svg', width: 270, height: 300 },
  { name: 'Name', position: 'Position', image: '/About3-1.svg', width: 270, height: 300 }
];

const About3: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center py-[150px] md:py-[220px] lg:py-[310px] bg-[#0d0d0d] text-white overflow-hidden">
      {/* Primary Background */}
      <div className="absolute top-1/2 left-1/2 w-auto md:w-[900px] lg:w-[800.09px] h-[400px] md:h-[500px] lg:h-[663px] bg-[url('/About3-2.svg')] bg-no-repeat bg-center bg-cover opacity-20 z-[1] -translate-x-1/2 -translate-y-1/2 lg:-translate-x-[26%] lg:-translate-y-[34%]"></div>

      {/* Additional Image */}
      <Image
        src="/About3-3.svg"
        alt="Additional decoration"
        width={900}
        height={800}
        className="absolute -top-[40px] md:-top-[50px] lg:-top-[70px] left-0 w-[300px] md:w-[600px] lg:w-[900px] h-[400px] md:h-[600px] lg:h-[800px] z-[5] opacity-50"
      />

      {/* Decorative Lines */}
      <div className="hidden md:block absolute top-0 left-[85%] md:left-[90%] lg:left-[94%] w-[1.5px] lg:w-[2px] h-full bg-white/10 z-10"></div>
      <div className="hidden md:block absolute top-0 left-[15%] md:left-[10%] lg:left-[6%] w-[1.5px] lg:w-[2px] h-full bg-red-500/10 z-10"></div>
      <div className="hidden md:block absolute top-[25%] left-[75%] md:left-[70%] md:top-[20%] lg:left-[80%] lg:top-[18%] xl:top-[25%] w-[25%] md:w-[30%] lg:w-[20%] h-[1.5px] lg:h-[2px] bg-white/10 z-10"></div>
      <div className="hidden md:block absolute top-[52%] -left-[5%] md:-left-[10%] md:top-[73%] lg:-left-[15%] lg:top-[68%] xl:top-[52%] xl:w-[28%] w-[25%] md:w-[30%] lg:w-[52%] h-[1.5px] lg:h-[2px] bg-white/10 z-10"></div>

      {/* Section Title */}
      <h2 className="text-xl md:text-4xl font-bold text-white mb-[10px] -mt-[100px] md:-mt-[150px] lg:-mt-[250px]">Our Team</h2>
      <div className="w-[200px] md:w-[250px] lg:w-[300px] h-[2px] bg-gradient-to-r from-[#ff00ff] to-[#00ffff] mt-[10px]"></div>

      {/* Team Container */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center mt-[20px] md:mt-[80px] gap-[30px] md:gap-[20px] px-4 md:px-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-left text-white w-full sm:w-[270px]">
            <Image
              src={member.image}
              alt={member.name}
              width={member.width}
              height={member.height}
              className="w-full sm:w-[270px] h-auto"
            />
            <div className="mt-[10px] relative pb-[10px] pl-0">
              <p className="m-0 font-bold text-base md:text-lg">{member.name}</p>
              <p className="my-[5px] text-[0.8rem] md:text-[0.9rem] opacity-80">{member.position}</p>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About3;
