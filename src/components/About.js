export default function About() {
  return (
    // Section container with a slightly off-white background for a softer look
    // Added more vertical padding and a subtle horizontal padding for larger screens
    <section id="about" className="bg-gray-50 py-16 sm:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading for the About section, using brand color and bolder font */}
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-red-600 font-['Oswald'] leading-tight animate-fade-in">
          About <span className="text-gray-900">PowerCore Gym</span>
        </h2>
        
        {/* Divider for visual separation and emphasis */}
        <div className="w-24 h-1 bg-red-600 mx-auto mb-10 rounded-full animate-scale-in"></div>

        {/* First paragraph with improved readability and slightly darker text */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6 max-w-prose mx-auto font-['Inter'] animate-fade-in delay-200">
          At PowerCore Gym, we believe fitness is not just about lifting weights — it's about building a **holistic lifestyle**.
          Located in the heart of Karachi, our gym is equipped with **state-of-the-art machines**,
          **experienced and certified trainers**, and a **supportive community** ready to help you transform your life.
        </p>

        {/* Second paragraph, continuing the message with enhanced readability */}
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-10 max-w-prose mx-auto font-['Inter'] animate-fade-in delay-400">
          Whether you're a beginner taking your first steps or a seasoned athlete looking to break new plateaus,
          we have the right **programs, cutting-edge facilities, and personalized guidance** to meet your unique goals.
          Come train with us and unlock the best version of yourself, physically and mentally.
        </p>

        {/* Call to action button, consistent with the Hero section's styling */}
        <a
          href="#services" // Directing to services or a specific membership page
          className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 font-['Inter'] tracking-wide"
        >
          Explore Our Services
          <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>

      {/* Global CSS for animations (add these to your globals.css or equivalent) */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}
