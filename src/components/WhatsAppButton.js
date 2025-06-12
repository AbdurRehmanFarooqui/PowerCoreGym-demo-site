export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923001234567"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce-slow"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.5 3.5a9 9 0 00-15.9 8.1l-1.1 4.4a1 1 0 001.2 1.2l4.4-1.1a9 9 0 0011.4-12.6z"
        />
      </svg>
    </a>
  );
}
