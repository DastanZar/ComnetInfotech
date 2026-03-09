"use client";

import { motion } from "framer-motion";
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
    <section className="py-24 bg-[#0A0A0A]" id="cloud">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              Cloud Expertise
            </span>
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#F2F2F2] tracking-tight mt-2">
              Cloud Solutions Built for How You Work
            </h2>
            <p className="text-[#8A8A8A] text-lg mt-6 leading-relaxed">
              The cloud isn't just the future—it's the present. We help businesses 
              of all sizes leverage cloud technology to work smarter, collaborate better, 
              and access their data from anywhere.
            </p>
            <p className="text-[#8A8A8A] mt-6 leading-relaxed">
              Whether you're moving to the cloud for the first time or optimizing 
              your existing setup, our certified team guides you through every step.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="primary" href="/cloud-services">
                View Cloud Solutions
              </Button>
              <Button variant="secondary" href="/contact">
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
                <Card variant="dark">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[8px] bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F2F2F2] mb-1">{feature.title}</h3>
                      <p className="text-[#8A8A8A] text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
