export default function Services() {
  const services = [
    {
      title: 'Personal Training',
      description: 'Work one-on-one with certified trainers to reach your goals faster with customized workout plans tailored to your unique needs.',
      icon: ( // Inline SVG icon for visual appeal
        <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-5m-9 0h9m4 0h-5m0 0v-4m0 0v-4m0 0V8m5 12V8a2 2 0 00-2-2H7a2 2 0 00-2 2v12m14 0V8a2 2 0 00-2-2h-3l-2-4H7a2 2 0 00-2 2v12m14 0v-4m0 0h-4M5 12h.01M19 12h.01M12 12h.01"></path>
        </svg>
      ),
    },
    {
      title: 'Group Classes',
      description: 'From high-intensity interval training (HIIT) to calming yoga, our energetic group classes keep you motivated and connected.',
      icon: (
        <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a4 4 0 00-4-4H15m4-4a4 4 0 100-8 4 4 0 000 8z"></path>
        </svg>
      ),
    },
    {
      title: 'Strength Training',
      description: 'Build raw power, sculpt muscle, and improve overall endurance with our cutting-edge equipment and expert guidance.',
      icon: (
        <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0V18a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0zM12 11a2 2 0 100 4 2 2 0 000-4z"></path>
        </svg>
      ),
    },
    {
      title: 'Cardio Zone',
      description: 'Get your heart pumping and boost your stamina with our extensive range of treadmills, bikes, ellipticals, and rowers.',
      icon: (
        <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c-1.381 0-2.5-1.119-2.5-2.5S7.619 14 9 14s2.5 1.119 2.5 2.5V19zm0 0h12"></path>
        </svg>
      ),
    },
    {
      title: 'Nutritional Guidance',
      description: 'Complement your workouts with personalized dietary plans and expert advice to optimize your results and overall well-being.',
      icon: (
        <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h.01M17 7h.01M17 3h.01M7 11h.01M7 15h.01M17 11h.01M17 15h.01M12 7h.01M12 3h.01M12 11h.01M12 15h.01M12 19h.01M7 19h.01M17 19h.01M7 21h.01M17 21h.01M12 21h.01"></path>
        </svg>
      ),
    },
    {
      title: 'Recovery & Wellness',
      description: 'Utilize our recovery amenities and wellness programs to ensure your body heals effectively and stays injury-free.',
      icon: (
        <svg className="w-10 h-10 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3v3H9v-3c0-1.657 1.343-3 3-3z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-gray-900 py-20 px-4 md:px-8 lg:px-12"> {/* Darker background for contrast */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Main heading for services, consistent with About section */}
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white font-['Oswald'] leading-tight animate-fade-in">
          Our <span className="text-red-500">Premium Services</span>
        </h2>
        
        {/* Divider for visual separation and emphasis */}
        <div className="w-24 h-1 bg-red-500 mx-auto mb-16 rounded-full animate-scale-in"></div> {/* Increased margin-bottom */}

        {/* Grid for service cards, now responsive to 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-['Inter']">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center flex flex-col items-center
                         hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out
                         transform animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              {service.icon} {/* Render the service icon */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{service.title}</h3> {/* Bolder, darker title */}
              <p className="text-gray-700 text-base leading-relaxed flex-grow">{service.description}</p> {/* Enhanced description */}
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
