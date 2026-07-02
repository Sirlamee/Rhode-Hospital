"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useState, useRef } from "react";

const floatingVariants: Variants = {
  float: (delay: number) => ({
    y: ["-15px", "15px"],
    x: ["-10px", "10px"],
    rotate: [-5, 5],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay
      },
      x: {
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay
      },
      rotate: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay
      }
    }
  })
};

const DnaIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 22 8-15" /><path d="m16 22-8-15" /><path d="M14 6h.01" /><path d="M10 6h.01" /><path d="M16 10h.01" /><path d="M8 10h.01" /><path d="M14 14h.01" /><path d="M10 14h.01" /><path d="M16 18h.01" /><path d="M8 18h.01" />
  </svg>
);

const HeartbeatIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4.5L9 5l4 14 2-5h6" />
  </svg>
);

const CrossIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const PillIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

import Link from "next/link";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const bulletPoints = [
    "State-of-the-art medical equipment",
    "Award-winning team of specialists",
    "24/7 emergency care and support",
    "Patient-centered approach to healing"
  ];

  return (
    <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center overflow-hidden bg-gray-50/50">
      {/* Background Floating SVGs */}
      <motion.div custom={0} variants={floatingVariants} animate="float" className="absolute top-24 left-[10%] text-blue-200/50 z-0">
        <DnaIcon />
      </motion.div>
      <motion.div custom={1} variants={floatingVariants} animate="float" className="absolute bottom-32 left-[20%] text-blue-200/50 z-0 scale-125">
        <HeartbeatIcon />
      </motion.div>
      <motion.div custom={2} variants={floatingVariants} animate="float" className="absolute top-32 right-[15%] text-blue-200/50 z-0 scale-110">
        <CrossIcon />
      </motion.div>
      <motion.div custom={1.5} variants={floatingVariants} animate="float" className="absolute bottom-24 right-[25%] text-blue-200/50 z-0 scale-150">
        <StethoscopeIcon />
      </motion.div>
      <motion.div custom={0.5} variants={floatingVariants} animate="float" className="absolute top-1/2 left-[5%] text-blue-200/50 z-0">
        <PillIcon />
      </motion.div>
      <motion.div custom={2.5} variants={floatingVariants} animate="float" className="absolute top-[40%] right-[5%] text-blue-200/50 z-0 scale-125">
        <DnaIcon />
      </motion.div>

      <div ref={containerRef} className="max-w-7xl mx-auto w-full px-6 py-16 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 h-full items-center">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4" />About Us 
            </h3>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
              Welcome to Rhode Hospital
            </h2>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Rhode Hospital is a leading healthcare facility dedicated to providing comprehensive medical services with a focus on patient care, innovation, and excellence. Our team of experienced doctors and staff is committed to delivering the best possible treatment outcomes.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{point}</span>
              </li>
            ))}
          </ul>
          
          <Link href="/about-us" className="w-fit">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              Learn More About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-[60vh] md:h-[80%] flex items-center justify-center"
        >
          {/* Thick borders decorator */}
          <div className="absolute top-0 right-0 w-3/4 h-3/4 border-t-8 border-r-16 border-blue-600 rounded-tr-3xl z-0 transition-all duration-500 hover:scale-105"></div>
          <div className="absolute bottom-0 left-0 w-3/4 h-3/4 border-b-8 border-l-16 border-blue-900 rounded-bl-3xl z-0 transition-all duration-500 hover:scale-105"></div>
          
          {/* Image Container */}
          <div className="absolute inset-4 sm:inset-6 md:inset-8 z-10 overflow-hidden rounded-2xl shadow-2xl bg-white">
            <Image 
              src="/hospital_about.png"
              alt="Rhode Hospital Interior"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
