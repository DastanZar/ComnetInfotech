"use client";

import { motion } from "framer-motion";
import { StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const hardwareServices = [
  {
    title: "Hardware Resale",
    description: "Quality equipment from trusted manufacturers at competitive prices.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Hardware Repurposing",
    description: "Extend the life of your existing equipment with upgrades and refurbishment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l3-3" />
      </svg>
    ),
  },
  {
    title: "OEM Service Contracts",
    description: "Official maintenance and support through manufacturer partnerships.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Annual Maintenance",
    description: "Scheduled upkeep to keep your hardware running optimally year after year.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
];

export function HardwareSolutions() {
  return (
    <section className="py-24 bg-[#161616]" id="hardware">
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
            Hardware Solutions
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#F0F0F0] tracking-tight mt-2">
            More Than Just Sales
          </h2>
          <p className="text-[#A0A0A0] text-lg mt-4">
            We don't just sell you equipment—we become your ongoing technology partner. 
            From procurement to maintenance, we handle the details.
          </p>
        </motion.div>

        {/* Hardware Cards */}
        <StaggerWrapper className="grid md:grid-cols-2 gap-6 mb-12">
          {hardwareServices.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Card variant="dark" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[12px] bg-[#2A2A2A] flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#F0F0F0] mb-2">{service.title}</h3>
                      <p className="text-[#A0A0A0]">{service.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>

        {/* OEM Credibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#161616] rounded-[16px] p-8 border border-[#2A2A2A]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-[12px] bg-[#3B82F6] flex items-center justify-center">
                <ShieldIcon />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-[#F0F0F0]">OEM & Service Contracts</h3>
                <p className="text-[#A0A0A0] text-sm">
                  Authorized service provider for major hardware manufacturers.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary-dark" href="/hardware">
                Ask About Hardware
              </Button>
              <Button variant="primary" href="/oem-contracts">
                Contract Inquiry
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
