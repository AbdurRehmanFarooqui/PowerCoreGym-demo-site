'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function InstagramFeed() {
  const [isClient, setIsClient] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true); // Indicate client-side rendering

    // Check if the POWR.io script is already loaded
    if (!document.getElementById('powr-script')) {
      const script = document.createElement('script');
      script.id = 'powr-script';
      script.src = 'https://www.powr.io/powr.js?platform=html';
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);
      script.onerror = () => setError('Failed to load Instagram feed. Please try again later.');
      document.body.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        if (document.getElementById('powr-script')) {
          document.body.removeChild(script);
        }
      };
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  // Fallback UI for server-side rendering or script loading
  if (!isClient || !isScriptLoaded) {
    return (
      <section
        id="instagram"
        className="relative bg-gray-900 py-24 px-4 sm:px-6 lg:px-12 text-center flex items-center justify-center min-h-[300px]"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-geometric.png")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/90"></div>
        <div className="relative text-gray-300 text-lg animate-pulse flex flex-col items-center gap-4">
          <svg
            className="w-8 h-8 animate-spin text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
            ></path>
          </svg>
          <span>Loading Instagram Feed...</span>
        </div>
      </section>
    );
  }

  // Error state UI
  if (error) {
    return (
      <section
        id="instagram"
        className="relative bg-gray-900 py-24 px-4 sm:px-6 lg:px-12 text-center flex items-center justify-center min-h-[300px]"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-geometric.png")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/90"></div>
        <div className="relative text-gray-300 text-lg">
          <p>{error}</p>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 mt-4"
            aria-label="Visit PowerCore Gym on Instagram"
          >
            Visit Our Instagram
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      id="instagram"
      className="relative bg-gray-900 py-24 px-4 sm:px-6 lg:px-12 text-center"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-geometric.png")',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-gray-900/90"></div>
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 font-['Poppins'] leading-tight animate-fade-in">
          Connect with Us on <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">Instagram</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-['Inter'] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Follow us for the latest updates, fitness tips, and community highlights!
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-16 rounded-full animate-scale-in"></div>

        <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8 animate-fade-in-up" aria-live="polite">
          <div
            className="powr-instagram-feed"
            id="unique-instagram-feed-id"
            // Replace with your actual POWR.io Instagram feed ID
            data-powr-instagram-feed="YOUR_INSTAGRAM_FEED_ID_HERE"
          >
            <div className="text-gray-400 animate-pulse">Loading Instagram feed...</div>
          </div>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 mt-6"
            aria-label="Visit PowerCore Gym on Instagram"
          >
            View on Instagram
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}