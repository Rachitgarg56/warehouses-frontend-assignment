import React, { useState } from 'react';
import logo from  '../assets/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center p-2 bg-white">
          <img
            src={logo}
            alt="Warehouse Logo"
            className="h-6 w-30 mr-2"
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <p className="text-white hover:text-blue-400">Home</p>
          <p className="text-white hover:text-blue-400">About</p>
          <p className="text-white hover:text-blue-400">Services</p>
          <p className="text-white hover:text-blue-400">Contact</p>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block text-white py-2 px-4 hover:bg-blue-700">Home</a>
          <a href="#about" className="block text-white py-2 px-4 hover:bg-blue-700">About</a>
          <a href="#services" className="block text-white py-2 px-4 hover:bg-blue-700">Services</a>
          <a href="#contact" className="block text-white py-2 px-4 hover:bg-blue-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
