import "./globals.css";

import { Oswald } from 'next/font/google';
import { Inter } from 'next/font/google'; // or Poppins

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'PowerCore Gym - Karachi',
  description: 'Join the top gym in Karachi. Get fit with PowerCore Gym.',
  keywords: ['gym', 'fitness', 'karachi', 'powercore', 'workout'],
  authors: [{ name: 'PowerCore Gym' }],
  openGraph: {
    title: 'PowerCore Gym - Karachi',
    description: 'Join the top gym in Karachi. Get fit with PowerCore Gym.',
    url: 'https://yourgymwebsite.com',
    siteName: 'PowerCore Gym',
    images: [
      {
        url: '/og-image.jpg', // add this image to /public
        width: 1200,
        height: 630,
        alt: 'PowerCore Gym in Karachi',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
