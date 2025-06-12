export default function Trainers() {
  const trainers = [
    {
      name: 'Ahsan Khan',
      specialty: 'Strength & Conditioning',
      image: 'https://placehold.co/400x450/4B5563/FFFFFF?text=Ahsan+Khan', // Placeholder image
      bio: 'Ahsan specializes in powerlifting and functional strength, helping clients achieve peak physical performance.',
    },
    {
      name: 'Sara Malik',
      specialty: 'Yoga & Mobility',
      image: 'https://placehold.co/400x450/4B5563/FFFFFF?text=Sara+Malik', // Placeholder image
      bio: 'Sara guides you through practices that enhance flexibility, balance, and mindful movement for overall well-being.',
    },
    {
      name: 'Imran Ali',
      specialty: 'Personal Training',
      image: 'https://placehold.co/400x450/4B5563/FFFFFF?text=Imran+Ali', // Placeholder image
      bio: 'Imran crafts personalized workout plans focusing on holistic fitness, weight loss, and muscle gain.',
    },
    {
      name: 'Hina Rauf',
      specialty: 'HIIT & Group Fitness',
      image: 'https://placehold.co/400x450/4B5563/FFFFFF?text=Hina+Rauf', // Placeholder image
      bio: 'Hina leads high-energy group classes that push your limits and maximize calorie burn in a fun environment.',
    },
  ];

  return (
    <section id="trainers" className="bg-gray-900 py-20 px-4 md:px-8 lg:px-12"> {/* Consistent dark background */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Main heading for trainers, consistent with other sections */}
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white font-['Oswald'] leading-tight animate-fade-in">
          Meet Our <span className="text-red-500">Expert Trainers</span>
        </h2>
        
        {/* Divider for visual separation and emphasis */}
        <div className="w-24 h-1 bg-red-500 mx-auto mb-16 rounded-full animate-scale-in"></div>

        {/* Grid for trainer cards, responsive up to 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-['Inter']">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group
                         hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out
                         transform animate-fade-in-up relative" // Added relative for image overlay
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110" // Slightly taller, scale on hover
                />
                {/* Overlay for image on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-medium">{trainer.bio}</p>
                </div>
              </div>
              
              <div className="p-6 text-center"> {/* Increased padding */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">{trainer.name}</h3>
                <p className="text-red-600 font-semibold mb-4 text-lg">{trainer.specialty}</p> {/* Brand color for specialty */}
                
                {/* Call to action button for trainer */}
                <a
                  href={`#contact-trainer-${index}`} // Unique ID for each trainer contact
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full
                             shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                             transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NOTE: Global CSS for animations is intended to be in your global CSS file (e.g., globals.css),
        not directly within this component using <style jsx global>.
        The animations defined here (fadeIn, scaleIn, fadeInMoveUp) should be moved to your global CSS.
      */}
    </section>
  );
}
