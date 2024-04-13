import React from 'react';

const Footer = () => {
  let date = new Date();

  return (
    <footer className="bg-black py-6 flex items-center h-5 overflow-x-hidden overflow-y-hidden ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
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
    </footer>
  );
};

export default Footer;