"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "../ui/Button";

const faqs = [
  {
    question: "How quickly can you respond to IT issues?",
    answer: "We aim to respond to all support requests within 24 hours, and many issues are resolved same-day. For critical business disruptions, we offer priority response times.",
  },
  {
    question: "Do you work with home users or just businesses?",
    answer: "We work with both! Whether you need help setting up home WiFi, securing family devices, or supporting a business network, we have solutions for everyone.",
  },
  {
    question: "What are your payment options?",
    answer: "We offer flexible payment options including one-time services, monthly retainer plans, and project-based pricing. We'll always provide a clear quote before starting any work.",
  },
  {
    question: "Can you support our existing hardware?",
    answer: "Yes! We're authorized service providers for many major hardware manufacturers and can support equipment you already own. We also offer hardware procurement if you need new equipment.",
  },
  {
    question: "How do you handle data security?",
    answer: "Security is built into everything we do. We follow industry best practices, use encrypted communications, and can help implement security measures appropriate to your needs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper className="py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Common Questions
          </h2>
          <p className="text-text-secondary">
            Have a question? We probably have an answer. Can't find what you're looking for? 
            Get in touch—we're happy to help.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-primary pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronIcon />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-text-secondary">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View All FAQ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" href="/faq">
            View All FAQs
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
