import React from 'react';
import {MdStar} from "react-icons/md";
import profile from "../../assets/customer.jpg"
function Testimonies() {
    return (
        <div className='bg-black h-auto'>
            <div className='flex flex-col justify-center items-center p-12'>
                <h1 className='text-white text-5xl font-bold  py-7'> Customer Testimonials</h1>
                <h1 className='text-white text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias voluptatum, tempore dignissimos perferendis ea.</h1>
                <div className='flex flex-col lg:flex-row h-auto w-4/5 mt-24'>
                    <div className='flex text-white w-3/5 h-96 bg-bg1 m-4 justify-center items-center flex-col p-5'>
                        <img src={profile} alt='profile' className='w-24 rounded-full border-4 border-white mb-4' />
                        <h1 className='text-white text-2xl font-bold mb-2 mt-4 p-2'>Marie Jordan</h1>
                        <h2 className='text-gray-300 ml-4 mb-4 text-center text-xl'>Lorem ipsum dolor sit mattis amet consectetur adipiscing</h2>
                        <div className='flex flex-row'>
                            <MdStar className='text-title' size={40} />
                            <MdStar className='text-title' size={40} />
                            <MdStar className='text-title' size={40} />
                        </div>
                    </div>
                    <div className='flex text-white w-3/5 h-96 bg-bg1 m-4 justify-center items-center flex-col p-5'>
                        {/* <FaPaperPlane className='text-blue-500 mb-4' size={40} /> */}
                        <img src={profile} alt='profile' className=' w-24 border-r-8' />
                        <h1 className='text-white text-2xl mb-2 mt-4 p-2'>Marie Jordan</h1>
                        <h2 className='text-gray-300 ml-4 mb-4 text-center text-xl'>Lorem ipsum dolor sit mattis amet consectetur adipiscing</h2>
                        <div className=' flex flex-row'>
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        </div>
                    </div>
                    <div className='flex text-white w-3/5 h-96 bg-bg1 m-4 justify-center items-center flex-col p-5'>
                        {/* <FaPaperPlane className='text-blue-500 mb-4' size={40} /> */}
                        <img src={profile} alt='profile' className='w-24 rounded-full border-4 border-white mb-4' />
                        <h1 className='text-white text-2xl mb-2 mt-4 p-2'>Marie Jordan</h1>
                        <h2 className='text-gray-300 ml-4 mb-4 text-center text-xl'>Lorem ipsum dolor sit mattis amet consectetur adipiscing</h2>
                        <div className=' flex flex-row'>
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row h-auto w-4/5'>
                <div className='flex text-white w-3/5 h-96 bg-bg1 m-4 justify-center items-center flex-col p-5'>
                        {/* <FaPaperPlane className='text-blue-500 mb-4' size={40} /> */}
                        <img src={profile} alt='profile' className='w-24 rounded-full border-4 border-white mb-4' />
                        <h1 className='text-white text-2xl mb-2 mt-4 p-2'>Marie Jordan</h1>
                        <h2 className='text-gray-300 ml-4 mb-4 text-center text-xl'>Lorem ipsum dolor sit mattis amet consectetur adipiscing</h2>
                        <div className=' flex flex-row'>
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        </div>
                    </div>
                    <div className='flex text-white w-3/5 h-96 bg-bg1 m-4 justify-center items-center flex-col p-5'>
                        {/* <FaPaperPlane className='text-blue-500 mb-4' size={40} /> */}
                        <img src={profile} alt='profile' className='w-24 rounded-full border-4 border-white mb-4' />
                        <h1 className='text-white text-2xl mb-2 mt-4 p-2'>Marie Jordan</h1>
                        <h2 className='text-gray-300 ml-4 mb-4 text-center text-xl'>Lorem ipsum dolor sit mattis amet consectetur adipiscing</h2>
                        <div className=' flex flex-row'>
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        </div>
                    </div>
                    <div className='flex text-white w-3/5 h-96 bg-bg1 m-4 justify-center items-center flex-col p-5'>
                        {/* <FaPaperPlane className='text-blue-500 mb-4' size={40} /> */}
                        <img src={profile} alt='profile' className='w-24 rounded-full border-4 border-white mb-4' />
                        <h1 className='text-white text-2xl mb-2 mt-4 p-2'>Marie Jordan</h1>
                        <h2 className='text-gray-300 ml-4 mb-4 text-center text-xl'>Lorem ipsum dolor sit mattis amet consectetur adipiscing</h2>
                        <div className=' flex flex-row'>
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        <MdStar className='text-title' size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonies;


