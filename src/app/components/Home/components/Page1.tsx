import React from 'react';
import Navbar from '../../Navbar/Navbar';

const Page1 = () => {
    return (
        <>
            <Navbar />
            <section
                className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-black overflow-x-hidden"
                style={{
                    backgroundImage: "url('/Page11.jpg')",
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh', 
                }}
            >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center h-full">
                        {/* Left content */}
                        <div className="text-center lg:text-left px-2 sm:px-4">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white mt-6 sm:mt-8 lg:mt-10">
                                Best feature info goes just here
                            </h2>
                            <p className="text-gray-200 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl">
                                Lorem ipsum dolor sit amet consectetur. Dictum porta elementum quam rutrum lacus. Ullamcorper facilisi purus
                                tortor volutpat rutrum adipiscPing semper pharetra. Dignissim vitae at mauris nec quam ipsum viverra.
                            </p>

                            {/* Feature list */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                                <div className="flex items-start space-x-2">
                                    <span className="text-blue-600 text-lg sm:text-xl flex-shrink-0">✔️</span>
                                    <p className="text-gray-200 text-sm sm:text-base">You&apos;ll be able to effortlessly build website listings</p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-blue-600 text-lg sm:text-xl flex-shrink-0">✔️</span>
                                    <p className="text-gray-200 text-sm sm:text-base">You&apos;ll be able to effortlessly build website listings</p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-blue-600 text-lg sm:text-xl flex-shrink-0">✔️</span>
                                    <p className="text-gray-200 text-sm sm:text-base">Build website and any project with dummy lorem</p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-blue-600 text-lg sm:text-xl flex-shrink-0">✔️</span>
                                    <p className="text-gray-200 text-sm sm:text-base">Effortlessly build website and any project and finish</p>
                                </div>
                            </div>

                            {/* White Box below text */}
                            <div
                                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mx-auto lg:mx-0 w-full sm:w-[200px] h-[60px] sm:h-[80px]"
                            >
                                <p className="text-black text-base sm:text-lg text-center">Your content here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page1;