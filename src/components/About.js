export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gray-900 py-24 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-geometric.png")',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Subtle background texture overlay */}
      <div className="absolute inset-0 bg-gray-900/90"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white font-['Poppins'] leading-tight animate-fade-in">
          About <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">PowerCore Gym</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-['Inter'] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Transforming lives through fitness, community, and cutting-edge facilities in the heart of Karachi.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-12 rounded-full animate-scale-in"></div>

        {/* Visual Element */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <img
            src="https://placehold.co/600x400/4B5563/FFFFFF?text=PowerCore+Gym"
            alt="PowerCore Gym interior"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg border border-gray-700/50"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto font-['Inter']">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            At PowerCore Gym, fitness is more than just lifting weights — it's about building a <span className="font-semibold text-white">holistic lifestyle</span>. 
            Located in the heart of Karachi, our gym is equipped with <span className="font-semibold text-white">state-of-the-art machines</span>, 
            <span className="font-semibold text-white">certified trainers</span>, and a <span className="font-semibold text-white">supportive community</span> 
            ready to help you transform your life.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Whether you're a beginner taking your first steps or a seasoned athlete pushing new limits, we offer 
            <span className="font-semibold text-white">personalized programs</span>, cutting-edge facilities, and expert guidance to meet your unique goals. 
            Join us to unlock the best version of yourself, physically and mentally.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full
                       shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 font-['Inter'] tracking-wide"
            aria-label="Explore PowerCore Gym services"
          >
            Explore Our Services
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}