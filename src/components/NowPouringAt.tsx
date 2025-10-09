"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink, Beer, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const locations = [
  {
    name: "Kaavu",
    address: "Koramangala, Bangalore",
    description: "Fresh craft beer from Mannheim Brewery",
    type: "Bar & Restaurant",
    logo: "/pouringat/kaavu.png",
  },
  {
    name: "Atlantis",
    address: "The Leela Palace, Bangalore",
    description: "Enjoy Mannheim's finest craft beers at this premium location",
    type: "Bar & Restaurant",
    logo: "/pouringat/atlantis.jpg",
  },
  {
    name: "Helen's",
    address: "Church Street, Bangalore",
    description: "Experience authentic German brewing at Helen's",
    type: "Bar & Restaurant",
    logo: "/pouringat/helens.jpeg",
  },
];

export default function NowPouringAt() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % locations.length;
      }
      return (prevIndex - 1 + locations.length) % locations.length;
    });
  };

  // Auto-rotate every 3 seconds (pauses on hover)
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        paginate(1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  return (
    <section className="scroll-section bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 h-[1080px] flex flex-col justify-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-2 border-amber-500/30 mb-3 shadow-lg shadow-amber-500/20"
          >
            <Beer className="w-10 h-10 text-amber-500" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
            Now Pouring At
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Find Mannheim craft beers at these partner locations in <span className="text-amber-500 font-semibold">Bangalore</span>
          </p>
        </motion.div>

        {/* Rotating Carousel */}
        <div 
          className="relative" 
          style={{ perspective: "2000px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Hover Areas for Auto-scroll */}
          <div
            className="absolute left-0 top-0 w-32 h-full z-10 cursor-pointer"
            onMouseEnter={() => paginate(-1)}
          />
          <div
            className="absolute right-0 top-0 w-32 h-full z-10 cursor-pointer"
            onMouseEnter={() => paginate(1)}
          />

          {/* Carousel Container */}
          <div className="relative h-[320px] flex items-center justify-center">
            <div className="flex items-center justify-center gap-8">
              {/* Show all 3 items with rotation */}
              {locations.map((location, index) => {
                // Calculate position relative to current index
                let position = (index - currentIndex + locations.length) % locations.length;
                
                // Determine if this should be visible (show 3: -1, 0, 1)
                const isVisible = position <= 1 || position === locations.length - 1;
                
                // Adjust position for smooth wrapping
                if (position === locations.length - 1) position = -1;
                if (position > 1) position = position - locations.length;
                
                const isCenter = position === 0;
                
                return (
                  <motion.div
                    key={index}
                    animate={{
                      x: position * 220, // Spacing between items
                      scale: isCenter ? 1 : 0.85,
                      opacity: isCenter ? 1 : 0.5,
                      z: isCenter ? 50 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="group absolute"
                    style={{ 
                      transformStyle: "preserve-3d",
                      visibility: isVisible ? 'visible' : 'hidden',
                    }}
                  >
                        {/* Animated Glow Ring */}
                        {isCenter && (
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            animate={{
                              boxShadow: [
                                "0 0 0 0 rgba(251, 191, 36, 0)",
                                "0 0 0 20px rgba(251, 191, 36, 0.1)",
                                "0 0 0 40px rgba(251, 191, 36, 0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        )}

                        {/* Logo Card */}
                        <div className={`relative bg-gradient-to-br from-white via-neutral-50 to-white rounded-xl p-6 ${isCenter ? 'w-48 h-48' : 'w-40 h-40'} flex items-center justify-center shadow-2xl border-2 ${isCenter ? 'border-amber-400' : 'border-neutral-100'} transition-all duration-500 overflow-hidden`}>
                          {/* Shine Effect */}
                          {isCenter && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                              style={{ skewX: -20 }}
                            />
                          )}
                          
                          {/* Corner Accents */}
                          {isCenter && (
                            <>
                              <div className="absolute top-1.5 left-1.5 w-5 h-5 border-t-2 border-l-2 border-amber-500/50 rounded-tl-lg" />
                              <div className="absolute top-1.5 right-1.5 w-5 h-5 border-t-2 border-r-2 border-amber-500/50 rounded-tr-lg" />
                              <div className="absolute bottom-1.5 left-1.5 w-5 h-5 border-b-2 border-l-2 border-amber-500/50 rounded-bl-lg" />
                              <div className="absolute bottom-1.5 right-1.5 w-5 h-5 border-b-2 border-r-2 border-amber-500/50 rounded-br-lg" />
                            </>
                          )}
                          
                          {/* Logo */}
                          <div className="relative z-10">
                            <Image
                              src={location.logo}
                              alt={location.name}
                              width={isCenter ? 160 : 120}
                              height={isCenter ? 160 : 120}
                              className="object-contain w-full h-full filter drop-shadow-lg"
                            />
                          </div>
                        </div>

                        {/* Floating Badge - Only for center */}
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 rounded-full shadow-lg whitespace-nowrap border-2 border-amber-400"
                          >
                            <span className="text-black font-bold text-sm">{location.name}</span>
                          </motion.div>
                        )}

                        {/* Info Card - Only for center on hover */}
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-72 bg-neutral-900/90 backdrop-blur-xl border border-neutral-700 rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                          >
                            <div className="flex items-center gap-2 text-neutral-400 text-xs mb-2">
                              <MapPin className="w-3 h-3 text-amber-500" />
                              <span>{location.address}</span>
                            </div>
                            <p className="text-neutral-300 text-xs leading-relaxed">
                              {location.description}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
            </div>
          </div>

          {/* Progress Indicators with Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Left Navigation Button */}
            <motion.button
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 border-2 border-amber-400 rounded-full p-3 transition-all duration-300 shadow-lg shadow-amber-500/30"
              suppressHydrationWarning
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </motion.button>

            {/* Progress Dots */}
            <div className="flex gap-2">
              {locations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                  }`}
                  suppressHydrationWarning
                  aria-label={`Go to location ${index + 1}`}
                />
              ))}
            </div>

            {/* Right Navigation Button */}
            <motion.button
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 border-2 border-amber-400 rounded-full p-3 transition-all duration-300 shadow-lg shadow-amber-500/30"
              suppressHydrationWarning
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </motion.button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-neutral-400 mb-4 text-sm">
            Want to serve Mannheim beers at your establishment?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 border-2 border-amber-400"
          >
            <span>Partner With Us</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
