"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    
    // In a real app, you would handle the form submission here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Brewery Location",
      details: ["Mannheim Craft Brewery", "Rheinstraße 45", "68161 Mannheim, Germany"],
      color: "bg-gray-500"
    },
    {
      icon: Phone,
      title: "Reservations",
      details: ["+49 621 555-0180", "Daily: 11:00 - 22:00", "Tours: 14:00 & 16:00"],
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Brewery Contact",
      details: ["hello@mannheim-brewery.de", "Response within 2 hours", "Events & Private Tours"],
      color: "bg-blue-500"
    },
    {
      icon: Globe,
      title: "Online",
      details: ["mannheim-brewery.de", "@MannheimBrew", "Virtual Brewery Tour"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="contact" className="scroll-section bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-modesto">
            Contact <span className="text-white">Us</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-kobenhavn max-w-3xl mx-auto">
            Ready to experience authentic German craft beer? Visit our brewery 
            for tastings, tours, and unforgettable moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg border-0 bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 font-modesto">
                  Book Your Visit
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                        suppressHydrationWarning
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="What can we help you with?"
                      suppressHydrationWarning
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full min-h-[120px]"
                      placeholder="Tell us about your travel plans or questions..."
                      suppressHydrationWarning
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-white hover:bg-gray-200 text-gray-900"
                    suppressHydrationWarning
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="shadow-md border-0 hover:shadow-lg transition-shadow duration-300 bg-black border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-10 h-10 ${info.color} rounded-xl flex items-center justify-center`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1 font-modesto">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-gray-300">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-black border-0 text-white">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-4 font-modesto">
                    Ready to Visit?
                  </h4>
                  <div className="space-y-3">
                    <Button variant="secondary" size="sm" className="w-full" suppressHydrationWarning>
                      Book A Visit
                    </Button>
                    <Button variant="outline" size="sm" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-black" suppressHydrationWarning>
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}