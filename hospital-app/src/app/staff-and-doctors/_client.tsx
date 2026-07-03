"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Clock, Mail, Phone, Award, BookOpen } from "lucide-react";
import { doctors } from "@/lib/data/staff";



/* ─── Variants ─── */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function StaffAndDoctorsClient() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ── Page Header ── */}
      <section className="bg-white border-b border-slate-100 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block shadow-sm border border-blue-200">
            Our Medical Team
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-5 leading-tight">
            Meet Our Doctors &amp; Specialists
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Compassionate, board-certified professionals committed to delivering
            the highest standard of healthcare across every medical specialty.
          </p>
        </div>
      </section>

      {/* ── Staff Profiles ── */}
      <section className="py-20 px-6" aria-label="Staff profiles">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {doctors.map((doctor, index) => (
            <motion.article
              key={doctor.id}
              id={doctor.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
              aria-labelledby={`${doctor.id}-name`}
              className="scroll-mt-24 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.07)] overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr]">

                {/* ── Column 1: Image ── */}
                <div className="relative bg-slate-100">
                  {/* Alternate image position for visual variety */}
                  <div className="relative w-full h-72 md:h-full min-h-[400px]">
                    <Image
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}, ${doctor.specialty} specialist at Rhode Hospital`}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>

                  {/* Specialty overlay badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-5">
                    <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-1">
                      {doctor.specialty}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                      <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>
                </div>

                {/* ── Column 2: Bio ── */}
                <div className="p-8 md:p-10 flex flex-col gap-6">
                  {/* Name & qualifications */}
                  <div>
                    <h2
                      id={`${doctor.id}-name`}
                      className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1"
                    >
                      {doctor.name}
                    </h2>
                    <p className="text-sm text-slate-500 font-medium">
                      {doctor.qualifications}
                    </p>
                  </div>

                  {/* Contact & languages */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium border-y border-slate-100 py-4">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <a
                        href={`mailto:${doctor.email}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {doctor.email}
                      </a>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <a
                        href={`tel:${doctor.phone.replace(/\s/g, "")}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {doctor.phone}
                      </a>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-blue-400" aria-hidden="true" />
                      <span>{doctor.languages}</span>
                    </span>
                  </div>

                  {/* Full bio paragraphs */}
                  <div className="flex flex-col gap-4">
                    {doctor.bio.map((paragraph, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key achievements */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                      <Award className="w-4 h-4 text-blue-500" aria-hidden="true" />
                      Key Achievements
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {doctor.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
