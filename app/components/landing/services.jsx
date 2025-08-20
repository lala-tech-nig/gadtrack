"use client";
import { ShieldCheck, Users, BadgeCheck, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const items = [
    {
      title: "Universal Device Check",
      desc: "Instantly verify any phone, tablet, or laptop by IMEI or serial number—see history, condition, and fraud flags.",
      icon: ShieldCheck,
    },
    {
      title: "Smart Ownership Ledger",
      desc: "A tamper-proof record of every transfer. Buyers get proof, sellers stay protected, and stolen devices lose value.",
      icon: Users,
    },
    {
      title: "Trust & Identity Layer",
      desc: "Built-in KYC and vendor reputation scores so users know exactly who they’re dealing with before money changes hands.",
      icon: BadgeCheck,
    },
    {
      title: "Secure Escrow & Payments",
      desc: "Optional escrow wallet for high-value deals. Funds are only released once both parties confirm satisfaction.",
      icon: Lock,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-slate-800">
          A Safer Way to Buy & Sell Devices
        </h3>
        <p className="text-center mt-3 text-slate-600 max-w-2xl mx-auto">
          We’re building the trust layer for the second-hand device market—
          making every transaction transparent, fraud-proof, and effortless.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {items.map((i) => (
            <motion.div
              key={i.title}
              variants={card}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex gap-4 items-start"
            >
              <div className="p-3 rounded-xl bg-emerald-50 flex items-center justify-center">
                <i.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">{i.title}</h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{i.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
