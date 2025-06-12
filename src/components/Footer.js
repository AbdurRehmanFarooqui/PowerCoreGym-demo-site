import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
    } else {
      setError('');
      console.log('Newsletter subscription:', email); // Replace with actual API call
      setEmail('');
      alert('Subscribed successfully!'); // Replace with toast notification in production
    }
  };

  return (
    <footer
      className="relative bg-gray-950 text-gray-200 py-16 px-4 sm:px-6 lg:px-12 font-['Inter']"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-geometric.png")',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Subtle background texture overlay */}
      <div className="absolute inset-0 bg-gray-950/90"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
          {/* Brand Info */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-extrabold font-['Poppins'] text-white">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">PowerCore</span> Gym
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transforming lives through fitness with state-of-the-art facilities and expert trainers in Karachi.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit PowerCore Gym on Instagram"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 0C8.74 0 8.333.014 7.02.066 5.61 1.01 4.532 2.083 3.498 3.498.067 7.02.014 8.74 0 12s.014 3.26.066 4.58c.078 1.41.66 2.532 1.583 3.498 1.415 1.415 2.083 1.583 3.498 1.66 1.31.052 1.717.066 4.58.066s3.26-.014 4.58-.066c1.41-.078 2.532-.66 3.498-1.583 1.415-1.415 1.583-2.083 1.66-3.498.052-1.31.066-1.717.066-4.58s-.014-3.26-.066-4.58c-.078-1.41-.66-2.532-1.583-3.498C20.489.673 19.366.09 17.956.013 16.643.014 16.236 0 12 0zm0 2.16c3.2 0 3.58.01 4.85.064 1.177.054 1.838.28 2.378.471.619.227 1.094.575 1.516.998.423.423.771.898.998 1.516.191.54.417 1.201.471 2.378.054 1.27.064 1.65.064 4.85s-.01 3.58-.064 4.85c-.054 1.177-.28 1.838-.471 2.378-.227.619-.575 1.094-.998 1.516-.423.423-.898.771-1.516.998-.54.191-1.201.417-2.378.471-1.27.054-1.65.064-4.85.064s-3.58-.01-4.85-.064c-1.177-.054-1.838-.28-2.378-.471-.619-.227-1.094-.575-1.516-.998-.423-.423-.771-.898-.998-1.516-.191-.54-.417-1.201-.471-2.378C2.16 15.58 2.15 15.2 2.15 12s.01-3.58.064-4.85c.054-1.177.28-1.838.471-2.378.227-.619.575-1.094.998-1.516.423-.423.898-.771 1.516-.998.54-.191 1.201-.417 2.378-.471C8.42 2.16 8.79 2.15 12 2.15zm0 3.635a6.214 6.214 0 100 12.428 6.214 6.214 0 000-12.428zM12 16a4 4 0 110-8 4 4 0 010 8zm6.5-10.4a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit PowerCore Gym on Facebook"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.225 0-1.624.755-1.624 1.597V12h2.77l-.443 2.89h-2.327v6.987C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with PowerCore Gym on WhatsApp"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.0007 2C6.48673 2 2.00073 6.486 2.00073 12C2.00073 17.514 6.48673 22 12.0007 22C13.8437 22 15.5457 21.497 17.0007 20.672L21.0007 22L19.9997 17.989C21.2137 16.297 22.0007 14.237 22.0007 12C22.0007 6.486 17.5147 2 12.0007 2ZM17.2187 15.064C16.8047 15.932 15.9227 16.037 15.4097 16.142C14.8967 16.247 14.1957 16.32 13.4117 16.115C12.6267 15.91 11.4557 15.547 10.1347 14.475C8.81473 13.403 7.93273 12.186 7.62573 11.238C7.31973 10.29 7.42473 9.777 7.52973 9.569C7.63473 9.362 7.84273 9.006 8.05073 8.799C8.25873 8.591 8.56573 8.486 8.77373 8.486C8.87873 8.486 8.98373 8.486 9.08873 8.486C9.29673 8.486 9.40173 8.486 9.50673 8.591C9.61173 8.696 9.71673 8.904 9.82173 9.111C9.92673 9.319 10.0317 9.526 10.1367 9.734C10.2417 9.941 10.4497 10.149 10.3447 10.357C10.2397 10.564 10.0317 10.772 9.92673 10.979C9.82173 11.186 9.71673 11.394 9.61173 11.601C9.50673 11.809 9.50673 11.913 9.61173 12.018C9.71673 12.123 10.1367 12.331 10.7627 12.855C11.6447 13.481 12.3457 13.788 12.5537 13.893C12.7617 14.09 13.0687 13.995 13.3757 13.788C13.6827 13.481 14.4677 12.78 14.8817 12.256C15.2957 11.732 15.6027 11.837 15.9107 11.942C16.2167 12.047 16.8117 12.354 17.0197 12.459C17.2267 12.564 17.3317 12.772 17.4367 12.979C17.5417 13.186 17.5417 13.493 17.2187 15.064Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#about" className="hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#trainers" className="hover:text-white transition duration-300">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>PowerCore Gym, Main Shahrah-e-Faisal, Karachi, Pakistan</li>
              <li>
                <a href="tel:+923001234567" className="hover:text-white transition duration-300">
                  +92 300 1234567
                </a>
              </li>
              <li>
                <a href="mailto:info@powercoregym.pk" className="hover:text-white transition duration-300">
                  info@powercoregym.pk
                </a>
              </li>
            </ul>
            <form onSubmit={handleNewsletterSubmit} className="mt-6">
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-white mb-2">
                Subscribe to Our Newsletter
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-grow border ${error ? 'border-red-500' : 'border-gray-600'
                    } bg-gray-700 text-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-200`}
                  aria-invalid={!!error}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe

                </button>
              </div>
              {error && (
                <p id="newsletter-error" className="text-red-400 text-sm mt-2">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-800/50 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <p className="text-sm text-gray-400">
          © {currentYear} <span className="font-semibold text-white">PowerCore Gym</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}