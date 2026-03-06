"use client";

import { motion } from "framer-motion";
import { SectionWrapper, StaggerWrapper, StaggerItem } from "../ui/SectionWrapper";
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
    <SectionWrapper className="py-20 lg:py-28 bg-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-text-secondary text-lg">
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
              />
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </SectionWrapper>
  );
}
