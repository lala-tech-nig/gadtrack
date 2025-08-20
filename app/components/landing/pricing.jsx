"use client";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₦0",
      bullets: [
        "1 free gadget check per month",
        "View basic device status",
        "Community-driven updates",
      ],
    },
    {
      name: "Pro",
      price: "₦1,000/mo",
      bullets: [
        "Unlimited gadget checks",
        "Ownership transfer dashboard",
        "Device tracking & alerts",
        "Priority customer support",
      ],
    },
    {
      name: "Seller",
      price: "₦5,000/mo",
      bullets: [
        "Verified seller badge",
        "Bulk device uploads & listings",
        "Automated ownership transfers",
        "Advanced sales insights",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold">Transparent Pricing for Every User</h3>
        <p className="text-slate-500 mt-2">
          Whether you’re buying, selling, or securing your gadgets — start free
          and upgrade when you’re ready.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-6 rounded-2xl shadow-lg bg-white border ${
                p.name === "Pro"
                  ? "border-indigo-200 scale-105 transform"
                  : "border-slate-100"
              }`}
            >
              <div className="text-sm uppercase text-slate-500">{p.name}</div>
              <div className="mt-4 text-3xl font-bold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 text-left">
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  className={`w-full py-2 rounded-lg font-medium transition ${
                    p.name === "Pro"
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  Choose {p.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
