"use client"
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Trainers from '../components/Trainers';
import dynamic from 'next/dynamic';
const InstagramFeed = dynamic(() => import('../components/InstagramFeed'), { ssr: false });

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';


export default function Home() {
  return (
    <>
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
