"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Search, CheckCircle, Lock, Globe, Mail } from 'lucide-react';
import { useRouter } from "next/navigation";


// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full bg-white/80 backdrop-blur-md"
  >
    <div className="flex items-center gap-2">
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="bg-orange-600 p-1.5 rounded-lg"
      >
        <Shield className="text-white w-5 h-5" />
      </motion.div>
      <span className="font-bold text-xl text-slate-800">DeviceTrace <span className="text-orange-600">NG</span></span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
      {['Features', 'About', 'Verify'].map((item) => (
        <a key={item} href="#" className="hover:text-orange-600 transition-colors relative group">
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full" />
        </a>
      ))}
    </div>
    <div className="flex items-center gap-4">
      <button className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 transition">Login</button>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 text-sm font-semibold text-white bg-orange-600 rounded-lg shadow-lg shadow-orange-200 hover:bg-orange-700"
      >
        Register
      </motion.button>
    </div>
  </motion.nav>
);

const StatCard = ({ icon: Icon, label, value, subtext, color }) => (
  <motion.div 
    variants={fadeIn}
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-start"
  >
    <div className={`p-2 rounded-lg mb-4 ${color}`}>
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-slate-500 text-sm font-medium mb-1">{label}</p>
    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    <p className="text-xs font-semibold mt-1 text-emerald-500">{subtext}</p>
  </motion.div>
);

const StepCard = ({ number, title, desc, icon: Icon }) => (
  <motion.div 
    variants={fadeIn}
    viewport={{ once: true }}
    className="relative bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-start group overflow-hidden"
  >
    <div className="absolute right-[-10%] top-[-10%] text-9xl font-black text-slate-50 group-hover:text-orange-100/50 transition-colors duration-500 select-none">
      {number}
    </div>
    <div className="bg-orange-50 p-4 rounded-xl mb-6 relative z-10 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
      <Icon className="w-8 h-8 transition-colors" />
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{title}</h4>
    <p className="text-slate-500 leading-relaxed text-sm relative z-10">{desc}</p>
  </motion.div>
);

// --- Main Page ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeIn} className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4">
            National Security & Recovery
          </motion.p>
          <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Register, Track, <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">and Secure</span> <br /> 
            Your Devices
          </motion.h1>
          <motion.p variants={fadeIn} className="text-slate-500 text-lg mb-10 max-w-lg">
            The official national registry for smartphones and laptops. Prevent theft, verify authenticity, and ensure your property remains yours.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mb-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-xl shadow-orange-200"
            >
              <Shield className="w-5 h-5" />
              Register Device
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "#f8fafc" }}
              className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-100 text-slate-800 font-bold rounded-xl"
            >
              <Search className="w-5 h-5" />
              Check History
            </motion.button>
          </motion.div>
          <motion.div variants={fadeIn} className="flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Free for individual users</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Animated Hero Graphic */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-12 aspect-square md:aspect-video relative overflow-hidden shadow-2xl border border-slate-700"
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
            
            <div className="flex items-center justify-center h-full">
              <motion.div 
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative bg-slate-800/50 p-6 rounded-3xl border-2 border-emerald-400/50 backdrop-blur-xl shadow-2xl"
              >
                <Shield className="w-24 h-28 text-emerald-400" />
              </motion.div>
            </div>

            {/* Floating Notification */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border-l-4 border-emerald-500 max-w-[220px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Live Monitoring</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight font-medium">Device IMEI: 3546... secured in national database.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest mb-12"
          >
            Trusted by Law Enforcement and Major Retailers
          </motion.p>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <StatCard icon={Smartphone} label="Total Registered" value="10,000+" subtext="+150 Today" color="bg-orange-100 text-orange-600" />
            <StatCard icon={Search} label="Recovered Items" value="1,200" subtext="Since 2023" color="bg-amber-100 text-amber-600" />
            <StatCard icon={Shield} label="Partner Agencies" value="15" subtext="Nationwide" color="bg-blue-100 text-blue-600" />
            <StatCard icon={CheckCircle} label="Success Rate" value="94%" subtext="Verification Match" color="bg-emerald-100 text-emerald-600" />
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3">Simple Process</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold text-slate-900 mb-4">How it Works</motion.h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Secure your devices in three simple steps. Our platform connects directly with national identity databases.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          <StepCard number="1" title="Create Profile" desc="Sign up securely. We perform a quick NIN/BVN verification to confirm your identity." icon={Shield} />
          <StepCard number="2" title="Log Device" desc="Enter your device's unique IMEI or Serial Number. Upload your proof of purchase." icon={Smartphone} />
          <StepCard number="3" title="Secure Status" desc="Generate a digital certificate. If your device is lost, flag it instantly to alert authorities." icon={Lock} />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl shadow-orange-200"
        >
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-4">Ready to secure your gadgets?</h2>
            <p className="text-orange-100 text-lg max-w-md">Join thousands of Nigerians protecting their digital assets today. It takes less than 2 minutes.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg whitespace-nowrap"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 pt-16 pb-8 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-600 p-1 rounded-md">
                <Shield className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-800">DeviceTrace <span className="text-orange-600">NG</span></span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              The standard for device ownership verification and theft prevention in Nigeria.
            </p>
          </div>
          {['Platform', 'Company', 'Legal'].map((title) => (
            <div key={title}>
              <h5 className="font-bold text-sm text-slate-900 mb-6 uppercase tracking-wider">{title}</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Link One</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Link Two</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Link Three</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2026 DeviceTrace NG. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Globe className="w-4 h-4 text-slate-400 cursor-pointer hover:text-orange-600 transition-colors" />
            <Mail className="w-4 h-4 text-slate-400 cursor-pointer hover:text-orange-600 transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}