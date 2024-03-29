import React from 'react';
import headerMainImg from '../../assets/header_main_img.jpg';
import { IoMdRocket } from "react-icons/io";
function App() {
    return (
        <div
            className="flex justify-center items-center flex-col min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${headerMainImg})`,
            }}
        >
            <div className=' flex m-6 items-center flex-col text-center w-2/3 mt-3'>
                <h1 className="text-title text-8xl font-black " style={{ lineHeight: 1.2 }}>MARKETING SOLUTION AGENCY</h1>
                <p className="text-white text-2xl mt-7">This is a simple page.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloremque dolore quia omnis maxime corporis
                    deserunt neque voluptatum.</p>
                <button type="button" className='flex items-center bg-title border-2 border-slate-600 p-3 w-36 hover:bg-slate-600 ml-10 mt-10'>
                    <IoMdRocket className='mr-2 text-white' />
                    <span className='text-white'>get started</span>
                </button>
            </div>
        </div>
    );
}

export default App;