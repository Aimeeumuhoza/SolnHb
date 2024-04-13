import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import image from "../../assets/portfolio.jpg";
// import { BiDollarCircle } from "react-icons/bi";
function Portfolio() {
    return (
        <div className='bg-bg h-auto w-full '>
            <div className='flex flex-col justify-center items-center p-12 '>
                <div className=' text-white text-4xl p-8'>
                    <h1>Our Portfolio</h1>
                </div>
                <h1 className=' text-zinc-500 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Amet corrupti laboriosam fugit expedita inventore temporibus!</h1>
                <div className='flex flex-col lg:flex-row h-auto mt-24'>
                    <div
                        className='flex text-white w-96 h-96 m-4 justify-center items-center flex-col relative'
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className='absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-70 transition-opacity duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400'>
                            <FaPaperPlane className='text-white mb-4' size={40} />
                            <h1 className='text-white text-2xl mb-4'>Services1</h1>
                            <h2 className='text-gray-300 ml-4 mb-4 text-center'>
                                Lorem ipsum dolor sit mattis amet consectetur adipiscing
                            </h2>
                            <BsArrowRightCircle className='text-white' size={40} />
                        </div>
                    </div>

                    <div
                        className='flex text-white w-96 h-96 bg-bg1 m-4 justify-center items-center flex-col relative'
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className='absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-70 transition-opacity duration-300 hover:bg-gradient-to-r hover: from-sky-500 hover:to-cyan-400 font-bold'>
                            <FaPaperPlane className='text-white mb-4' size={40} />
                            <h1 className='text-white text-2xl mb-4'>Services1</h1>
                            <h2 className='text-gray-300 ml-4 mb-4 text-center'>
                                Lorem ipsum dolor sit mattis amet consectetur adipiscing
                            </h2>
                            <BsArrowRightCircle className='text-gray-500' size={40} />
                        </div>
                    </div>
                    <div
                        className='flex text-white w-96 h-96 bg-bg1 m-4 justify-center items-center flex-col relative'
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className='absolute inset-0 bg-blue bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-70 transition-opacity duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400'>
                            <FaPaperPlane className='text-white mb-4' size={40} />
                            <h1 className='text-white text-2xl mb-4'>Services1</h1>
                            <h2 className='text-white ml-4 mb-4 text-center'>
                                Lorem ipsum dolor sit mattis amet consectetur adipiscing
                            </h2>
                            <BsArrowRightCircle className='text-white' size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;


