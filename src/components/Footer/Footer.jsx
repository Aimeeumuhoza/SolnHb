import React from 'react';

const Footer = () => {
  let date = new Date();

  return (
    <div className=" flex items-center h-24 bg-black">
      <div className=" mx-auto flex space-x-56 md:flex-row px-10">
        <div className="text-white text-left">
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            reprehenderit!
          </p>
        </div>
        <div className="text-white text-left">
          <p>&copy; {date.getFullYear().toString()} SolnHub. Theme</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;