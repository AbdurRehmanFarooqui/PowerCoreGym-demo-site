import { useState } from 'react';

export default function Trainers() {
  const trainers = [
    {
      name: 'Ahsan Khan',
      specialty: 'Strength & Conditioning',
      image: 'https://placehold.co/400x450/4B5563/FFFFFF?text=Ahsan+Khan',
      bio: 'Ahsan specializes in powerlifting and functional strength, helping clients achieve peak physical performance.',
      certifications: ['Certified Strength Coach', 'Powerlifting Level 2'],
      experience: '8+ years',
    },
    {
      name: 'Sara Malik',
      specialty: 'Yoga & Mobility',
      image: 'https://placehold.co/400x450/4B5563/FFFFFF?text=Sara+Malik',
      bio: 'Sara guides you through practices that enhance flexibility, balance, and mindful movement for overall well-being.',
      certifications: ['RYT 200', 'Mobility Specialist'],
      experience: '5+ years',
    },
    {
      name: 'Imran Ali',
      specialty: 'Personal Training',
      image: 'https://placehold.co/400x450/4B5563/FFFFFF?text=Imran+Ali',
      bio: 'Imran crafts personalized workout plans focusing on holistic fitness, weight loss, and muscle gain.',
      certifications: ['ACE Certified', 'Nutrition Coach'],
      experience: '6+ years',
    },
    {
      name: 'Hina Rauf',
      specialty: 'HIIT & Group Fitness',
      image: 'https://placehold.co/400x450/4B5563/FFFFFF?text=Hina+Rauf',
      bio: 'Hina leads high-energy group classes that push your limits and maximize calorie burn in a fun environment.',
      certifications: ['Group Fitness Instructor', 'HIIT Certified'],
      experience: '4+ years',
    },
  ];

  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const openModal = (trainer) => setSelectedTrainer(trainer);
  const closeModal = () => setSelectedTrainer(null);

  return (
    <section
      id="trainers"
      className="relative bg-gray-900 py-24 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-geometric.png")',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Subtle background texture overlay */}
      <div className="absolute inset-0 bg-gray-900/90"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white font-['Poppins'] leading-tight animate-fade-in">
          Meet Our <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">Elite Trainers</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-['Inter'] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Our expert trainers are dedicated to helping you achieve your fitness goals with personalized guidance.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-16 rounded-full animate-scale-in"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-['Inter']">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500
                         transform hover:-translate-y-2 animate-fade-in-up border border-gray-700/50"
              style={{ animationDelay: `${index * 0.15}s` }}
              role="article"
              aria-label={`Trainer card for ${trainer.name}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-gray-200 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                    {trainer.bio}
                  </p>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white mb-1 leading-tight">{trainer.name}</h3>
                <p className="text-red-400 font-medium text-sm mb-4">{trainer.specialty}</p>
                <button
                  onClick={() => openModal(trainer)}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium py-2 px-6 rounded-full
                             shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105
                             focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  aria-label={`View profile of ${trainer.name}`}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Trainer Profile */}
      {selectedTrainer && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in" role="dialog" aria-modal="true">
          <div className="bg-gray-800 rounded-xl max-w-lg w-full p-6 shadow-2xl relative transform scale-100 transition-transform duration-300">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-red-500"
            />
            <h3 className="text-2xl font-bold text-white text-center mb-2">{selectedTrainer.name}</h3>
            <p className="text-red-400 font-medium text-center mb-4">{selectedTrainer.specialty}</p>
            <p className="text-gray-300 text-sm mb-4 text-center">{selectedTrainer.bio}</p>
            <div className="text-gray-300 text-sm mb-4">
              <p><span className="font-medium text-white">Experience:</span> {selectedTrainer.experience}</p>
              <p><span className="font-medium text-white">Certifications:</span> {selectedTrainer.certifications.join(', ')}</p>
            </div>
            <div className="text-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium py-2 px-6 rounded-full
                           shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                Contact Trainer
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}