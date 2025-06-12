// Replaced 'next/link' with a standard 'a' tag for wider compatibility in this environment.
// In a full Next.js application, 'next/link' is typically preferred for client-side routing.

export default function Hero() {
  return (
    // Section container with a dynamic background image, ensuring it covers and centers
    // We add a minimum height of 'screen' to ensure it takes up the full viewport height initially.
    <section className="relative bg-[url('/images/hero-gym.jpg')] bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay for text readability, adjusted for better balance. */}
      {/* We use a gradient overlay for a more modern, dynamic look instead of a flat opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 flex items-center justify-center p-4">
        <div className="text-center max-w-4xl px-4 py-8 rounded-lg animate-fade-in-up"> {/* Added max-width and padding for better content framing, and a subtle animation */}
          {/* Main heading: bold, large, with a consistent brand color for emphasis */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight tracking-tight drop-shadow-xl font-['Oswald']">
            Transform Your Body at <span className="text-red-500">PowerCore Gym</span>
          </h1>
          {/* Sub-heading/paragraph: clearly communicates the value proposition */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 font-medium drop-shadow-lg font-['Oswald']">
            Train with experts. Build strength. Join our fitness community in Karachi today.
          </p>
          {/* Call-to-action button: prominent, consistent branding color, and an engaging hover effect */}
          <a
            href="#contact" // Using standard 'a' tag for navigation within the page
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 font-['Inter'] tracking-wider"
          >
            Join Now
            {/* Optional icon for visual appeal */}
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Global CSS for animations (add this to your globals.css or equivalent) */}
      <style jsx global>{`
        @keyframes fadeInMoveUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInMoveUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
