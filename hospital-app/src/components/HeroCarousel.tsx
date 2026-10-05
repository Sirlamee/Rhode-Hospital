"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { slides } from "@/lib/data/hero";


export default function HeroCarousel() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hasPlayedMap, setHasPlayedMap] = useState<Record<number, boolean>>({});
  const [isFirstLoadComplete, setIsFirstLoadComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoadComplete(true);
    }, 1200); // 0.8s duration + 0.4s delay = 1.2s
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-transition stops after the last bg image and text are displayed.
    if (currentIndex >= slides.length - 1) {
      return;
    }
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }, 5000); // 5 seconds per slide
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    // Mark the current index as played so it only animates once if required
    setHasPlayedMap(prev => ({ ...prev, [currentIndex]: true }));
  }, [currentIndex]);

  // Framer motion variants
  const slideVariants: Variants = {
    hiddenImage: ({ direction, isFirstLoadComplete }: { direction: number, isFirstLoadComplete: boolean }) => ({
      x: isFirstLoadComplete ? 0 : (direction > 0 ? "-100%" : "100%"),
      opacity: 0,
    }),
    visibleImage: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exitImage: ({ direction, isFirstLoadComplete }: { direction: number, isFirstLoadComplete: boolean }) => ({
      x: isFirstLoadComplete ? 0 : (direction > 0 ? "100%" : "-100%"),
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    })
  };

  const textVariants: Variants = {
    hiddenText: ({ direction, isFirstLoadComplete }: { direction: number, isFirstLoadComplete: boolean }) => ({
      x: isFirstLoadComplete ? 0 : (direction > 0 ? "100%" : "-100%"),
      opacity: 0,
    }),
    visibleText: ({ isFirstLoadComplete }: { isFirstLoadComplete: boolean }) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: isFirstLoadComplete ? 0.5 : 0.4 // Start fading in new text just before old text finishes (0.8s duration)
      }
    }),
    exitText: ({ direction, isFirstLoadComplete }: { direction: number, isFirstLoadComplete: boolean }) => ({
      x: isFirstLoadComplete ? 0 : (direction > 0 ? "-100%" : "100%"),
      opacity: 0,
      transition: {
        duration: isFirstLoadComplete ? 0.8 : 0.8,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={{ direction, isFirstLoadComplete }}>
        <motion.div
          key={currentIndex + "-img"}
          custom={{ direction, isFirstLoadComplete }}
          variants={slideVariants}
          initial="hiddenImage"
          animate="visibleImage"
          exit="exitImage"
          className="absolute inset-0 w-full h-full"
        >
          {/* We use standard img with absolute layout or Next/Image */}
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="object-cover w-full h-full opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <AnimatePresence initial={false} custom={{ direction, isFirstLoadComplete }}>
          <motion.div
            key={currentIndex + "-text"}
            custom={{ direction, isFirstLoadComplete }}
            variants={textVariants}
            initial="hiddenText"
            animate="visibleText"
            exit="exitText"
            className="text-center px-6 max-w-4xl absolute pointer-events-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {slides[currentIndex].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md font-medium">
              {slides[currentIndex].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => router.push("/appointments")} className="text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:opacity-90" style={{ backgroundColor: "var(--brand-maroon)" }}>
                Book an Appointment
              </button>
              <button onClick={() => router.push("/contact")} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg">
                Contact Us
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Navigation Zone */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 flex items-center justify-start px-4 md:px-10 z-20 group">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-300 transform ${
            currentIndex === 0 
              ? "opacity-0 cursor-default pointer-events-none -translate-x-4" 
              : "opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-black/50 pointer-events-auto cursor-pointer"
          }`}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Right Navigation Zone */}
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 flex items-center justify-end px-4 md:px-10 z-20 group">
        <button
          onClick={handleNext}
          disabled={currentIndex === slides.length - 1}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-300 transform ${
            currentIndex === slides.length - 1 
              ? "opacity-0 cursor-default pointer-events-none translate-x-4" 
              : "opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-black/50 pointer-events-auto cursor-pointer"
          }`}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, idx) => (
          <div 
            key={idx}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === currentIndex ? "w-8" : "w-2 bg-white/50"
            }`}
            style={idx === currentIndex ? { backgroundColor: "var(--brand-maroon)" } : {}}
          />
        ))}
      </div>
    </div>
  );
}
