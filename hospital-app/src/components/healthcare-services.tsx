"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Activity } from "lucide-react";

const services = [
  {
    image: "/doctor patient.jpg",
    title: "Inpatient & Emergency Care",
    description:
      "Immediate, around-the-clock emergency medical treatment and comprehensive hospital stays with continuous monitoring.",
  },
  {
    image: "/reception.jpg",
    title: "Outpatient Services",
    description:
      "Consultations, diagnostics, and follow-up care without overnight admission — flexible appointments at your convenience.",
  },
  {
    image: "/surgery.jpg",
    title: "Surgery",
    description:
      "Advanced surgical procedures performed by board-certified surgeons using minimally invasive and traditional techniques.",
  },
  {
    image: "/lab.jpg",
    title: "Laboratory",
    description:
      "Accurate, rapid diagnostic testing covering blood work, pathology, microbiology, and a broad range of medical panels.",
  },
  {
    image: "/pharmacy.jpg",
    title: "Pharmacy",
    description:
      "On-site dispensary stocked with a wide range of prescription and over-the-counter medications for seamless care.",
  },
  {
    image: "/phlebotomy.jpg",
    title: "Phlebotomy & Diagnostics",
    description:
      "Professional blood sample collection, immunisation programs, and diagnostic support with quick turnaround times.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HealthcareServices() {
  return (
    <section className="bg-white py-24 px-6" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-16 max-w-3xl"
        >
          <span className="flex px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm" style={{ backgroundColor: "var(--brand-maroon-pale)", color: "var(--brand-maroon)", border: "1px solid #e8b4b4" }}>
            <Activity className="w-4 h-4 mr-2" /> Our Services
          </span>

          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Comprehensive Healthcare Services for Every Stage of Life
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            We provide a full range of preventive, diagnostic, emergency, and
            specialized medical services delivered by experienced healthcare
            professionals dedicated to your long-term wellbeing.
          </p>
        </motion.div>

        {/* ── Service Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden flex flex-col focus-within:ring-2 focus-within:ring-offset-2"
              style={{ '--tw-ring-color': 'var(--brand-maroon)' } as React.CSSProperties}
            >
              {/* 50% Image Top */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={`Image for ${service.title} at Rhode Hospital`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 50% Content Bottom */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:opacity-80 transition-opacity">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
