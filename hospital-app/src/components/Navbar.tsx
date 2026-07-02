"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
            className="bg-blue-900 text-white text-xs"
          >
            <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex gap-3 sm:gap-4 items-center">
                <Link href="#" className="hover:text-blue-200 transition-colors">Terms</Link>
                <span className="text-blue-400">|</span>
                <Link href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</Link>
                <span className="text-blue-400">|</span>
                <Link href="#" className="hover:text-blue-200 transition-colors">Legal Agreement</Link>
              </div>
              <div className="flex gap-4 mt-2 sm:mt-0 items-center">
                <span>📞 +1 (555) 123-4567</span>
                <span>✉️ contact@rhodehospital.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-800 flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span className="text-3xl">🏥</span> Rhode Hospital
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 md:text-sm font-medium text-gray-700 items-center">
          <Link href="/" className={`transition-colors ${pathname === "/" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}>Home</Link>
          <Link href="/staff-and-doctors" className={`transition-colors ${pathname === "/staff-and-doctors" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}>Staff</Link>
          <Link href="/appointments" className={`transition-colors ${pathname === "/appointments" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}>Appointments</Link>
          <Link href="/about-us" className={`transition-colors ${pathname === "/about-us" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}>About Us</Link>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors">
            Contact Us
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 hover:text-blue-600 transition-colors p-2"
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
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>Home</Link>
              <Link href="/staff-and-doctors" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === "/staff-and-doctors" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>Staff</Link>
              <Link href="/appointments" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === "/appointments" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>Appointments</Link>
              <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${pathname === "/about-us" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>About Us</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white text-center px-5 py-2.5 rounded-lg transition-colors mt-2">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
