export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12 font-['Inter']">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} PowerCore Gym. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            Facebook
          </a>
          <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
