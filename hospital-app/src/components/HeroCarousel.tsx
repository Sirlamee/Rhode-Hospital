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
    }, 10000); // 10 seconds per slide
    
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
    <div className="relative h-svh w-full overflow-hidden bg-black md:h-screen">
      <AnimatePresence initial={false} custom={{ direction, isFirstLoadComplete }}>
        <motion.div
          key={currentIndex + "-img"}
          custom={{ direction, isFirstLoadComplete }}
          variants={slideVariants}
          initial="hiddenImage"
          animate="visibleImage"
          exit="exitImage"
          className="absolute inset-0 h-full w-full"
        >
          {/* On narrow screens this blurred layer fills the unused portrait space
              without sacrificing any of the landscape photo. */}
          <Image
            src={slides[currentIndex].image}
            alt=""
            fill
            sizes="100vw"
            priority={currentIndex === 0}
            aria-hidden="true"
            className="scale-110 object-cover opacity-35 blur-md md:hidden"
          />

          <div className="absolute inset-0 hidden h-full md:block">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              sizes="100vw"
              priority={currentIndex === 0}
              className="object-contain opacity-90 md:object-cover md:opacity-60"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black md:hidden" />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <AnimatePresence initial={false} custom={{ direction, isFirstLoadComplete }}>
          <motion.div
            key={currentIndex + "-text"}
            custom={{ direction, isFirstLoadComplete }}
            variants={textVariants}
            initial="hiddenText"
            animate="visibleText"
            exit="exitText"
            className="pointer-events-auto absolute w-full max-w-4xl px-5 text-center sm:px-6"
          >
            <h1 className="mb-2 text-4xl font-bold text-white drop-shadow-lg sm:text-4xl md:mb-6 md:text-7xl">
              {slides[currentIndex].title}
            </h1>
            <p className="mb-4 text-base font-medium text-gray-100 drop-shadow-md sm:text-lg md:mb-8 md:text-2xl">
              {slides[currentIndex].description}
            </p>
            <div className="relative mx-auto mb-4 aspect-video w-full max-w-xl overflow-hidden rounded-xl shadow-2xl md:hidden">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                fill
                sizes="(max-width: 768px) calc(100vw - 2.5rem), 0px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
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
      <div className="group absolute inset-y-0 left-0 z-20 hidden w-24 items-center justify-start px-4 sm:flex md:w-32 md:px-10">
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
      <div className="group absolute inset-y-0 right-0 z-20 hidden w-24 items-center justify-end px-4 sm:flex md:w-32 md:px-10">
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
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3 md:bottom-8">
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
