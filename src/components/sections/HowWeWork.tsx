"use client";

import { motion } from "framer-motion";
import { SectionWrapper, StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Listen & Understand",
    description: "We take time to understand your unique situation, challenges, and goals before recommending anything.",
  },
  {
    number: "02",
    title: "Explain Options Clearly",
    description: "We present your choices in plain English, with transparent pricing and no jargon or hype.",
  },
  {
    number: "03",
    title: "Implement with Care",
    description: "Our team executes your solution with minimal disruption, keeping you informed every step of the way.",
  },
  {
    number: "04",
    title: "Stay for the Long Haul",
    description: "We're not just here for setup—we're your ongoing technology partner, available when you need us.",
  },
];

export function HowWeWork() {
  return (
    <SectionWrapper className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            A Simple, Straightforward Approach
          </h2>
          <p className="text-text-secondary text-lg">
            Technology doesn't have to be complicated. Our process is designed 
            to be as simple and transparent as possible.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-muted via-accent to-accent-muted -translate-y-1/2" />

          <StaggerWrapper className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-2xl border border-border relative z-10">
                    <div className="text-5xl font-bold text-accent-muted mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>
      </div>
    </SectionWrapper>
  );
}
