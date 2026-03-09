"use client";

import { motion } from "framer-motion";
import { StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";

const segments = [
  {
    title: "Individuals",
    description: "Personal technology setup, home network configuration, and everyday tech support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Family Homes",
    description: "Whole-home WiFi, smart home integration, and family-friendly security solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Family Offices",
    description: "Private, discreet technology management for high-net-worth families and their offices.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Very Small Businesses",
    description: "Affordable IT support, cloud tools, and security solutions that scale with your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Legacy Contract Clients",
    description: "Ongoing support for existing hardware and software through OEM service contracts.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export function WhoWeServe() {
  return (
    <section className="py-24 bg-[#0F0F0F]" id="who-we-serve">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-12"
        >
          <span className="eyebrow">
            Who We Serve
          </span>
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mt-2" style={{ letterSpacing: '-0.03em' }}>
            Technology Support for Everyone
          </h2>
          <p className="text-[#8A8A8A] text-[15px] mt-4">
            Whether you're an individual needing home WiFi help or a business requiring 
            enterprise-grade solutions, we tailor our services to your needs.
          </p>
        </motion.div>

        {/* Segments Grid */}
        <StaggerWrapper className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {segments.map((segment, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Card variant="dark" className="h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-[8px] bg-[#111111] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#F97316]">
                    {segment.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#F2F2F2] mb-2">{segment.title}</h3>
                  <p className="text-[14px] text-[#8A8A8A]">{segment.description}</p>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
