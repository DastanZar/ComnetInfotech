"use client";

import { motion } from "framer-motion";
import { StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";

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
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-12"
        >
          <span className="eyebrow eyebrow-dark">
            How We Work
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#F0F0F0] tracking-tight mt-2">
            A Simple, Straightforward Approach
          </h2>
          <p className="text-[#A0A0A0] text-lg mt-4">
            Technology doesn't have to be complicated. Our process is designed 
            to be as simple and transparent as possible.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D3D3D] to-transparent -translate-y-1/2" />

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
                  <div className="bg-[#161616] p-6 rounded-[16px] border border-[#2A2A2A] relative z-10">
                    <div className="text-[40px] font-bold text-[#3D3D3D] mb-4 tracking-tight">
                      {step.number}
                    </div>
                    <h3 className="text-[15px] font-semibold text-[#F0F0F0] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>
      </div>
    </section>
  );
}
