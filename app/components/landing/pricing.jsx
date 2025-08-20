export default function Pricing() {
const plans = [
{ name: 'Free', price: '₦0', bullets: ['1 IMEI check / month', 'Basic status', 'Community support'] },
{ name: 'Pro', price: '₦1,000/mo', bullets: ['Unlimited checks', 'Transfer dashboard', 'Priority support'] },
{ name: 'Seller', price: '₦5,000/mo', bullets: ['Verified seller badge', 'Bulk listings', 'Transfer automation'] },
];


return (
<section id="pricing" className="py-16">
<div className="max-w-5xl mx-auto text-center">
<h3 className="text-2xl font-bold">Pricing built for everyone</h3>
<p className="text-slate-500 mt-2">Start free. Upgrade as your needs grow.</p>


<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
{plans.map((p) => (
<div key={p.name} className={`p-6 rounded-2xl shadow-lg bg-white border ${p.name === 'Pro' ? 'border-indigo-100 scale-105 transform' : 'border-slate-100'}`}>
<div className="text-sm uppercase text-slate-500">{p.name}</div>
<div className="mt-4 text-3xl font-bold">{p.price}</div>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
{p.bullets.map((b) => (
<li key={b}>• {b}</li>
))}
</ul>
<div className="mt-6">
<button className={`w-full py-2 rounded-lg ${p.name === 'Pro' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-800'}`}>Choose {p.name}</button>
</div>
</div>
))}
</div>
</div>
</section>
);
}