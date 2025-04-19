import { SiFlutter, SiReact, SiHtml5 } from "react-icons/si";

export default function About() {
    return (
        <section className="relative flex flex-col items-center bg-black text-white min-h-screen py-6 md:py-10 px-4">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            {/* Background gradient image */}
            <div className="absolute w-screen h-full hidden md:block md:-ml-[400px] lg:-ml-[600px]"
                style={{
                    top: "-20px",
                    right: "0px", // Fixed the right property to be a direct value
                    backgroundImage: "url(/About2-1.svg)",
                    backgroundSize: "contain",
                    backgroundPosition: "center right",
                    backgroundRepeat: "no-repeat",
                    opacity: 1,
                    zIndex: 0,
                }}
            ></div>

            {/* Colored dots - Hidden on mobile */}
            <div className="hidden md:block absolute top-10 left-10 w-[19px] h-[19px] bg-red-400 rounded-full"></div>
            <div className="hidden md:block absolute top-32 right-20 w-[13px] h-[13px] bg-blue-500 rounded-full"></div>
            <div className="hidden md:block absolute mt-[675px] left-1/4 w-[18px] h-[18px] bg-green-500 rounded-full"></div>

            {/* Header Section */}
            <h1 className="relative text-2xl md:text-4xl font-bold text-center mb-2 pb-2 z-10">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-900">Values</span>
            </h1>
            <div className="relative h-1 w-48 md:w-80 bg-gradient-to-r from-purple-500 to-blue-500 mt-1 mb-4 z-10"></div>

            <p className="relative text-gray-400 text-center text-sm md:text-base mb-6 md:mb-8 z-10 px-4">
                Discover the core principles that guide us
            </p>

            {/* Cards Section */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-[350px] md:max-w-6xl z-10 px-2 md:px-4 mx-auto">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-900 bg-opacity-60 rounded-3xl p-4 md:p-6 shadow-lg flex flex-col border border-gray-700 w-full h-auto min-h-[180px] md:min-h-[248px] mx-auto">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded shrink-0"></div>
                                <div>
                                    <h2 className="text-sm md:text-lg font-semibold">Nugraha</h2>
                                    <p className="text-xs md:text-sm text-gray-400">Founder of Mangcoding</p>
                                </div>
                            </div>
                            <div className="flex gap-1.5 md:gap-3 ml-2">
                                <SiFlutter className="text-blue-400 text-sm md:text-lg" />
                                <SiReact className="text-teal-400 text-sm md:text-lg" />
                                <SiHtml5 className="text-orange-400 text-sm md:text-lg" />
                            </div>
                        </div>
                        <p className="text-gray-300 text-xs md:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Eu faucibus placerat ut
                            senectus parturient interdum enim scelerisque.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
