"use client";
import { motion } from "framer-motion";

const quotes = [
  { name: "Amaka (Buyer)", text: "I bought a phone and confirmed it was clean before paying — total peace of mind." },
  { name: "Chinedu (Seller)", text: "Ownership transfers instantly. No more disputes with buyers." },
  { name: "MobileShop Lagos", text: "Integration with our shop reduced fraud by 70% and boosted customer trust." },
  { name: "Aisha (Everyday User)", text: "Quick, reliable, and very user-friendly. Love the platform!" },
  { name: "Kehinde (Student)", text: "I avoided buying a stolen device thanks to this app. Brilliant idea." },
  { name: "TechHub Abuja", text: "Our customers trust us more since we integrated ownership checks." },
  { name: "Ngozi (Technician)", text: "Now I can verify devices before repairs — no more risk of handling stolen phones." },
  { name: "Police Cybercrime Unit", text: "This platform makes it harder for stolen devices to circulate in Nigeria." },
  { name: "Corporate IT Manager", text: "We use it to verify staff devices. It saves us from security risks." },
  { name: "Tolu (Entrepreneur)", text: "The smooth transfer feature makes second-hand sales so easy." },
];

function MarqueeRow({ items, direction = "left", speed = 40 }) {
  return (
    <div className="overflow-hidden w-full py-4">
      <motion.div
        className="flex gap-6"
        animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...items, ...items].map((q, idx) => (
          <div
            key={idx}
            className="min-w-[280px] max-w-sm bg-white p-6 rounded-2xl relative"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(to right, #6366f1, #14b8a6) 1",
            }}
          >
            <p className="text-slate-800 text-base leading-relaxed">“{q.text}”</p>
            <footer className="mt-3 text-lg font-semibold text-indigo-600">
              — {q.name}
            </footer>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-slate-900">Trusted by thousands</h3>
        <p className="text-slate-600 mt-2 text-lg">
          Real stories from Nigerian buyers and sellers.
        </p>

        <div className="mt-12 space-y-8">
          <MarqueeRow items={quotes.slice(0, quotes.length / 2)} direction="left" />
          <MarqueeRow items={quotes.slice(quotes.length / 2)} direction="right" />
        </div>
      </div>
    </section>
  );
}
