import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Simulate form submission (replace with actual API call)
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      alert('Message sent successfully!'); // Replace with a toast notification in production
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gray-900 py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-geometric.png")',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Subtle background texture overlay */}
      <div className="absolute inset-0 bg-gray-900/90"></div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-6 font-['Poppins'] leading-tight animate-fade-in">
          Connect with <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">PowerCore Gym</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto text-center font-['Inter'] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Have questions or ready to start your fitness journey? Reach out to us today!
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-16 rounded-full animate-scale-in"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start font-['Inter']">
          {/* Contact Form */}
          <form
            className="bg-gray-800 shadow-2xl rounded-xl p-8 space-y-6 animate-fade-in-up"
            onSubmit={handleSubmit}
            aria-labelledby="contact-form-title"
          >
            <h3 id="contact-form-title" className="text-2xl font-semibold text-white mb-4">
              Send Us a Message
            </h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${
                  errors.name ? 'border-red-500' : 'border-gray-600'
                } bg-gray-700 text-gray-200 p-4 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-200`}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${
                  errors.email ? 'border-red-500' : 'border-gray-600'
                } bg-gray-700 text-gray-200 p-4 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-200`}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your fitness goals or inquiry..."
                value={formData.message}
                onChange={handleChange}
                className={`w-full border ${
                  errors.message ? 'border-red-500' : 'border-gray-600'
                } bg-gray-700 text-gray-200 p-4 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition-all duration-200 resize-y`}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>
              {errors.message && (
                <p id="message-error" className="text-red-400 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 w-full sm:w-auto"
              aria-label="Send message"
            >
              Send Message
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-white mb-6">Find Us Here</h3>

            {/* Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.008695433475!2d67.111155015003!3d24.86367998405875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sShahrah-e-Faisal%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1697041234567!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PowerCore Gym Location"
              ></iframe>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a9.952 9.952 0 0111.314-11.314z"></path>
              </svg>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                <p className="text-gray-300 text-sm">PowerCore Gym, Main Shahrah-e-Faisal, Karachi, Pakistan</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                <p className="text-gray-300 text-sm">+92 300 1234567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-7 13h4a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h4"></path>
              </svg>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                <p className="text-gray-300 text-sm">info@powercoregym.pk</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start space-x-4">
              <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Opening Hours</h4>
                <p className="text-gray-300 text-sm">
                  Mon–Sat: 6:00 AM – 11:00 PM<br />
                  Sunday: 8:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}