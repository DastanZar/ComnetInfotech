"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/Button";

const footerLinks = {
  services: [
    { label: "Cloud Services", href: "/cloud-services" },
    { label: "IT Support & Maintenance", href: "/it-support" },
    { label: "Hardware Solutions", href: "/hardware" },
    { label: "OEM / Service Contracts", href: "/oem-contracts" },
    { label: "IT Health Check", href: "/health-check" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  contact: [
    { label: "Book a Consultation", href: "/contact" },
    { label: "Request IT Support", href: "/support" },
    { label: "Get a Free IT Health Check", href: "/health-check" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main Footer - Linear exact */}
      <div className="max-w-[1120px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Column 1 */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-[15px] font-bold text-[#F2F2F2]">
                Comnet<span className="text-[#F97316]">Infotech</span>
              </Link>
              <p className="mt-4 text-[#4A4A4A] text-[13px] leading-relaxed">
                Your trusted partner for cloud solutions, IT support, and hardware services. 
                We help homes and businesses navigate technology with confidence.
              </p>
              <div className="mt-6 flex gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/comnetinfotech/"
                  className="w-9 h-9 rounded-[6px] bg-[#111111] flex items-center justify-center hover:bg-[#1A1A1A] border border-[rgba(255,255,255,0.06)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-[#8A8A8A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services - Column 2 */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#4A4A4A] mb-4"
            >
              Services
            </motion.h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#8A8A8A] hover:text-[#F2F2F2] transition-colors duration-120ms"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company - Column 3 */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#4A4A4A] mb-4"
            >
              Company
            </motion.h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#8A8A8A] hover:text-[#F2F2F2] transition-colors duration-120ms"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact CTA - Column 4 */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#4A4A4A] mb-4"
            >
              Get in Touch
            </motion.h3>
            <p className="text-[#8A8A8A] text-[14px] mb-5">
              Ready to improve your IT infrastructure? Let's talk about how we can help.
            </p>
            <div className="space-y-3">
              <Button variant="primary" href="/contact" className="w-full justify-center">
                Book a Consultation
              </Button>
              <Button variant="secondary" href="/support" className="w-full justify-center">
                Request IT Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Linear exact */}
      <div className="border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-[1120px] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4A4A4A] text-[12px]">
              © {new Date().getFullYear()} Comnet Infotech. All rights reserved.
            </p>
            <div className="flex gap-6 text-[12px] text-[#4A4A4A]">
              <Link href="/privacy" className="hover:text-[#8A8A8A] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#8A8A8A] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
