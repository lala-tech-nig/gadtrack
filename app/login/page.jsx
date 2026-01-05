"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

// Icons
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function RegistrationPage() {
  const [authMode, setAuthMode] = useState('signup'); // 'signup' or 'login'
  const [userType, setUserType] = useState('individual'); // 'individual' or 'seller'
  const [showPassword, setShowPassword] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${authMode === 'signup' ? 'Registering' : 'Logging in'} as ${userType}`);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-slate-800">
      <Head>
        <title>TraceNetNG | {authMode === 'signup' ? 'Join' : 'Welcome Back'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
          <div className="w-8 h-8 bg-[#FF6600] rounded-lg flex items-center justify-center shadow-lg shadow-orange-200">
            <span className="text-white text-sm">🛡️</span>
          </div>
          <span className="font-bold text-xl tracking-tight">TraceNet<span className="text-[#FF6600]">NG</span></span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-[#FF6600] transition-colors group">
          <span className="text-lg group-hover:rotate-12 transition-transform">❓</span>
          <span className="text-sm font-medium">Help Center</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Form */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 max-w-lg"
        >
          <h1 className="text-4xl font-bold mb-2">
            {authMode === 'signup' ? 'Join the Network' : 'Welcome Back'}
          </h1>
          <p className="text-gray-500 mb-8">
            {authMode === 'signup' 
              ? "Secure your device history with Nigeria's most trusted registry." 
              : "Access your dashboard and manage your registered devices."}
          </p>

          {/* Toggle Tab */}
          <div className="flex bg-gray-100 p-1 rounded-xl mb-8 relative">
            <button 
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-2.5 text-sm font-bold z-10 transition-colors ${authMode === 'signup' ? 'text-slate-800' : 'text-gray-400'}`}
            >
              Sign Up
            </button>
            <button 
              onClick={() => setAuthMode('login')}
              className={`flex-1 py-2.5 text-sm font-bold z-10 transition-colors ${authMode === 'login' ? 'text-slate-800' : 'text-gray-400'}`}
            >
              Log In
            </button>
            <motion.div 
              layoutId="activeTab"
              className="absolute inset-y-1 bg-white rounded-lg shadow-sm w-[calc(50%-4px)]"
              animate={{ x: authMode === 'signup' ? 0 : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => setUserType('individual')}
              className={`text-left p-4 border-2 rounded-xl transition-all outline-none ${userType === 'individual' ? 'border-[#FF6600] bg-orange-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`font-bold text-sm ${userType === 'individual' ? 'text-orange-900' : 'text-gray-600'}`}>Individual</span>
                {userType === 'individual' && <div className="w-2 h-2 rounded-full bg-[#FF6600]" />}
              </div>
              <p className="text-xs text-gray-500">Personal devices</p>
            </button>
            
            <button 
              onClick={() => setUserType('seller')}
              className={`text-left p-4 border-2 rounded-xl transition-all outline-none ${userType === 'seller' ? 'border-[#FF6600] bg-orange-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`font-bold text-sm ${userType === 'seller' ? 'text-orange-900' : 'text-gray-600'}`}>Device Seller</span>
                {userType === 'seller' && <div className="w-2 h-2 rounded-full bg-[#FF6600]" />}
              </div>
              <p className="text-xs text-gray-500">Business & stock</p>
            </button>
          </div>

          {/* Form Fields */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <AnimatePresence mode='popLayout'>
              {authMode === 'signup' && (
                <motion.div 
                  key="signup-fields"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-gray-700">Full Name</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
                      <input required type="text" placeholder="e.g. Adebayo Ogunlesi" className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-[#FF6600] outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-gray-700">Phone Number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 border border-r-0 border-gray-200 bg-gray-50 text-gray-500 rounded-l-xl text-sm font-medium">+234</span>
                      <input required type="tel" placeholder="800 000 0000" className="w-full px-4 py-3.5 border border-gray-200 rounded-r-xl focus:ring-2 focus:ring-orange-500/20 focus:border-[#FF6600] outline-none" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-sm font-semibold mb-1.5 text-gray-700">Email Address</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                <input required type="email" placeholder="name@example.com" className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-[#FF6600] outline-none" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                {authMode === 'login' && <span className="text-xs text-[#FF6600] font-bold cursor-pointer hover:underline">Forgot?</span>}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
                <input 
                  required 
                  type={showPassword ? "text" : "password"} 
                  placeholder={authMode === 'signup' ? "Create a password" : "Enter password"} 
                  className="w-full pl-11 pr-11 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-[#FF6600] outline-none" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FF6600] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 hover:bg-[#e65c00] transition-all mt-4"
            >
              {authMode === 'signup' ? 'Create Account' : 'Sign In'}
            </motion.button>
          </form>

          {/* Social Auth */}
          <div className="mt-8">
            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-xs font-medium uppercase tracking-wider">Or continue with</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors active:bg-gray-100">
                <GoogleIcon />
                <span className="font-bold text-sm">Google</span>
              </button>
              <button className="flex items-center justify-center py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors active:bg-gray-100">
                <span className="mr-2">🔵</span>
                <span className="font-bold text-sm">Facebook</span>
              </button>
            </div>

            <p className="text-center mt-8 text-sm text-gray-500">
              {authMode === 'signup' ? 'Already have an account?' : "Don't have an account?"} {' '}
              <span 
                onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
                className="text-[#FF6600] font-extrabold cursor-pointer hover:underline underline-offset-4"
              >
                {authMode === 'signup' ? 'Log in' : 'Sign up for free'}
              </span>
            </p>
          </div>
        </motion.div>

        {/* Right Side: Marketing Card */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block w-1/2 sticky top-10"
        >
          <div className="relative h-[85vh] w-full bg-[#0A0A0A] rounded-[2.5rem] p-12 text-white overflow-hidden flex flex-col justify-end border border-white/5">
            {/* Background Abstract Effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FF6600] rounded-full blur-[120px] opacity-20" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-600 rounded-full blur-[100px] opacity-10" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full mb-8 bg-white/5 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">NDPR Data Compliant</span>
              </div>

              <h2 className="text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
                Authenticity you <br />
                <span className="text-white/40 italic">can trace.</span>
              </h2>

              <p className="text-gray-400 text-lg max-w-sm mb-12 leading-relaxed font-medium">
                Unified registry for verifying device ownership across Nigeria. Reduce theft, increase value.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold mb-1">100k<span className="text-[#FF6600]">+</span></div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Secured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">24<span className="text-[#FF6600]">/</span>7</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">0%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Data Leak</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="text-center py-10 text-xs text-gray-400 font-medium">
        © 2026 TraceNet Nigeria. All rights reserved. • <span className="hover:text-gray-600 cursor-pointer">Privacy Policy</span>
      </footer>
    </div>
  );
}