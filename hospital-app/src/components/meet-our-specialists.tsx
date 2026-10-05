"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, User } from "lucide-react";
import { specialists } from "@/lib/data/staff";

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

function getInitials(name: string) {
  const parts = name.replace(/^Dr\.\s+/i, "").split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

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
          <span
            className="flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
            style={{
              backgroundColor: "var(--brand-maroon-pale)",
              color: "var(--brand-maroon)",
              border: "1px solid #e8b4b4",
            }}
          >
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
          {specialists.map((doctor, index) => {
            const initials = getInitials(doctor.name);

            return (
              <motion.div key={index} variants={cardVariants}>
                <Link
                  href={doctor.profileHref}
                  className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.14)] hover:-translate-y-2 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 h-full"
                  style={
                    {
                      "--tw-ring-color": "var(--brand-maroon)",
                    } as React.CSSProperties
                  }
                  aria-label={`View profile of ${doctor.name}, ${doctor.specialty}`}
                >
                  {/* Portrait or Anonymous Avatar */}
                  <div className="relative w-full aspect-4/3 overflow-hidden bg-slate-100 flex items-center justify-center">
                    {doctor.image ? (
                      <Image
                        src={doctor.image}
                        alt={`Portrait of ${doctor.name}, ${doctor.specialty} specialist`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 group-hover:scale-105 transition-transform duration-500 relative">
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center shadow-md border-2 border-white mb-2"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--brand-navy-mid), var(--brand-navy-dark))",
                          }}
                        >
                          <span className="text-xl font-bold text-white tracking-wider">
                            {initials}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                          <User className="w-3 h-3 text-slate-400" />
                          Rhode Staff
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    {/* Specialty badge */}
                    <span
                      className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--brand-maroon-pale)",
                        color: "var(--brand-maroon)",
                        border: "1px solid #e8b4b4",
                      }}
                    >
                      {doctor.specialty}
                    </span>

                    {/* Name */}
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:opacity-80 transition-opacity leading-snug">
                      {doctor.name}
                    </h3>

                    {/* Bio */}
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                      {doctor.bio}
                    </p>

                    {/* View Profile indicator */}
                    <div
                      className="flex items-center gap-1.5 text-sm font-semibold mt-auto group-hover:gap-2.5 transition-all duration-200 pt-2"
                      style={{ color: "var(--brand-maroon)" }}
                    >
                      <span>View Profile</span>
                      <ArrowRight
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
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
            Looking for a specific staff member or specialist?
          </h3>
          <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-lg">
            Explore our complete medical and administrative directory — including
            our physicians, nurses, laboratory officers, and hospital team.
          </p>
          <Link
            href="/staff-and-doctors"
            className="inline-flex items-center gap-2 text-white px-9 py-4 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90"
            style={
              {
                backgroundColor: "var(--brand-maroon)",
                "--tw-ring-color": "var(--brand-maroon)",
              } as React.CSSProperties
            }
            aria-label="View all medical staff at Rhode Hospital"
          >
            View Full Staff Directory
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
