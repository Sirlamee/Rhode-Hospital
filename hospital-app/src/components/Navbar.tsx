"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={navRef} className={`sticky top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-100"}`}>
      {/* Top small section */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0, overflow: "hidden" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ backgroundColor: "var(--brand-navy)" }}
            className="text-white text-xs"
          >
            <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex gap-3 sm:gap-4 items-center">
                <Link href="#" className="hover:text-red-200 transition-colors">Terms</Link>
                <span style={{ color: "var(--brand-maroon-pale)" }}>|</span>
                <Link href="#" className="hover:text-red-200 transition-colors">Privacy Policy</Link>
                <span style={{ color: "var(--brand-maroon-pale)" }}>|</span>
                <Link href="#" className="hover:text-red-200 transition-colors">Legal Agreement</Link>
              </div>
              <div className="flex gap-4 mt-2 sm:mt-0 items-center">
                <span>📞 +1 (555) 123-4567</span>
                <span>✉️ contact@rhodehospital.ng</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image src="/logo_rhode.jpg" alt="Rhode Hospital Logo" width={48} height={48} className="rounded-md object-contain" />
          <span className="text-2xl font-bold" style={{ color: "var(--brand-navy)" }}>Rhode Hospital</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 md:text-sm font-medium text-gray-700 items-center">
          <Link href="/" className={`transition-colors ${pathname === "/" ? "font-semibold" : "hover:opacity-80"}`} style={pathname === "/" ? { color: "var(--brand-maroon)" } : {}}>Home</Link>
          <Link href="/staff-and-doctors" className={`transition-colors ${pathname === "/staff-and-doctors" ? "font-semibold" : "hover:opacity-80"}`} style={pathname === "/staff-and-doctors" ? { color: "var(--brand-maroon)" } : {}}>Staff</Link>
          <Link href="/appointments" className={`transition-colors ${pathname === "/appointments" ? "font-semibold" : "hover:opacity-80"}`} style={pathname === "/appointments" ? { color: "var(--brand-maroon)" } : {}}>Appointments</Link>
          <Link href="/about-us" className={`transition-colors ${pathname === "/about-us" ? "font-semibold" : "hover:opacity-80"}`} style={pathname === "/about-us" ? { color: "var(--brand-maroon)" } : {}}>About Us</Link>
          <Link href="/contact" className="text-white px-5 py-2.5 rounded-lg transition-colors hover:opacity-90" style={{ backgroundColor: "var(--brand-maroon)" }}>
            Contact Us
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 transition-colors p-2"
          style={{ color: "var(--brand-navy)" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 overflow-hidden shadow-lg z-50"
          >
            <div className="px-6 py-4 flex flex-col gap-4 shadow-inner">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === "/" ? "font-semibold" : "text-gray-700"}`} style={pathname === "/" ? { color: "var(--brand-maroon)" } : {}}>Home</Link>
              <Link href="/staff-and-doctors" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === "/staff-and-doctors" ? "font-semibold" : "text-gray-700"}`} style={pathname === "/staff-and-doctors" ? { color: "var(--brand-maroon)" } : {}}>Staff</Link>
              <Link href="/appointments" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === "/appointments" ? "font-semibold" : "text-gray-700"}`} style={pathname === "/appointments" ? { color: "var(--brand-maroon)" } : {}}>Appointments</Link>
              <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === "/about-us" ? "font-semibold" : "text-gray-700"}`} style={pathname === "/about-us" ? { color: "var(--brand-maroon)" } : {}}>About Us</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-center px-5 py-2.5 rounded-lg transition-colors mt-2 hover:opacity-90" style={{ backgroundColor: "var(--brand-maroon)" }}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
