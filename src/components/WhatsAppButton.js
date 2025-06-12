'use client';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
      <a
        href="https://wa.me/923001234567"
        className="relative flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 animate-bounce-slow"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PowerCore Gym on WhatsApp"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        onFocus={() => setIsTooltipVisible(true)}
        onBlur={() => setIsTooltipVisible(false)}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.0007 2C6.48673 2 2.00073 6.486 2.00073 12C2.00073 17.514 6.48673 22 12.0007 22C13.8437 22 15.5457 21.497 17.0007 20.672L21.0007 22L19.9997 17.989C21.2137 16.297 22.0007 14.237 22.0007 12C22.0007 6.486 17.5147 2 12.0007 2ZM17.2187 15.064C16.8047 15.932 15.9227 16.037 15.4097 16.142C14.8967 16.247 14.1957 16.32 13.4117 16.115C12.6267 15.91 11.4557 15.547 10.1347 14.475C8.81473 13.403 7.93273 12.186 7.62573 11.238C7.31973 10.29 7.42473 9.777 7.52973 9.569C7.63473 9.362 7.84273 9.006 8.05073 8.799C8.25873 8.591 8.56573 8.486 8.77373 8.486C8.87873 8.486 8.98373 8.486 9.08873 8.486C9.29673 8.486 9.40173 8.486 9.50673 8.591C9.61173 8.696 9.71673 8.904 9.82173 9.111C9.92673 9.319 10.0317 9.526 10.1367 9.734C10.2417 9.941 10.4497 10.149 10.3447 10.357C10.2397 10.564 10.0317 10.772 9.92673 10.979C9.82173 11.186 9.71673 11.394 9.61173 11.601C9.50673 11.809 9.50673 11.913 9.61173 12.018C9.71673 12.123 10.1367 12.331 10.7627 12.855C11.6447 13.481 12.3457 13.788 12.5537 13.893C12.7617 14.09 13.0687 13.995 13.3757 13.788C13.6827 13.481 14.4677 12.78 14.8817 12.256C15.2957 11.732 15.6027 11.837 15.9107 11.942C16.2167 12.047 16.8117 12.354 17.0197 12.459C17.2267 12.564 17.3317 12.772 17.4367 12.979C17.5417 13.186 17.5417 13.493 17.2187 15.064Z" />
        </svg>
        {isTooltipVisible && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm font-['Inter'] px-3 py-1 rounded-md shadow-md transition-opacity duration-200">
            Chat with Us!
          </span>
        )}
      </a>
    </div>
  );
}