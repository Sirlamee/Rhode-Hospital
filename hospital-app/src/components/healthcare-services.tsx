"use client";

import { motion, Variants } from "framer-motion";
import {
  Ambulance,
  Building2,
  BedDouble,
  Stethoscope,
  FlaskConical,
  Pill,
  ScanLine,
  Syringe,
  Droplets,
  MonitorCheck,
  Truck,
  Activity,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Ambulance,
    title: "Emergency Care",
    description:
      "Immediate, around-the-clock emergency treatment for life-threatening conditions with rapid triage and expert intervention.",
  },
  {
    icon: Building2,
    title: "Outpatient Services",
    description:
      "Consultations, diagnostics, and follow-up care without overnight admission — flexible appointments at your convenience.",
  },
  {
    icon: BedDouble,
    title: "Inpatient Services",
    description:
      "Comprehensive hospital stays with continuous monitoring, nursing care, and a full spectrum of medical support.",
  },
  {
    icon: Stethoscope,
    title: "Surgery",
    description:
      "Advanced surgical procedures performed by board-certified surgeons using minimally invasive and traditional techniques.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory",
    description:
      "Accurate, rapid diagnostic testing covering blood work, pathology, microbiology, and a broad range of medical panels.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description:
      "On-site dispensary stocked with a wide range of prescription and over-the-counter medications for seamless care.",
  },
  {
    icon: ScanLine,
    title: "Diagnostic Imaging",
    description:
      "High-resolution X-rays, MRI, CT scans, and ultrasound services powered by state-of-the-art imaging technology.",
  },
  {
    icon: Syringe,
    title: "Vaccination",
    description:
      "Comprehensive immunisation programs for children and adults, protecting against a wide range of preventable diseases.",
  },
  {
    icon: Droplets,
    title: "Dialysis",
    description:
      "Kidney dialysis treatments in a comfortable, fully equipped unit — designed for safety, dignity, and patient comfort.",
  },
  {
    icon: MonitorCheck,
    title: "Intensive Care Unit",
    description:
      "Round-the-clock critical care for patients requiring close monitoring and life-support with specialist ICU teams.",
  },
  {
    icon: Truck,
    title: "Ambulance Services",
    description:
      "Fully equipped ambulances staffed with paramedics ensuring swift, safe, and medically-managed patient transport.",
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

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
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
          <span className="flex bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm border border-blue-200">
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 group focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-blue-100 shadow-sm"
                aria-hidden="true"
              >
                <service.icon className="w-7 h-7 text-blue-600" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
