import React from 'react';
import Navbar from '../Navbar/Navbar';
import image from "../../assets/header_main_img.jpg"
import './Header.css';

function Header() {
    return (
        <div className='relative'>
          
            <div className='text-white absolute top-24 left-0 w-full h-full flex flex-col justify-center items-center text-black'>
               
                <p>This is a basic page created using React.</p>
                <p>This is a basic page created using React.</p>
            </div>
            <div className='imageCont absolute top-0 left-0 w-full h-full bg-cover bg-center'>
                {/* No need for <img> here */}
            </div>
        </div>
    );
}

export default Header;
