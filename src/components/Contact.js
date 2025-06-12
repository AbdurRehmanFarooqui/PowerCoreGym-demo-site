export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 text-center mb-10 font-['Oswald']">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12 font-['Inter']">
          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-md"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-300 space-y-6 ">
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>PowerCore Gym<br />Main Shahrah-e-Faisal, Karachi</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+92 300 1234567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>info@powercoregym.pk</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p>Mon–Sat: 6am – 11pm<br />Sunday: 8am – 9pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
