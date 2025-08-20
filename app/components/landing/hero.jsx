"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-14 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Buy and sell tech gadgets with confidence
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-slate-600 max-w-xl"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            DeviceVerify helps Nigerians securely trade second-hand electronics — phones, laptops, tablets,
            and more. Instantly check a device’s status, track its ownership history, and confirm it’s not
            stolen before buying. Sellers can update statuses or transfer ownership seamlessly, giving both
            parties peace of mind.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-emerald-400 text-white font-semibold shadow-lg"
            >
              Try Device Lookup
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-200 text-sm"
            >
              See Pricing
            </a>
          </motion.div>

          <motion.div
            className="mt-8 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <span className="inline-flex items-center gap-2">
              ⚡ <strong>Free:</strong> 1 device check / month • <strong>Pro:</strong> unlimited lookups + secure ownership transfers
            </span>
          </motion.div>
        </div>

        {/* Device Card Preview */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-white"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Device Lookup</div>
                  <div className="mt-2 font-mono text-lg">SN-9X73-21AB-77</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Status</div>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm">
                    Clean
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="space-y-2">
                  <div className="font-semibold">Category</div>
                  <div>Laptop</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold">Model</div>
                  <div>MacBook Pro 2020</div>
                </div>

                <div className="col-span-2 mt-4 text-xs text-slate-500">Ownership history</div>
                <div className="col-span-2 mt-2 p-3 bg-slate-50 rounded-md text-xs text-slate-700">
                  1) Amaka T. — 2020-11-15 • 2) TechHub Abuja — 2022-05-02 • 3) Current Seller
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">
                  Request Ownership Transfer
                </button>
                <div className="text-xs text-slate-400">
                  Every transfer is securely recorded for traceability
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
