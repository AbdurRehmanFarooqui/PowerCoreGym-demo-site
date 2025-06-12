export default function Contact() {
  return (
    // Section container with a consistent dark background and improved vertical padding
    <section id="contact" className="bg-gray-900 py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main heading for the contact section, consistent with other sections */}
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-8 font-['Oswald'] leading-tight animate-fade-in">
          Connect with <span className="text-red-500">PowerCore Gym</span>
        </h2>

        {/* Divider for visual separation and emphasis */}
        <div className="w-24 h-1 bg-red-500 mx-auto mb-16 rounded-full animate-scale-in"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start font-['Inter']"> {/* Increased gap */}
          {/* Contact Form */}
          <form className="bg-white shadow-xl rounded-2xl p-8 lg:p-10 space-y-6 animate-fade-in-up"> {/* Enhanced shadow, rounded corners, increased padding, and animation */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3> {/* Form title */}
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 text-gray-800" // Improved input styling
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 text-gray-800" // Improved input styling
              required
            />
            <textarea
              rows="6" // Increased rows for more message space
              placeholder="Tell us about your fitness goals or inquiry..."
              className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 text-gray-800 resize-y" // Improved input styling, vertical resize
              required
            ></textarea>
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 tracking-wide w-full md:w-auto" // Consistent button styling, full width on small screens
            >
              Send Message
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-200 space-y-8 p-4 md:p-0 animate-fade-in-up delay-200"> {/* Lighter text for contrast, increased space, padding for mobile */}
            <h3 className="text-2xl font-bold text-white mb-6">Find Us Here</h3> {/* Contact info title */}
            
            {/* Location */}
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314-11.314L13.414 2.1a1.998 1.998 0 00-2.828 0L6.343 5.343m11.314 11.314A9.952 9.952 0 0112 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9c0 2.21-1.027 4.243-2.657 5.587z"></path>
              </svg>
              <div>
                <h4 className="text-xl font-semibold mb-1 text-white">Location</h4>
                <p className="text-gray-300">PowerCore Gym<br />Main Shahrah-e-Faisal, Karachi, Pakistan</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div>
                <h4 className="text-xl font-semibold mb-1 text-white">Phone</h4>
                <p className="text-gray-300">+92 300 1234567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-7 13h4a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h4"></path>
              </svg>
              <div>
                <h4 className="text-xl font-semibold mb-1 text-white">Email</h4>
                <p className="text-gray-300">info@powercoregym.pk</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 className="text-xl font-semibold mb-1 text-white">Opening Hours</h4>
                <p className="text-gray-300">
                  **Mon–Sat:** 6:00 AM – 11:00 PM<br />
                  **Sunday:** 8:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NOTE: Global CSS for animations is intended to be in your global CSS file (e.g., globals.css),
        not directly within this component using <style jsx global>.
        The animations defined here (fadeIn, scaleIn, fadeInMoveUp) should be moved to your global CSS.
      */}
    </section>
  );
}
