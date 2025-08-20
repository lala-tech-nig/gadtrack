"use client";
import Image from "next/image";

export default function Partners() {
  const partnersRow1 = [
    "/3chub.jpg",
    "/solidtech.png",
    "/Infinix.jpg",
    "/Itel.png",
    "/Mitsumi.png",
  ];

  const partnersRow2 = [
    "/oppo.jpg",
    "/pointek.png",
    "/Realme.png",
    "/samsung.jpg",
    "/tecno.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Our Trusted Partners
      </h2>

      {/* First Row */}
      <div className="relative w-full overflow-hidden mb-10">
        <div className="flex animate-slide gap-16">
          {partnersRow1.concat(partnersRow1).map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-40 h-20 relative">
              <Image
                src={logo}
                alt={`Partner ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide-reverse gap-16">
          {partnersRow2.concat(partnersRow2).map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-40 h-20 relative">
              <Image
                src={logo}
                alt={`Partner ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
