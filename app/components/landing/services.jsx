"use client";
import { Check } from 'lucide-react';


export default function Services() {
  const items = [
    { title: 'IMEI Lookup', desc: 'Get device history, model, and stolen/lost status instantly.' },
    { title: 'Ownership Ledger', desc: 'Immutable transfer records so buyers get proof.' },
    { title: 'Seller Verification', desc: 'KYC checks to reduce fraud and scams.' },
    { title: 'Escrow Support', desc: 'Optional escrow for high-value purchases.' },
  ];


  return (
    <section id="services" className="py-16">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center">What we offer</h3>
        <p className="text-center mt-3 text-slate-500">Tools built for secure, simple second-hand device transactions.</p>


        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 bg-white rounded-2xl shadow-sm flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-emerald-50"><Check /></div>
              <div>
                <h4 className="font-semibold">{i.title}</h4>
                <p className="text-sm text-slate-500 mt-1">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}