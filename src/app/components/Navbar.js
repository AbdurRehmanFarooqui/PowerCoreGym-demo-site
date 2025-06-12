import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white shadow-lg sticky top-0 z-50 font-sans"> {/* Changed bg-gray-900 to 950 for deeper contrast */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between"> {/* Increased py for more vertical space */}
        <div className="text-2xl font-extrabold tracking-wider text-red-500"> {/* Larger text, bolder, and a vibrant gym color */}
          <Link href="/">
            <span className="inline-block">PowerCore</span>
            <span className="inline-block text-white ml-1">Gym</span> {/* 'Gym' in white for contrast */}
          </Link>
        </div>
        <div className="hidden md:flex gap-8 font-semibold text-lg items-center"> {/* Increased gap, slightly larger font, bolder */}
          <Link href="#about" className="hover:text-red-500 transition duration-300">About</Link> {/* Hover effect */}
          <Link href="#services" className="hover:text-red-500 transition duration-300">Services</Link>
          <Link href="#trainers" className="hover:text-red-500 transition duration-300">Trainers</Link>
          <Link href="#contact" className="hover:text-red-500 transition duration-300">Contact</Link>
          {/* Optional: Add a call-to-action button for memberships/sign-up */}
          <Link href="#join" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full transition duration-300 ml-4">
            Join Now
          </Link>
        </div>
        <button
          className="md:hidden focus:outline-none text-gray-300 hover:text-white transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation" // Accessibility improvement
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"> {/* Slightly larger icon */}
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-900 border-t border-gray-800 animate-slide-down"> {/* Added background, border, and animation */}
          <Link href="#about" className="block text-lg py-2 hover:text-red-500 transition duration-300">About</Link>
          <Link href="#services" className="block text-lg py-2 hover:text-red-500 transition duration-300">Services</Link>
          <Link href="#trainers" className="block text-lg py-2 hover:text-red-500 transition duration-300">Trainers</Link>
          <Link href="#contact" className="block text-lg py-2 hover:text-red-500 transition duration-300">Contact</Link>
          <Link href="#join" className="block text-lg py-2 bg-red-600 hover:bg-red-700 text-center rounded-md transition duration-300 mt-4">
            Join Now
          </Link>
        </div>
      )}
      {/* You'll need to add this keyframe animation to your global CSS (e.g., globals.css) */}
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}