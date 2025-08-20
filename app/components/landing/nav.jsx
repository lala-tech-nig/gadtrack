"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <a className="flex items-center gap-3" href="#">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
              DV
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-extrabold tracking-tight text-slate-800">
                DeviceVerify
              </h1>
              <p className="text-xs text-slate-500 -mt-1">
                Buy second-hand devices with confidence
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Reviews</a>
            <a href="#" className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-emerald-400 text-white shadow-md text-sm font-semibold hover:opacity-90 transition">
              Sign in
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur-md shadow-md"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#about" className="py-2 text-slate-700 font-medium hover:text-indigo-600 transition-colors">About</a>
            <a href="#services" className="py-2 text-slate-700 font-medium hover:text-indigo-600 transition-colors">Services</a>
            <a href="#pricing" className="py-2 text-slate-700 font-medium hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="py-2 text-slate-700 font-medium hover:text-indigo-600 transition-colors">Reviews</a>
            <a href="#" className="py-2 font-semibold text-indigo-600 hover:opacity-80 transition">Sign in</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
