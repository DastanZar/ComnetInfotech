"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "../ui/Button";

export function WhatWeDo() {
  return (
    <SectionWrapper className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
              <span className="w-8 h-0.5 bg-accent" />
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Technology That Works for You
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              At Comnet Infotech, we believe technology should simplify your life—not complicate it. 
              Whether you're a family looking to set up your first home network or a business 
              needing enterprise-grade cloud solutions, we're here to help.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Since 2005, we've been the trusted technology partner for homes and businesses 
              throughout the region. Our approach is simple: listen to your needs, explain your 
              options in plain English, and deliver solutions that just work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" href="/about">
                Learn More About Us
              </Button>
              <Button variant="outline" href="/contact">
                Talk to Comnet
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-accent-muted rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center">
                    <CloudIcon />
                  </div>
                  <div className="font-semibold text-primary">Cloud Solutions</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-surface rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center">
                    <SupportIcon />
                  </div>
                  <div className="font-semibold text-primary">IT Support</div>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-surface rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center">
                    <HardwareIcon />
                  </div>
                  <div className="font-semibold text-primary">Hardware</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-accent-muted rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center">
                    <SecurityIcon />
                  </div>
                  <div className="font-semibold text-primary">Security</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function CloudIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

function HardwareIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
