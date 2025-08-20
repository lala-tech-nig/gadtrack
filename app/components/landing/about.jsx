"use client";
import { motion } from 'framer-motion';


export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold">Why DeviceVerify?</h3>
        <p className="mt-4 text-slate-600">In Nigeria many buyers end up with stolen or problematic devices because there's no simple way to verify ownership. DeviceVerify brings trust to the second-hand market — fast IMEI checks, ownership histories, and on-platform ownership transfer to ensure a clean, legal handover.</p>


        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">Fast checks</h4>
            <p className="mt-2 text-sm text-slate-500">Lookup IMEI in seconds, from web or mobile.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">Verified transfers</h4>
            <p className="mt-2 text-sm text-slate-500">Sellers transfer devices only after payment — buyers receive proof.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">Local support</h4>
            <p className="mt-2 text-sm text-slate-500">Designed for Nigerian workflows and compliance needs.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}