"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Background gradient - subtle radial from center */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(37,99,235,0.06) 0%, #0D0D0D 70%)'
        }}
      />
      
      {/* Subtle grid lines */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 py-24">
        <div className="text-center">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="inline-flex items-center mb-6"
          >
            <span className="eyebrow eyebrow-dark">
              Cloud & IT Services · Delhi
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[56px] md:text-[64px] font-extrabold text-[#F0F0F0] tracking-[-0.03em] leading-[1.1] max-w-[720px] mx-auto"
          >
            Your IT, handled with care.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-[#A0A0A0] leading-relaxed max-w-[520px] mx-auto"
          >
            From cloud migration to everyday IT support, we help homes and businesses 
            get the most from their technology—without the headache.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button variant="primary" size="lg" href="/contact">
              Book a Consultation
            </Button>
            <Button variant="secondaryDark" size="lg" href="/services">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-[#2A2A2A]"
          >
            <p className="text-sm text-[#606060] mb-6">Trusted by homes and businesses across Delhi</p>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F0F0F0]">15+</div>
                <div className="text-xs text-[#606060] mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F0F0F0]">500+</div>
                <div className="text-xs text-[#606060] mt-1">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F0F0F0]">99.9%</div>
                <div className="text-xs text-[#606060] mt-1">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F0F0F0]">24/7</div>
                <div className="text-xs text-[#606060] mt-1">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
