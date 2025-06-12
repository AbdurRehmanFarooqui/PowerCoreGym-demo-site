import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-gray-950 text-white sticky top-0 z-50 font-['Inter'] shadow-lg"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-geometric.png")',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Poppins']">
          <Link href="/">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">PowerCore</span>
            <span className="text-white ml-1">Gym</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-10 items-center font-medium text-base">
          <Link href="#about" className="relative text-gray-200 hover:text-white transition duration-300 group">
            About
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#services" className="relative text-gray-200 hover:text-white transition duration-300 group">
            Services
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#trainers" className="relative text-gray-200 hover:text-white transition duration-300 group">
            Trainers
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="relative text-gray-200 hover:text-white transition duration-300 group">
            Contact
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#join"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            aria-label="Join PowerCore Gym now"
          >
            Join Now
          </Link>
        </div>
        <button
          className="md:hidden focus:outline-none text-gray-200 hover:text-white transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-6 pt-4 bg-gray-950 border-t border-gray-800/50 animate-slide-down">
          <Link
            href="#about"
            className="block text-lg py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-md transition duration-300 px-4"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#services"
            className="block text-lg py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-md transition duration-300 px-4"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#trainers"
            className="block text-lg py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-md transition duration-300 px-4"
            onClick={() => setIsOpen(false)}
          >
            Trainers
          </Link>
          <Link
            href="#contact"
            className="block text-lg py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-md transition duration-300 px-4"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="#join"
            className="block text-lg py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-center rounded-md transition duration-300 mt-4 px-4"
            onClick={() => setIsOpen(false)}
            aria-label="Join PowerCore Gym now"
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
}