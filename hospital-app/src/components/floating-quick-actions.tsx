"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, PhoneCall, Plus } from "lucide-react";

export default function FloatingQuickActions() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmergency = () => {
    alert("Emergency Contact Options:\n\nEmergency Room: 911\nHospital Hotline: 1-800-HOSPITAL");
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="fixed bottom-8 right-8 z-100 hidden md:flex flex-col gap-4">
        <button
          onClick={handleEmergency}
          className="group relative flex items-center justify-center w-14 h-14 bg-white text-red-500 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-red-50 hover:bg-red-50 hover:scale-110 hover:shadow-xl transition-all duration-300 ease-out"
          aria-label="Emergency Contact"
        >
          <PhoneCall size={22} className="animate-pulse" />
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-2 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none text-sm font-semibold border border-gray-100">
            Emergency Contact
          </span>
        </button>

        <Link
          href="/patient/login"
          className="group relative flex items-center justify-center w-14 h-14 text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:scale-110 hover:shadow-xl transition-all duration-300 ease-out" style={{ backgroundColor: "var(--brand-maroon)" }}
          aria-label="Patient Portal"
        >
          <User size={24} />
          <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none text-sm font-medium">
            Patient Portal
          </span>
        </Link>
      </div>

      {/* Mobile Version (Expandable FAB) */}
      <div className="fixed bottom-6 right-6 z-100 md:hidden flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col gap-3 origin-bottom-right"
            >
              <button
                onClick={() => { handleEmergency(); setIsOpen(false); }}
                className="flex items-center gap-3 bg-white border border-red-50 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full py-3 px-5 text-red-500 font-semibold text-sm active:scale-95 transition-transform"
              >
                <span>Emergency</span>
                <PhoneCall size={18} />
              </button>
              
              <Link
                href="/patient/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full py-3 px-5 text-white font-medium text-sm active:scale-95 transition-transform" style={{ backgroundColor: "var(--brand-maroon)" }}
              >
                <span>Patient Portal</span>
                <User size={18} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out active:scale-95 ${isOpen ? 'bg-gray-800 text-white rotate-135' : 'text-white'}`} style={isOpen ? {} : { backgroundColor: "var(--brand-maroon)" }}
          aria-label="Quick Actions Menu"
        >
          <Plus size={28} />
        </button>
      </div>
    </>
  );
}
