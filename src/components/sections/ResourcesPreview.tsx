"use client";

import { motion } from "framer-motion";
import { SectionWrapper, StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const resources = [
  {
    category: "Guide",
    title: "5 Signs Your Business Needs Managed IT Services",
    description: "Learn the warning signs that indicate it's time to upgrade your IT support.",
  },
  {
    category: "Checklist",
    title: "Home Network Security Checklist",
    description: "Essential steps to secure your home network and protect your family.",
  },
  {
    category: "Article",
    title: "Cloud Migration: What to Expect",
    description: "A practical guide to planning and executing a smooth cloud transition.",
  },
];

export function ResourcesPreview() {
  return (
    <SectionWrapper className="py-20 lg:py-28 bg-background-alt" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
              <span className="w-8 h-0.5 bg-accent" />
              Resources
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Helpful Articles & Guides
            </h2>
            <p className="mt-4 text-text-secondary">
              Practical resources to help you understand technology and make better decisions.
            </p>
          </div>
          <Button variant="outline" href="/resources">
            View All Resources
          </Button>
        </motion.div>

        {/* Resource Cards */}
        <StaggerWrapper className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card variant="bordered" className="h-full cursor-pointer group">
                  <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
                    {resource.category}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {resource.description}
                  </p>
                  <div className="mt-4 flex items-center text-accent text-sm font-medium">
                    Read More
                    <ArrowIcon />
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </SectionWrapper>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
