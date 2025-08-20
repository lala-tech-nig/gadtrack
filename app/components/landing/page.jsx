import React from 'react';
import Hero from './hero';
import About from './about';
import Services from './services';
import Pricing from './pricing';
import Testimonial from './testimonial';
import Footer from './footer';
import { motion } from 'framer-motion';



export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 antialiased">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Testimonial />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}