import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <div className=' text-white font-bold border-b border-b-white  sticky top-0 left-0 w-full z-1000 bg-gradient-to-r from-[#0379C7]/90 to-[#0888E1]/90'>
      <nav className="max-w-7xl mx-auto  text-white px-6 py-4 flex flex-wrap items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="newlogo.jpeg"
            alt="Dubai Dhan Logo"
            className="h-10 w-30 rounded"
          />

        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center ">
          <a href="#home" className="text-yellow-400 font-semibold">Home</a>
          <a href="#" className="hover:text-yellow-400">Press</a>
          <a href="#" className="hover:text-yellow-400">Careers</a>
          <a href="#" className="hover:text-yellow-400">Bank Account</a>
        </div>


        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4 text-sm">
          <Phone className="w-4 h-4" />
          <div>
            <p>Phone Number</p>
            <p className="text-gray-300 text-xs">+971 (0) 4269 1987</p>
          </div>
          <Mail className="w-4 h-4 ml-4" />
          <p>service@dubai-finanz.de</p>
        </div>

        <button className='md:hidden text-white bg-blue-400 rounded-sm p-3' onClick={() => setNavbarOpen(true)}><HiOutlineMenuAlt4 /></button>

        {/* CTA Button */}
        <div className="mt-4 md:mt-0 hidden md:flex">
          <button className="bg-[#B9F0F9] text-[#152e52] px-4 py-2 rounded-md text-sm font-semibold shadow-md transition hover:shadow-[0_0_15px_#B9F0F9] hover:scale-105 duration-300">
            <span className="font-bold">Free Initial Consultation</span><br />
            <span className="text-xs">Secure your first consultation</span>
          </button>

        </div>
      </nav>{navbarOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1c36] text-white max-w-screen shadow-lg animate-slide-down">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {/* Close button */}
            <button onClick={() => setNavbarOpen(false)} className="self-end text-white text-2xl">
              &times;
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="newlogo.jpeg"
                alt="Dubai Finanz Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-4 text-lg">
              <a href="#home" className="text-yellow-400 font-semibold">Home</a>
              <a href="#" className="hover:text-yellow-400">Press</a>
              <a href="#" className="hover:text-yellow-400">Career</a>
              <a href="#" className="hover:text-yellow-400">Bank account</a>
            </nav>

            {/* Contact */}
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <div>
                  <p>Telephone number</p>
                  <p className="text-gray-300 text-xs">+971 (0) 4269 1987</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <p>service@dubai-finanz.de</p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-[#B9F0F9] text-[#152e52] px-4 py-2 rounded-md text-sm font-semibold shadow-md transition hover:shadow-[0_0_15px_#B9F0F9] hover:scale-105 duration-300">
                <span className="font-bold">Free Initial Consultation</span><br />
                <span className="text-xs">Secure your first consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
