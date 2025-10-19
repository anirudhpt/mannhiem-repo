"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Brewery", href: "#brewery" },
  { name: "Our Beers", href: "#beers" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // Hide header after a short delay or on any user interaction
    const timer = setTimeout(() => {
      setHasScrolled(true);
    }, 3000); // Hide after 3 seconds

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
      
      if (scrollTop > 0) {
        setHasScrolled(true);
      }
    };

    const handleInteraction = () => {
      setHasScrolled(true);
    };

    // Listen for scroll and interactions
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    // Initial scroll check
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // Handle hover on top area to show header
  const handleTopAreaMouseEnter = () => {
    if (hasScrolled) {
      const timer = setTimeout(() => {
        setShowHeader(true);
      }, 2000); // Show after 2 seconds of hover
      setHoverTimer(timer);
    }
  };

  const handleTopAreaMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    // Only hide if not hovering over the actual header
    if (!showHeader) {
      setShowHeader(false);
    }
  };

  // Handle hover on the actual header/nav
  const handleHeaderMouseLeave = () => {
    setShowHeader(false);
  };

  return (
    <>
      {/* Invisible hover area at the top */}
      <div 
        className="fixed top-0 left-0 right-0 h-16 z-40 bg-transparent"
        onMouseEnter={handleTopAreaMouseEnter}
        onMouseLeave={handleTopAreaMouseLeave}
      />
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: hasScrolled ? (showHeader || isAtTop ? 1 : 0) : 1,
          pointerEvents: hasScrolled ? (showHeader || isAtTop ? 'auto' : 'none') : 'auto'
        }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
        onMouseLeave={handleHeaderMouseLeave}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Mannheim-Logos-W.png"
              alt="Mannheim Brewery Logo"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
    </>
  );
}