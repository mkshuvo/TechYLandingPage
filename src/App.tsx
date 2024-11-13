import React from 'react';
import { ArrowRight, MessageSquare, Shield, Star, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;