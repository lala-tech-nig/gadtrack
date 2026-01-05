import React from 'react';
import { Shield, Smartphone, Search, CheckCircle, Lock, ClipboardList, Globe, Mail } from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full bg-white">
    <div className="flex items-center gap-2">
      <div className="bg-orange-600 p-1.5 rounded-lg">
        <Shield className="text-white w-5 h-5" />
      </div>
      <span className="font-bold text-xl text-slate-800">DeviceTrace <span className="text-orange-600">NG</span></span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
      <a href="#" className="hover:text-orange-600 transition">Features</a>
      <a href="#" className="hover:text-orange-600 transition">About</a>
      <a href="#" className="hover:text-orange-600 transition">Verify</a>
    </div>
    <div className="flex items-center gap-4">
      <button className="px-5 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition">Login</button>
      <button className="px-5 py-2 text-sm font-semibold text-white bg-orange-600 rounded-lg shadow-lg shadow-orange-200 hover:bg-orange-700 transition">Register</button>
    </div>
  </nav>
);

const StatCard = ({ icon: Icon, label, value, subtext, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-start">
    <div className={`p-2 rounded-lg mb-4 ${color}`}>
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-slate-500 text-sm font-medium mb-1">{label}</p>
    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    <p className="text-xs font-semibold mt-1 text-emerald-500">{subtext}</p>
  </div>
);

const StepCard = ({ number, title, desc, icon: Icon }) => (
  <div className="relative bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-start group hover:shadow-xl transition-shadow">
    <div className="absolute right-6 top-6 text-8xl font-black text-slate-50 opacity-50 group-hover:text-orange-50 transition-colors">
      {number}
    </div>
    <div className="bg-orange-50 p-4 rounded-xl mb-6 relative z-10">
      <Icon className="w-8 h-8 text-orange-600" />
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{title}</h4>
    <p className="text-slate-500 leading-relaxed text-sm relative z-10">{desc}</p>
  </div>
);

// --- Main Page ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4">National Security & Recovery</p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Register, Track, <br /> and Secure Your <br /> Devices
          </h1>
          <p className="text-slate-500 text-lg mb-10 max-w-lg">
            The official national registry for smartphones and laptops. Prevent theft, verify authenticity, and ensure your property remains yours.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-xl shadow-orange-200 hover:bg-orange-700 transition">
              <Shield className="w-5 h-5" />
              Register Device
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-100 text-slate-800 font-bold rounded-xl hover:bg-slate-50 transition">
              <Search className="w-5 h-5" />
              Check History
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Free for individual users</span>
          </div>
        </div>

        <div className="relative">
          {/* Mock Graphic Container */}
          <div className="bg-gradient-to-br from-teal-900 to-emerald-800 rounded-[2.5rem] p-8 aspect-video relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            {/* Visual representation of the Nigeria Map/Shield */}
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                 <div className="w-32 h-40 bg-white/10 rounded-full blur-3xl absolute -inset-4"></div>
                 <div className="relative bg-slate-800 p-4 rounded-2xl border-4 border-emerald-400 shadow-2xl">
                    <Shield className="w-20 h-24 text-white" />
                 </div>
              </div>
            </div>
            {/* Notification Badge */}
            <div className="absolute bottom-10 left-10 bg-white rounded-xl p-4 shadow-lg border-l-4 border-emerald-500 max-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">System Active</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">Real-time database sync with law enforcement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest mb-12">Trusted by Law Enforcement and Major Retailers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={Smartphone} label="Total Registered" value="10,000+" subtext="+150 Today" color="bg-orange-100 text-orange-600" />
            <StatCard icon={Search} label="Recovered Items" value="1,200" subtext="Since 2023" color="bg-amber-100 text-amber-600" />
            <StatCard icon={Shield} label="Partner Agencies" value="15" subtext="Nationwide" color="bg-blue-100 text-blue-600" />
            <StatCard icon={CheckCircle} label="Success Rate" value="94%" subtext="Verification Match" color="bg-emerald-100 text-emerald-600" />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-3">Simple Process</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">How it Works</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Secure your devices in three simple steps. Our platform connects directly with national identity databases for maximum security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StepCard 
            number="1" 
            title="Create Profile" 
            desc="Sign up securely. We perform a quick NIN/BVN verification to confirm your identity and prevent fraud." 
            icon={Shield} 
          />
          <StepCard 
            number="2" 
            title="Log Device" 
            desc="Enter your device's unique IMEI or Serial Number. Upload your proof of purchase for ownership validation." 
            icon={Smartphone} 
          />
          <StepCard 
            number="3" 
            title="Secure Status" 
            desc="Generate a digital certificate. If your device is lost, flag it instantly to alert authorities and buyers." 
            icon={Lock} 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-[2rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to secure your gadgets?</h2>
            <p className="text-orange-100 max-w-md">Join thousands of Nigerians protecting their digital assets today. It takes less than 2 minutes.</p>
          </div>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-orange-50 transition whitespace-nowrap">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2">
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
          
          <div>
            <h5 className="font-bold text-sm text-slate-900 mb-6 uppercase tracking-wider">Platform</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-orange-600">Register Device</a></li>
              <li><a href="#" className="hover:text-orange-600">Verify Status</a></li>
              <li><a href="#" className="hover:text-orange-600">Report Stolen</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm text-slate-900 mb-6 uppercase tracking-wider">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-orange-600">About Us</a></li>
              <li><a href="#" className="hover:text-orange-600">Partners</a></li>
              <li><a href="#" className="hover:text-orange-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm text-slate-900 mb-6 uppercase tracking-wider">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-orange-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2023 DeviceTrace NG. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Globe className="w-4 h-4 text-slate-400 cursor-pointer hover:text-orange-600" />
            <Mail className="w-4 h-4 text-slate-400 cursor-pointer hover:text-orange-600" />
          </div>
        </div>
      </footer>
    </div>
  );
}