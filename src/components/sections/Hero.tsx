"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Linear-allowed subtle radial glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.07), transparent)'
        }}
      />

      <div className="relative max-w-[1120px] mx-auto px-6 py-24">
        <div className="text-center">
          {/* Eyebrow label - Linear pill style */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="inline-flex items-center mb-4"
          >
            <span className="eyebrow">
              Cloud & IT Services · Delhi
            </span>
          </motion.div>

          {/* Main heading - Linear exact: 56px, 700, -0.04em */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[56px] md:text-[56px] font-bold text-[#F2F2F2] tracking-[-0.04em] leading-[1.1] max-w-[640px] mx-auto"
          >
            Your IT, handled with care.
          </motion.h1>

          {/* Subheadline - Linear exact: 17px, 400, #8A8A8A */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-[17px] text-[#8A8A8A] leading-[1.6] max-w-[480px] mx-auto"
          >
            From cloud migration to everyday IT support, we help homes and businesses 
            get the most from their technology—without the headache.
          </motion.p>

          {/* CTA buttons - Linear exact: margin-top 28px, gap 10px, centered */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="mt-7 flex flex-col sm:flex-row gap-[10px] justify-center"
          >
            <Button variant="primary" href="/contact">
              Book a Consultation
            </Button>
            <Button variant="secondary" href="/services">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust indicators - Linear exact border */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.04)]"
          >
            <p className="text-[14px] text-[#4A4A4A] mb-6">Trusted by homes and businesses across Delhi</p>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="text-center">
                <div className="text-[24px] font-bold text-[#F2F2F2]">15+</div>
                <div className="text-[12px] text-[#4A4A4A] mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-[24px] font-bold text-[#F2F2F2]">574+</div>
                <div className="text-[12px] text-[#4A4A4A] mt-1">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-[24px] font-bold text-[#F2F2F2]">99.999%</div>
                <div className="text-[12px] text-[#4A4A4A] mt-1">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-[24px] font-bold text-[#F2F2F2]">24/7</div>
                <div className="text-[12px] text-[#4A4A4A] mt-1">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
