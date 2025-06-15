export default function Hero() {
  return (
    <section
      className="relative bg-[url('/images/hero-gym.jpg')] bg-cover bg-center bg-no-repeat text-white min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/about-gym2.jpg'), url('https://www.transparenttextures.com/patterns/dark-geometric.png')`,
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Gradient overlay for readability and texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>

      <div className="relative text-center max-w-5xl px-4 py-12 sm:py-16 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight font-['Poppins'] text-white">
          Transform Your Body at <br /><span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">PowerCore Gym</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 font-medium text-gray-200 font-['Inter'] max-w-3xl mx-auto">
          Train with world-class experts, build unstoppable strength, and join our vibrant fitness community in Karachi today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full
                       shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 font-['Inter'] tracking-wide"
            aria-label="Join PowerCore Gym now"
          >
            Join Now
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-transparent border-2 border-red-400 text-red-400 font-semibold py-3 px-8 rounded-full
                       hover:bg-red-400 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 font-['Inter'] tracking-wide"
            aria-label="Explore PowerCore Gym services"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}