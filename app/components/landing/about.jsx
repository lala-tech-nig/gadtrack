"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div 
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.1 }} 
        className="text-center max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-slate-800">Why DeviceVerify?</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Buying second-hand gadgets can be risky — stolen or compromised products often flood the market, leaving innocent buyers in trouble. 
          <span className="font-semibold text-slate-800"> DeviceVerify</span> brings safety, trust, and accountability to the used gadget space. 
          From <span className="font-medium">phones, laptops, tablets, game consoles, and other electronics</span>, you can easily check the current status of any device before you buy.  
        </p>
        <p className="mt-2 text-slate-600 leading-relaxed">
          Owners can upload their gadgets, track them, and quickly update the status if a device is <span className="font-medium">stolen, lost, sold, or transferred</span>. 
          Sellers can transfer ownership securely through the platform, ensuring a clean handover and protecting future buyers from unknowingly buying stolen products.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
            <h4 className="font-semibold text-slate-800">Instant Device Checks</h4>
            <p className="mt-2 text-sm text-slate-500">
              Verify IMEI, serial numbers, and ownership history in seconds — from any gadget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
            <h4 className="font-semibold text-slate-800">Safe Ownership Transfers</h4>
            <p className="mt-2 text-sm text-slate-500">
              Sellers transfer gadgets securely to buyers, creating a traceable history.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
            <h4 className="font-semibold text-slate-800">Peace of Mind</h4>
            <p className="mt-2 text-sm text-slate-500">
              Buyers avoid stolen devices, while owners can track and update status anytime.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
