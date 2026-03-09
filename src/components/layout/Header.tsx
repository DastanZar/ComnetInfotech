"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the home page (for transparent header)
  const isHomePage = pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Determine header styles based on scroll and page
  const showTransparent = isHomePage && !isScrolled;
  
  const headerBg = showTransparent 
    ? "bg-transparent" 
    : "bg-[#FFFFFF]";
  
  const headerBorder = showTransparent
    ? "border-b-0"
    : "border-b border-[#E9E9E7]";
  
  const logoColor = showTransparent ? "text-[#F0F0F0]" : "text-[#1A1A1A]";
  
  const navLinkColor = showTransparent 
    ? "text-[#A0A0A0] hover:text-[#FFFFFF]" 
    : "text-[#374151] hover:text-[#1A1A1A]";
  
  const navCtaVariant: "primary" | "nav" = showTransparent ? "primary" : "nav";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 h-16
          ${headerBg} ${headerBorder}
          transition-all duration-200 ease
          ${showTransparent ? "" : "backdrop-blur-md"}
        `}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`text-lg font-bold ${logoColor}`}
              >
                Comnet<span className="text-[#2563EB]">Infotech</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 7).map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      px-3 py-2 text-sm font-medium rounded-[8px]
                      transition-colors duration-150
                      ${navLinkColor}
                      hover:bg-[rgba(37,99,235,0.08)]
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant={navCtaVariant} size="sm" href="/contact">
                  Book a Consultation
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-[8px] hover:bg-[#F7F6F3]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 ${showTransparent ? "text-[#F0F0F0]" : "text-[#1A1A1A]"}`}
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

      {/* Mobile Menu */}
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
              className="absolute inset-0 bg-[#0D0D0D]/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-[#FFFFFF] border-l border-[#E9E9E7]"
            >
              <div className="p-6">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="text-xl font-bold text-[#1A1A1A]">
                    Comnet<span className="text-[#2563EB]">Infotech</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-[8px] hover:bg-[#F7F6F3]"
                  >
                    <svg
                      className="w-5 h-5 text-[#1A1A1A]"
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

                {/* Mobile Nav Links */}
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
                        className="block px-4 py-3 text-[15px] font-medium text-[#1A1A1A] rounded-[8px] hover:bg-[#F7F6F3] hover:text-[#2563EB] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-[#E9E9E7]">
                  <Button variant="nav" href="/contact" className="w-full justify-center">
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
