"use client";

import { motion, Variants } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Ambulance,
  Wallet,
  BadgeCheck,
  HeartHandshake,
  Activity,
} from "lucide-react";

const features = [
  {
    title: "Experienced Specialists",
    description: "Our team of highly qualified doctors brings years of expertise and dedication to patient care.",
    icon: Stethoscope,
  },
  {
    title: "Modern Equipment",
    description: "We utilize state-of-the-art medical technology for precise diagnosis and effective treatment.",
    icon: HeartPulse,
  },
  {
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency services ready to handle any medical crisis with rapid response.",
    icon: Ambulance,
  },
  {
    title: "Affordable Healthcare",
    description: "Quality medical services made accessible and reasonably priced for our entire community.",
    icon: Wallet,
  },
  {
    title: "Accredited Hospital",
    description: "Recognized by leading health organizations for maintaining outstanding medical standards.",
    icon: BadgeCheck,
  },
  {
    title: "Compassionate Care",
    description: "We prioritize patient well-being with a friendly, supportive, and holistic approach.",
    icon: HeartHandshake,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-16 max-w-3xl"
        >
          <span className="flex items-center bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 shadow-sm border border-blue-200">
            <Activity className="w-4 h-4 mr-2" /> Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Quality Healthcare with Compassion and Excellence
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            We combine experienced medical professionals, modern technology, and patient-centered care to deliver exceptional healthcare services tailored to your needs.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100">
                <feature.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
