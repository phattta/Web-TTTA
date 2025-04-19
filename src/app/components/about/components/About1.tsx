import Image from "next/image";

export default function About() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-black text-white min-h-[642px] p-4 md:p-6">
      {/* Background Ornament with Soft Red Overlay */}
      <div
        className="absolute top-0 left-0 w-screen h-full hidden md:block"
        style={{
          backgroundImage: "url(/about1-2.svg), radial-gradient(circle at center, rgba(255, 0, 0, 0.1), transparent 70%), radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.2), transparent 60%)",
          backgroundSize: "contain, cover, cover",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          zIndex: 0,
          opacity: 0.4,
        }}
      ></div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center relative z-10 p-4 md:p-5 md:-mt-[50px]">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 mt-4 md:-mt-20 text-center md:text-left md:ml-[100px] lg:ml-[300px]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-white">About</span>
          <span className="text-white"> Us</span>
        </h1>

        {/* Colored Line */}
        <div className="w-48 md:w-60 h-1 bg-gradient-to-r from-purple-500 to-teal-400 mb-2 mx-auto md:mx-0 md:ml-[50px] lg:ml-60"></div>

        <div className="mt-8 md:mt-10 mx-4 md:ml-[20px] lg:ml-60 relative">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10 hidden md:block">
            <Image
              src="/about1-3.svg"
              alt="Background Pattern"
              width={310}
              height={642}
              className="opacity-30"
            />
          </div>
          {/* Text Content */}
          <p className="text-sm md:text-base lg:text-lg mb-2 relative z-20 text-center max-w-[400px]">
            We are a team that is specialized in developing
            cutting-edge technology and ready to serve
            you with the highest quality. We are dedicated
            to creativity and innovation in everything we do.
            Join us on this journey and experience new
            technologies.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative z-10">
        <Image
          src="/about1-1.svg"
          alt="About Us"
          width={630}
          height={480}
          className="w-full max-w-[250px] md:max-w-[400px] lg:max-w-[630px] h-auto"
        />
      </div>
    </section>
  );
}
