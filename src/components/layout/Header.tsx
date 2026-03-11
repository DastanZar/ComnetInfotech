"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";

// Navigation items
const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Cloud Services", href: "/cloud-services" },
  { label: "IT Support & Maintenance", href: "/it-support" },
  { label: "Hardware Solutions", href: "/hardware" },
  { label: "OEM / Service Contracts", href: "/oem-contracts" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* LINEAR EXACT NAVBAR - Always dark, fixed blur background */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 h-16
          bg-[rgba(10,10,10,0.80)] backdrop-blur-[12px] backdrop-saturate-[180%]
          border-b border-[rgba(255,255,255,0.06)]
          transition-all duration-200 ease
        `}
      >
        <div className="max-w-[1120px] mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - Linear style */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-9 w-auto"
              >
                <Image
                  src="/logo.png"
                  alt="ComnetTech"
                  width={150}
                  height={36}
                  className="h-9 w-auto"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Linear style */}
            <nav className="hidden lg:flex items-center">
              {navItems.slice(0, 7).map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-center"
                >
                  {index > 0 && (
                    <div className="h-4 w-[1px] bg-[rgba(255,255,255,0.2)] mx-0" />
                  )}
                  <Link
                    href={item.href}
                    className={`
                      px-4 py-2 text-[14px] font-medium
                      transition-colors duration-200
                      ${pathname === item.href 
                        ? "text-[#F97316]"
                        : "text-[#8A8A8A] hover:text-[#F97316] hover:underline hover:underline-offset-4"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button - Linear primary style */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button 
                  variant="primary" 
                  size="sm" 
                  href="/contact"
                  className="px-5 py-2.5 shadow-[0_2px_8px_rgba(255,140,0,0.4)]"
                >
                  Book a Consultation
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button - Linear dark style */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-[6px] hover:bg-[rgba(255,255,255,0.04)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 text-[#8A8A8A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Linear dark style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel - Linear dark */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-[#0F0F0F] border-l border-[rgba(255,255,255,0.06)]"
            >
              <div className="p-6">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="relative h-8 w-auto">
                    <Image
                      src="/logo.png"
                      alt="ComnetTech"
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-[6px] hover:bg-[rgba(255,255,255,0.04)]"
                  >
                    <svg
                      className="w-5 h-5 text-[#8A8A8A]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Mobile Nav Links - Linear style */}
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-[15px] font-medium text-[#8A8A8A] rounded-[6px] hover:text-[#F2F2F2] hover:bg-[rgba(255,255,255,0.04)] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                  <Button variant="primary" href="/contact" className="w-full justify-center">
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
