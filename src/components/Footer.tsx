"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, Beer } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Our Beers": [
      "Lagers",
      "IPAs",
      "Wheat Beers",
      "Stouts",
      "Seasonal"
    ],
    "Experience": [
      "Brewery Tours",
      "Beer Tastings",
      "Events",
      "Private Groups",
      "Workshops"
    ],
    "Visit Us": [
      "Location",
      "Hours",
      "Reservations",
      "Parking",
      "Accessibility"
    ],
    "About": [
      "Our Story",
      "Brewmaster",
      "Sustainability",
      "Awards",
      "Press"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <Beer className="h-8 w-8 text-white" />
                  <span className="text-2xl font-bold font-modesto">Mannheim Brewery</span>
                </Link>
                
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md font-kobenhavn">
                  Experience authentic German brewing traditions with a modern twist. 
                  Crafting exceptional beers in the heart of Mannheim since 1895.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-white flex-shrink-0" />
                    <span className="text-sm text-gray-300">
                      Rheinstraße 45, 68161 Mannheim
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-white flex-shrink-0" />
                    <span className="text-sm text-gray-300">
                      +49 621 555-0180
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-white flex-shrink-0" />
                    <span className="text-sm text-gray-300">
                      hello@mannheim-brewery.de
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-white mb-4 font-modesto">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-900 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Mannheim Brewery. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-2">
                <Link href="#" className="text-gray-400 hover:text-blue-400 text-xs transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-400 text-xs transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-400 text-xs transition-colors">
                  Cookies
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-400 text-xs transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </Link>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}