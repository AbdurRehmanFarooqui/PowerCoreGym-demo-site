// File: pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Trainers from '../components/Trainers';
import InstagramFeed from '../components/InstagramFeed';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>PowerCore Gym - Karachi</title>
        <meta name="description" content="Join the top gym in Karachi. Get fit with PowerCore Gym." />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <InstagramFeed />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
