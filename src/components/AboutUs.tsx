"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function AboutUs() {
  return (
    <section id="about" className="scroll-section bg-gray-900 relative">
      {/* Background Image without filter */}
      <div className="absolute inset-0">
        <Image
          src="/about1.png"
          alt="Brewery Equipment Background"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-full items-center" style={{ transform: 'translateY(-10%)' }}>
          
          {/* Right Side - Enhanced Text Content with Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 max-w-lg"
          >
            <SpotlightCard className="ml-8 max-w-lg" spotlightColor="#ffffff">
              <div className="space-y-6">
                <p className="text-lg text-gray-100 leading-relaxed font-kobenhavn">
                  Founded by Master Brewer Wilhelm Mannheim in 1895, our brewery began as a small family operation 
                  in the heart of Mannheim. Four generations later, we continue to honor his legacy of excellence 
                  and innovation.
                </p>

                <p className="text-lg text-gray-100 leading-relaxed font-kobenhavn">
                  Today, we blend time-honored German brewing techniques with modern technology and creativity, 
                  producing award-winning beers that reflect both our heritage and our vision for the future.
                </p>
                
                <div className="border-l-4 border-gray-400/80 pl-4 mt-6">
                  <p className="text-sm text-gray-200 italic font-kobenhavn">
                    &ldquo;Four generations of brewing excellence since 1895&rdquo;
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}