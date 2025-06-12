import { useState } from 'react';

export default function Services() {
  const services = [
    {
      title: 'Personal Training',
      description: 'Work one-on-one with certified trainers to reach your goals faster with customized workout plans tailored to your unique needs.',
      details: 'Our personal training sessions include a fitness assessment, goal setting, and a tailored program with ongoing support to ensure progress.',
      icon: (
        <svg className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-5m-9 0h9m4 0h-5m0 0v-4m0 0v-4m0 0V8m5 12V8a2 2 0 00-2-2H7a2 2 0 00-2 2v12m14 0V8a2 2 0 00-2-2h-3l-2-4H7a2 2 0 00-2 2v12m14 0v-4m0 0h-4M5 12h.01M19 12h.01M12 12h.01"></path>
        </svg>
      ),
    },
    {
      title: 'Group Classes',
      description: 'From high-intensity interval training (HIIT) to calming yoga, our energetic group classes keep you motivated and connected.',
      details: 'Join our diverse group classes, including HIIT, Zumba, and yoga, led by expert instructors in a vibrant community setting.',
      icon: (
        <svg className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a4 4 0 00-4-4H15m4-4a4 4 0 100-8 4 4 0 000 8z"></path>
        </svg>
      ),
    },
    {
      title: 'Strength Training',
      description: 'Build raw power, sculpt muscle, and improve overall endurance with our cutting-edge equipment and expert guidance.',
      details: 'Access state-of-the-art weightlifting equipment and personalized strength programs designed to maximize muscle gain and endurance.',
      icon: (
        <svg className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0V18a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0zM12 11a2 2 0 100 4 2 2 0 000-4z"></path>
        </svg>
      ),
    },
    {
      title: 'Cardio Zone',
      description: 'Get your heart pumping and boost your stamina with our extensive range of treadmills, bikes, ellipticals, and rowers.',
      details: 'Our cardio zone features top-tier equipment and guided sessions to improve cardiovascular health and stamina.',
      icon: (
        <svg className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c-1.381 0-2.5-1.119-2.5-2.5S7.619 14 9 14s2.5 1.119 2.5 2.5V19zm0 0h12"></path>
        </svg>
      ),
    },
    {
      title: 'Nutritional Guidance',
      description: 'Complement your workouts with personalized dietary plans and expert advice to optimize your results and overall well-being.',
      details: 'Work with our nutritionists to create meal plans tailored to your fitness goals, dietary preferences, and lifestyle.',
      icon: (
        <svg className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h.01M17 7h.01M17 3h.01M7 11h.01M7 15h.01M17 11h.01M17 15h.01M12 7h.01M12 3h.01M12 11h.01M12 15h.01M12 19h.01M7 19h.01M17 19h.01M7 21h.01M17 21h.01M12 21h.01"></path>
        </svg>
      ),
    },
    {
      title: 'Recovery & Wellness',
      description: 'Utilize our recovery amenities and wellness programs to ensure your body heals effectively and stays injury-free.',
      details: 'Access saunas, massage therapy, and stretching sessions to enhance recovery and maintain optimal physical health.',
      icon: (
        <svg className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3v3H9v-3c0-1.657 1.343-3 3-3z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
        </svg>
      ),
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <section
      id="services"
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
          Our <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">Premium Services</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-['Inter'] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover a range of fitness services designed to help you achieve your goals and transform your lifestyle.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-16 rounded-full animate-scale-in"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-['Inter']">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500
                         transform hover:-translate-y-2 animate-fade-in-up border border-gray-700/50 p-6 flex flex-col items-center"
              style={{ animationDelay: `${index * 0.15}s` }}
              role="article"
              aria-label={`Service card for ${service.title}`}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-2 leading-tight">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-4 line-clamp-3">{service.description}</p>
              <button
                onClick={() => openModal(service)}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium py-2 px-6 rounded-full
                           shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105
                           focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
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
            <div className="flex justify-center mb-4">{selectedService.icon}</div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">{selectedService.title}</h3>
            <p className="text-gray-300 text-sm mb-4 text-center">{selectedService.description}</p>
            <p className="text-gray-200 text-sm mb-4 text-center">{selectedService.details}</p>
            <div className="text-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium py-2 px-6 rounded-full
                           shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}