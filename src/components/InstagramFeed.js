'use client';
import { useEffect, useState } from 'react';

export default function InstagramFeed() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indicate that we are on the client side

    // Check if the script is already loaded to prevent multiple loads
    if (!document.getElementById('powr-script')) {
      const script = document.createElement('script');
      script.id = 'powr-script'; // Assign an ID to the script
      script.src = 'https://www.powr.io/powr.js?platform=html';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Only render the Instagram feed div if we are on the client side
  // This prevents issues with POWR.io script trying to access DOM elements on the server during SSR.
  if (!isClient) {
    return (
      <section id="instagram" className="bg-gray-900 py-20 px-4 md:px-8 lg:px-12 text-center flex items-center justify-center min-h-[300px]">
        <div className="text-white text-lg animate-pulse">Loading Instagram Feed...</div>
      </section>
    );
  }

  return (
    // Section container with consistent dark background and improved padding
    <section id="instagram" className="bg-gray-900 py-20 px-4 md:px-8 lg:px-12 text-center">
      {/* Main heading for the Instagram section, consistent with other sections */}
      <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 font-['Oswald'] leading-tight animate-fade-in">
        Connect with Us on <span className="text-red-500">Instagram</span>
      </h2>

      {/* Divider for visual separation and emphasis */}
      <div className="w-24 h-1 bg-red-500 mx-auto mb-16 rounded-full animate-scale-in"></div>

      {/* Container for the POWR.io Instagram Feed */}
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in-up"> {/* Added styling to the container */}
        <div
          className="powr-instagram-feed"
          id="unique-instagram-feed-id"
          // Add any specific POWR.io data attributes here if needed, e.g.,
          // data-powr-instagram-feed="YOUR_INSTAGRAM_FEED_ID_HERE"
        >
          {/* Fallback content or loading indicator can go here if the script takes time */}
          <div className="text-gray-400">Your Instagram feed will load here.</div>
        </div>
      </div>

      {/* NOTE: Global CSS for animations is intended to be in your global CSS file (e.g., globals.css),
        not directly within this component using <style jsx global>.
        Ensure that the following keyframes are present in your global CSS:
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scaleX(0); opacity: 0; } to { transform: scaleX(1); opacity: 1; } }
        @keyframes fadeInMoveUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInMoveUp 0.7s ease-out forwards; }
      */}
    </section>
  );
}
