"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function ContactCTA() {
  return (
    <section className="py-24 bg-[#F97316]">
      <div className="max-w-[800px] mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] md:text-[36px] font-bold text-white tracking-tight mb-6">
            Ready to Simplify Your Technology?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-[600px] mx-auto">
            Whether you're ready to get started or just want to learn more, 
            we're here to help. Tell us about your needs and we'll 
            recommend options that fit your situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="primary" size="lg" href="/contact">
                Schedule a Consultation
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="secondary-light"
                size="lg"
                href="/support"
              >
                Request IT Support
              </Button>
            </motion.div>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            Or give us a call at{' '}
            <a href="tel:+919999999999" className="text-white hover:underline font-medium">
              +91 99999 99999
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
