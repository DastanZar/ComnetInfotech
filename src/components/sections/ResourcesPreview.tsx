"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const resources = [
  {
    category: "Guide",
    title: "5 Signs Your Business Needs Managed IT Services",
    description: "Learn the warning signs that indicate it's time to upgrade your IT support.",
    href: "/resources/do-i-need-managed-it",
  },
  {
    category: "Checklist",
    title: "Home Network Security Checklist",
    description: "Essential steps to secure your home network and protect your family.",
    href: "/resources/home-network-security",
  },
  {
    category: "Article",
    title: "Cloud Migration: What to Expect",
    description: "A practical guide to planning and executing a smooth cloud transition.",
    href: "/resources/cloud-storage-guide",
  },
];

export function ResourcesPreview() {
  return (
    <section className="py-24 bg-[#0A0A0A]" id="resources">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-[500px]">
            <span className="eyebrow">
              Resources
            </span>
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#F2F2F2] tracking-tight mt-2">
              Helpful Articles & Guides
            </h2>
            <p className="mt-3 text-[#8A8A8A]">
              Practical resources to help you understand technology and make better decisions.
            </p>
          </div>
          <Button variant="accent-outline" href="/resources">
            View All Resources
          </Button>
        </motion.div>

        {/* Resource Cards */}
        <StaggerWrapper className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Card variant="dark" className="h-full cursor-pointer group">
                  <Link href={resource.href}>
                    <div className="text-xs font-semibold text-[#F97316] uppercase tracking-wider mb-3">
                      {resource.category}
                    </div>
                    <h3 className="text-[15px] font-semibold text-[#F2F2F2] mb-2 group-hover:text-[#F97316] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-[#8A8A8A] text-sm">
                      {resource.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#F97316] text-sm font-semibold">
                      Read More
                      <ArrowIcon />
                    </div>
                  </Link>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
