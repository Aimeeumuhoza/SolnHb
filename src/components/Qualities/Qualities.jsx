import React from 'react';
import { FaEnvelopeOpen } from "react-icons/fa";
import {AiOutlineReload} from "react-icons/ai";
import headerMainImg from '../../assets/form.jpg';
function Qualities() {
    return (
        <div className='bg-black h-auto p-24'>
            <div className='container w-3/4  justify-center mx-auto '>
                <div className='text-center flex flex-col lg:flex-row gap-12'>
                    <div className='lg:w-1/2 text-white text-left'>
                        <h4 className='text-5xl py-8 font-bold'>We Are Professionals</h4>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde voluptates deserunt,
                            molestiae soluta cumque eum.</p>
                        <div className='flex flex-row mt-6 space-x-7'>
                            <FaEnvelopeOpen className=' text-6xl mt-9 text-title' />
                            <div className='text-left'>
                                <h3 className='py-6 mt-0 text-2xl font-bold'>Ideas & Plans</h3>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.</h3>
                            </div>
                        </div>

                        <div className='flex flex-row mt-6 space-x-7'>
                            <AiOutlineReload className=' text-6xl mt-9 text-title' />
                            <div className='text-left'>
                                <h3 className='py-6 mt-0 text-2xl font-bold'>Ideas & Plans</h3>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <img src={headerMainImg} alt='about' className='w-full h-auto lg:h-full' />
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Qualities;