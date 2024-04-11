import React, { useState } from 'react';
import { FaTwitter, FaSkype, FaVimeoV, FaBars, FaTimes } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black h-20 w-full top-0 fixed">
      <div className="container mx-auto h-full flex justify-between items-center">
        <div className="text-white font-bold text-2xl">SolnHub.</div>
        <div className="text-white flex items-center">
          <button
            type="button"
            className="block md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes className="text-white text-3xl" /> : <FaBars className="text-white text-3xl" />}
          </button>
          <div className={`flex flex-col bg-black md:flex-row space-y-4 md:space-y-0 items-center md:flex md:space-x-14 ${isOpen ? 'block' : 'hidden'}`}>
            <a href="#" className="font-bold text-lg">About</a>
            <a href="#" className="font-bold text-lg">Pricing</a>
            <a href="#" className="font-bold text-lg">Contact</a>
            <a href="#" className="font-bold text-lg">Feature</a>
            <div className="flex space-x-2 text-2xl">
              <a href="#"><FaSkype /></a>
              <a href="#"><FaVimeoV /></a>
              <a href="#"><FaTwitter /></a>
            </div>
            <button
              type="button"
              className="flex items-center bg-black border-2 border-slate-600 p-3 w-36 hover:bg-slate-600"
            >
              <IoMdRocket className="mr-2 " />
              <span className="text-white">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
