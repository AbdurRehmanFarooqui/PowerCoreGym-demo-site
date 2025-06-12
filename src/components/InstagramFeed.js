'use client';
import { useEffect, useState } from 'react';

export default function InstagramFeed() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const script = document.createElement('script');
    script.src = 'https://www.powr.io/powr.js?platform=html';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!isClient) return null;

  return (
    <section id="instagram" className="bg-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-['Oswald']">Follow Us on Instagram</h2>
      <div className="max-w-4xl mx-auto">
        <div className="powr-instagram-feed" id="unique-instagram-feed-id"></div>
      </div>
    </section>
  );
}
