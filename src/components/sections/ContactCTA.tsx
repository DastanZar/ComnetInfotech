"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "../ui/Button";

export function ContactCTA() {
  return (
    <SectionWrapper className="py-20 lg:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Technology?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're ready to get started or just want to learn more, 
            we're here to help. Tell us about your needs and we'll 
            recommend options that fit your situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="cta" size="lg" href="/contact">
                Schedule a Consultation
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                href="/support"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Request IT Support
              </Button>
            </motion.div>
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            Or give us a call at{' '}
            <a href="tel:+1234567890" className="text-accent-light hover:underline">
              (123) 456-7890
            </a>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
