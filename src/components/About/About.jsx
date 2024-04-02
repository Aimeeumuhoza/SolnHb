import React from 'react';
import headerMainImg from '../../assets/about.jpg';
function About() {
    return (
        <div className='bg-dark h-auto p-24'>
            <div className='container w-3/4  justify-center mx-auto '>
            <div className='text-center flex flex-col lg:flex-row gap-12'>
  <div className='lg:w-1/2'>
    <img src={headerMainImg} alt='about' className='w-full h-auto lg:h-full' />
  </div>
  <div className='lg:w-1/2 text-white text-left'>
    <h1 className='text-5xl py-8 font-bold'>About Page</h1>
    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui eum at unde ipsa quibusdam sunt incidunt voluptates dicta ab provident
      doloremque perferendis ad voluptatem mollitia amet magnam, hic aliquam cupiditate blanditiis quas eos neque saepe? Quas expedita cupiditate et sint nesciunt, ipsum eos reiciendis cumque.
      At provident ab veritatis.

      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Pariatur nobis laudantium nesciunt maxime tenetur illo.</p>
  </div>
</div>


            </div>

        </div>
    );
}

export default About;