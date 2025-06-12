import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide">
          <Link href="/">PowerCore Gym</Link>
        </div>
        <div className="hidden md:flex gap-6 font-medium">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#trainers">Trainers</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="#about" className="block">About</Link>
          <Link href="#services" className="block">Services</Link>
          <Link href="#trainers" className="block">Trainers</Link>
          <Link href="#contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
