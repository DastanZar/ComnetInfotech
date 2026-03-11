"use client";

import { motion } from "framer-motion";
import { StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";
import { TestimonialCard } from "../ui/Card";

const testimonials = [
  {
    quote: "We'd been patching our IT setup ourselves for years — a mix of personal emails, no backup, and one laptop that everyone was terrified would die. Comnet came in, assessed everything in a day, and had us on a proper cloud setup within the week. Haven't had a single crisis since. Worth every rupee.",
    author: "Rajeev Malhotra",
    role: "Director",
    company: "Malhotra Trading Co., New Delhi",
  },
  {
    quote: "What I needed wasn't a big IT company with a helpdesk ticket system. I needed someone who picks up the phone. Comnet has been managing our office infrastructure for over a year now — cloud, devices, the works. Responsive, honest, and they actually explain what they're doing. Rare.",
    author: "Sunita Arora",
    role: "Principal",
    company: "Arora Family Office, Gurugram",
  },
  {
    quote: "We run a small manufacturing unit and our machines need to be running. Comnet handles all our hardware maintenance and software updates under an AMC — the Lenovo authorisation was actually a big factor for us when choosing them. No downtime surprises in 18 months.",
    author: "Vikram Sehgal",
    role: "Operations Head",
    company: "Sehgal Industries, Wazirpur",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A]" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-12"
        >
          <span className="eyebrow">
            Testimonials
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#F2F2F2] tracking-tight mt-2">
            What Our Clients Say
          </h2>
          <p className="text-[#8A8A8A] text-lg mt-4">
            We let our clients speak for themselves. Here's what people say 
            about working with Comnet Infotech.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <StaggerWrapper className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                variant="dark"
              />
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
