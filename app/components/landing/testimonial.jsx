import { motion } from 'framer-motion';


const quotes = [
  { name: 'Amaka', text: 'I bought a phone and confirmed it was clean before paying — total peace of mind.' },
  { name: 'Chinedu', text: 'Seller transfers ownership instantly. No more worry about disputes.' },
  { name: 'MobileShop Lagos', text: 'Integration with our shop helped reduce fraud by 70%.' },
];


export default function Testimonial() {
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold">Trusted by thousands</h3>
        <p className="text-slate-500 mt-2">Real stories from Nigerian buyers and sellers.</p>


        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, idx) => (
            <motion.blockquote key={q.name} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.12 }} className="p-6 bg-white rounded-2xl shadow-sm text-left">
              <p className="text-slate-700">“{q.text}”</p>
              <footer className="mt-4 text-sm text-slate-500">— {q.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}