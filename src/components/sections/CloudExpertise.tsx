"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const cloudFeatures = [
  {
    title: "Cloud Migration",
    description: "We plan and execute your move to the cloud with minimal disruption.",
  },
  {
    title: "Microsoft 365",
    description: "Email, documents, and collaboration tools that work anywhere.",
  },
  {
    title: "Google Workspace",
    description: "Collaborative tools designed for modern teams.",
  },
  {
    title: "Secure File Sharing",
    description: "Share files safely with colleagues and clients.",
  },
];

export function CloudExpertise() {
  return (
    <SectionWrapper className="py-20 lg:py-28 bg-primary text-white" id="cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-accent-light font-medium text-sm mb-4">
              <span className="w-8 h-0.5 bg-accent-light" />
              Cloud Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Cloud Solutions Built for How You Work
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              The cloud isn't just the future—it's the present. We help businesses 
              of all sizes leverage cloud technology to work smarter, collaborate better, 
              and access their data from anywhere.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're moving to the cloud for the first time or optimizing 
              your existing setup, our certified team guides you through every step.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" href="/cloud-services">
                View Cloud Solutions
              </Button>
              <Button
                variant="outline"
                href="/contact"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Talk to Comnet
              </Button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {cloudFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card variant="elevated" className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
