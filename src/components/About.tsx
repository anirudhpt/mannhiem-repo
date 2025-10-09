"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Users, Zap, Heart, Beer, Award, Leaf, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const features = [
  {
    icon: Beer,
    title: "Craft Excellence",
    description: "Traditional German brewing techniques combined with innovative flavors to create exceptional craft beers.",
    color: "bg-gray-500"
  },
  {
    icon: Award,
    title: "Award-Winning Recipes",
    description: "Our master brewers have won numerous international awards for quality and taste innovation.",
    color: "bg-gray-600"
  },
  {
    icon: Leaf,
    title: "Sustainable Brewing",
    description: "Committed to eco-friendly practices with locally sourced ingredients and sustainable production methods.",
    color: "bg-green-500"
  },
  {
    icon: Clock,
    title: "Time-Honored Tradition",
    description: "Over 127 years of brewing heritage, passed down through generations of master brewers.",
    color: "bg-orange-500"
  }
];

export default function Brewery() {
  return (
    <section id="brewery" className="scroll-section bg-black relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about2.png"
          alt="Brewery Background"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start h-full items-center" style={{ transform: 'translateY(-10%)' }}>
          
          {/* Left Side - Enhanced Text Content with Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 max-w-lg"
          >
            <SpotlightCard className="mr-8 max-w-lg" spotlightColor="#ffffff">
              <div className="space-y-6">
                <p className="text-lg text-gray-100 leading-relaxed font-kobenhavn">
                  Our state-of-the-art brewery combines traditional German brewing heritage with cutting-edge technology. 
                  Every batch is carefully crafted by our master brewers who have perfected their craft over decades.
                </p>

                <p className="text-lg text-gray-100 leading-relaxed font-kobenhavn">
                  From the selection of premium ingredients to the precise fermentation process, we maintain the highest 
                  standards of quality that have made Mannheim Brewery a celebrated name in craft brewing.
                </p>
                
                <div className="border-l-4 border-gray-400/80 pl-4 mt-6">
                  <p className="text-sm text-gray-200 italic font-kobenhavn">
                    "Precision brewing meets timeless tradition"
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