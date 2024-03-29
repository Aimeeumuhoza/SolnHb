import React from 'react';
import { FaTwitter, FaSkype, FaVimeoV } from "react-icons/fa";
import {IoMdRocket} from "react-icons/io";
function Navbar() {
    return (
        <div className='bg-black h-20  w-full space-y-72 top-0 fixed'>
        <div className='container mx-auto h-full flex justify-center items-center'>
            <div className=' mr-44'>
            <div className='text-white font-bold text-2xl space-x-96'>SolnHub.</div>
            </div>
          <div className='text-white flex flex-row space-x-14 items-center'>
            <div className='flex space-x-5 font-bold text-lg'>
              <div>About</div>
              <div>Pricing</div>
              <div>contact</div>
              <div>feature</div>
            </div>
      
            <div className='flex space-x-2 text-2xl'>
              <FaSkype />
              <FaVimeoV />
              <FaTwitter />
            </div>
          
      
            <button type="button" className='flex items-center bg-black border-2 border-slate-600 p-3 w-36 hover:bg-slate-600 ml-10'>
            <IoMdRocket className='mr-2' />
            <span className='text-white'>get started</span>
          </button>
        </div>
        </div>
      </div>
      
    );
}

export default Navbar;