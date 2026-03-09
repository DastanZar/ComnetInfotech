"use client";

import { motion } from "framer-motion";
import { StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";
import { TestimonialCard } from "../ui/Card";

const testimonials = [
  {
    quote: "Comnet took the time to understand our family's unique needs. Now our home network works perfectly, and when we have questions, they actually answer in terms we can understand.",
    author: "Sarah M.",
    role: "Homeowner",
  },
  {
    quote: "As a small business owner, I needed IT support I could trust without breaking the bank. Comnet has been that partner—responsive, knowledgeable, and always honest.",
    author: "James L.",
    role: "Business Owner",
    company: "Local Retail Shop",
  },
  {
    quote: "They helped us migrate to the cloud with zero downtime. Their team made what seemed like a daunting process feel simple and manageable.",
    author: "Robert K.",
    role: "Operations Manager",
    company: "Professional Services Firm",
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
