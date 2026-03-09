"use client";

import { motion } from "framer-motion";
import { SectionWrapper, StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";

const trustItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Secure & Compliant",
    description: "Industry-standard security practices",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fast Response",
    description: "Quick turnaround on all requests",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud Experts",
    description: "Certified cloud specialists",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Transparent Pricing",
    description: "No hidden fees or surprises",
  },
];

export function TrustStrip() {
  return (
    <section className="py-12 bg-[#0F0F0F]">
      <div className="max-w-[1120px] mx-auto px-6">
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <StaggerItem key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-[8px] bg-[#111111] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#3B82F6]">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#F2F2F2] text-[15px]">{item.title}</h3>
                <p className="text-[14px] text-[#8A8A8A] mt-1">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
