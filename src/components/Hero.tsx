"use client";

import Image from "next/image";


export default function Hero() {
  return (
    <section id="hero" className="scroll-section bg-black">
      <div className="w-full h-full relative">
        <Image
          src="/Untitled design (11).png"
          alt="Mannheim Brewery"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>
    </section>
  );
}