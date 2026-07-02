"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, Clock } from "lucide-react";

const specialists = [
  {
    name: "Dr. James Okafor",
    specialty: "Cardiology",
    experience: "18 Years Experience",
    bio: "A board-certified cardiologist renowned for his expertise in interventional cardiology and heart failure management, serving thousands of patients.",
    image: "/staff/dr-james-okafor.png",
    profileHref: "/staff-and-doctors#dr-james-okafor",
  },
  {
    name: "Dr. Sarah Chen",
    specialty: "Neurology",
    experience: "14 Years Experience",
    bio: "Specialist in stroke, epilepsy, and neuro-rehabilitation, Dr. Chen combines cutting-edge research with compassionate patient-centred treatment.",
    image: "/staff/dr-sarah-chen.png",
    profileHref: "/staff-and-doctors#dr-sarah-chen",
  },
  {
    name: "Dr. Michael Patel",
    specialty: "General Surgery",
    experience: "20 Years Experience",
    bio: "Highly experienced in minimally invasive and laparoscopic surgical techniques, delivering precision and safety in every procedure.",
    image: "/staff/dr-michael-patel.png",
    profileHref: "/staff-and-doctors#dr-michael-patel",
  },
  {
    name: "Dr. Amina Hassan",
    specialty: "Paediatrics",
    experience: "11 Years Experience",
    bio: "Dedicated to the health and development of children from newborn to adolescent, offering expert care in a warm and child-friendly environment.",
    image: "/staff/dr-amina-hassan.png",
    profileHref: "/staff-and-doctors#dr-amina-hassan",
  },
];

/* ─── Framer-motion variants ─── */
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MeetOurSpecialists() {
  return (
    <section
      className="bg-slate-50 py-24 px-6"
      aria-labelledby="specialists-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-16 max-w-3xl"
        >
          <span className="flex items-center bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm border border-blue-200">
            <Activity className="w-4 h-4 mr-2" /> Our Specialists
          </span>

          <h2
            id="specialists-heading"
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Meet Our Experienced Medical Team
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Our hospital is staffed by highly qualified and compassionate
            healthcare professionals dedicated to providing exceptional patient
            care across a wide range of medical specialties.
          </p>
        </motion.div>

        {/* ── Specialist Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 w-full"
        >
          {specialists.map((doctor, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link
                href={doctor.profileHref}
                className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.14)] hover:-translate-y-2 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={`View profile of ${doctor.name}, ${doctor.specialty}`}
              >
                {/* Portrait */}
                <div className="relative w-full aspect-4/3 overflow-hidden bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}, ${doctor.specialty} specialist`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  {/* Specialty badge */}
                  <span className="self-start bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                    {doctor.specialty}
                  </span>

                  {/* Name */}
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {doctor.name}
                  </h3>

                  {/* Experience */}
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span>{doctor.experience}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {doctor.bio}
                  </p>

                  {/* View Profile indicator */}
                  <div className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold mt-1 group-hover:gap-2.5 transition-all duration-200">
                    <span>View Profile</span>
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Call To Action ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={ctaVariants}
          className="mt-20 px-8 py-12 flex flex-col items-center text-center gap-5 w-full max-w-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            Looking for the right specialist?
          </h3>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-lg">
            Explore our complete medical team — from primary care physicians to
            highly specialized consultants — and find the right professional for
            your needs.
          </p>
          <Link
            href="/staff-and-doctors"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-9 py-4 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="View all medical staff at Rhode Hospital"
          >
            View All Medical Staff
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
