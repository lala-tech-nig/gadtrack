"use client";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Logo and Name */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-500 text-white flex items-center justify-center font-bold shadow-md">
              DV
            </div>
            <div>
              <div className="font-semibold text-slate-800 tracking-wide">
                DeviceVerify
              </div>
              <div className="text-xs text-slate-500">
                Secure your gadgets, protect your purchase.
              </div>
              <div className="text-xs text-slate-400 mt-1">
                © {new Date().getFullYear()} DeviceVerify. All rights reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center text-sm font-medium">
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition">
            About
          </a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition">
            Terms of Service
          </a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition">
            Contact
          </a>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-6">
        <p className="text-center text-sm text-slate-500 leading-relaxed">
          DeviceVerify is your trusted platform to verify, track, and transfer ownership of all tech gadgets — 
          from phones and laptops to other electronic devices. Whether buying or selling second-hand products, 
          you can easily check status, prevent fraud, and protect your investment.
        </p>
      </div>
    </footer>
  );
}
