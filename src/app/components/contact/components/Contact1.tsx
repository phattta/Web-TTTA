"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Contact: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <h1 className="text-gray-700 font-semibold">Company Name</h1>
          </div>
          {/* Hamburger Menu Button */}
          <button 
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <nav className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          sm:flex flex-col sm:flex-row 
          w-full sm:w-auto 
          items-center 
          gap-4 sm:space-x-8 
          text-gray-600
          mt-4 sm:mt-0
        `}>
          <Link href="/" className="hover:text-black w-full sm:w-auto text-center py-2 sm:py-0">Home</Link>
          <Link href="/about" className="hover:text-black w-full sm:w-auto text-center py-2 sm:py-0">About</Link>
          <Link href="/services" className="hover:text-black w-full sm:w-auto text-center py-2 sm:py-0">Services</Link>
          <Link href="/contact" className="hover:text-black w-full sm:w-auto text-center py-2 sm:py-0">Contact</Link>
        </nav>
      </header>

      {/* Main Contact Section */}
      <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-10">
        {/* Contact Us Title */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Us</h2>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-2">Long Way Down - One Direction Two Ghosts - Harry Styles</h2>
        </div>

        {/* Contact Form Container */}
        <div className="bg-white shadow-lg rounded-[20px] overflow-hidden w-full max-w-[1196px] p-4">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Contact Information Section */}
            <div className="bg-[#1A1A1A] text-white p-6 sm:p-8 lg:w-1/3 flex flex-col justify-start rounded-[20px] mb-6 lg:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-gray-400 mb-6">Say something to start a live chat!</p>
              <div className="space-y-8 sm:space-y-12 mt-[40px] sm:mt-[80px]">
                <p className="flex items-center space-x-2">
                  <img 
                    src="/bxs_phone-call.svg" 
                    alt="Phone Icon" 
                    className="w-5 sm:w-6 h-5 sm:h-6"
                  />
                  <span className="text-sm sm:text-base">+66 (0) 89 999 9999</span>
                </p>
                <p className="flex items-center space-x-2">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-sm sm:text-base">contact@site.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-sm sm:text-base">524 Main St, Anytown, Country</span>
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="p-4 sm:p-8 lg:w-2/3">
              <form className="flex flex-col h-full">
                <div className="flex-grow space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[10px]">
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-gray-500">First Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 placeholder-gray-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Last Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 placeholder-gray-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-500 mb-2">Email</label>
                      <input
                        type="email"
                        className="mt-2 block w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 placeholder-gray-400 pb-2"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-500 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="mt-2 block w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 placeholder-gray-400 pb-2"
                        placeholder="+66 123 456 789"
                      />
                    </div>
                  </div>

                  {/* Radio Button Section for Selecting Services */}
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Select Services</label>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6">
                      {['General Inquiry', 'Support', 'Feedback', 'Other'].map((service, index) => (
                        <label key={index} className="flex items-center space-x-2">
                          <div className="relative flex items-center">
                            <input
                              type="radio"
                              name="service"
                              value={service.toLowerCase().replace(' ', '-')}
                              className="peer appearance-none w-4 h-4 rounded-full border border-gray-300 checked:bg-black checked:border-black"
                            />
                            <svg
                              className="absolute w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100 text-white left-0.5 top-0.5"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-500">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500 mt-[20px]">Message</label>
                    <div className="relative">
                      <textarea
                        className="mt-1 block w-full focus:outline-none focus:ring-0 placeholder-gray-400 resize-none"
                        placeholder="Write your message..."
                        rows={1}
                        style={{ height: '2rem', border: 'none' }}
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200"></div>
                    </div>
                  </div>

                  {/* Aligning Send Message Button to the Right */}
                  <div className="flex justify-end mt-auto pt-6">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
