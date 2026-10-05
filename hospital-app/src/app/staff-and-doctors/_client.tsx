"use client";

import { useState, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Award,
  BookOpen,
  User,
  Search,
  Building2,
  Sparkles,
} from "lucide-react";
import { doctors, StaffMember } from "@/lib/data/staff";

/* ─── Variants ─── */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const CATEGORIES = [
  { id: "all", label: "All Staff" },
  { id: "doctors", label: "Doctors & Directors" },
  { id: "nurses", label: "Nursing Staff" },
  { id: "pharmacy-lab", label: "Pharmacy & Lab" },
  { id: "admin-hmo", label: "Admin & HMO" },
] as const;

function getInitials(name: string) {
  const parts = name.replace(/^Dr\.\s+/i, "").split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default function StaffAndDoctorsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStaff = useMemo(() => {
    return doctors.filter((member) => {
      // Category filter
      let matchesCategory = true;
      if (selectedCategory === "doctors") {
        matchesCategory = member.roles.some((r) =>
          /doctor|medical director/i.test(r)
        );
      } else if (selectedCategory === "nurses") {
        matchesCategory = member.roles.some((r) => /nurse/i.test(r));
      } else if (selectedCategory === "pharmacy-lab") {
        matchesCategory = member.roles.some((r) =>
          /pharmacist|lab/i.test(r)
        );
      } else if (selectedCategory === "admin-hmo") {
        matchesCategory = member.roles.some((r) =>
          /billing|receptionist|hmo/i.test(r)
        );
      }

      // Search filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.roles.some((r) => r.toLowerCase().includes(query)) ||
        member.department.toLowerCase().includes(query) ||
        member.specialty.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ── Page Header ── */}
      <section
        className="py-16 md:py-20 px-6 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, var(--brand-navy), var(--brand-navy-mid), var(--brand-navy-dark))`,
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <span
            className="px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-flex items-center gap-2 shadow-sm"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Rhode Hospital Team
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-5 leading-tight">
            Our Dedicated Medical &amp; Hospital Staff
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed font-medium"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Meet the experienced doctors, nurses, pharmacists, laboratory
            specialists, and hospital team devoted to your optimal health and
            well-being.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, role, department or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/95 text-slate-900 placeholder:text-slate-500 font-medium text-sm md:text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <section className="py-8 px-6 border-b border-slate-200 bg-white sticky top-16 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white shadow-md scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                style={
                  isActive
                    ? { backgroundColor: "var(--brand-maroon)" }
                    : {}
                }
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Staff Profiles ── */}
      <section className="py-16 md:py-20 px-6" aria-label="Staff profiles">
        <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
          {filteredStaff.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
              <User className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                No staff members found
              </h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                No matching results found for &ldquo;{searchQuery}&rdquo;. Try
                adjusting your search query or choosing another category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--brand-maroon)" }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredStaff.map((member, index) => (
              <StaffCard key={member.id} member={member} index={index} />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

function StaffCard({
  member,
  index,
}: {
  member: StaffMember;
  index: number;
}) {
  const initials = getInitials(member.name);

  return (
    <motion.article
      id={member.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={sectionVariants}
      aria-labelledby={`${member.id}-name`}
      className="scroll-mt-24 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.07)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr]">
        {/* ── Column 1: Image or Anonymous Avatar ── */}
        <div className="relative bg-slate-100 flex flex-col items-center justify-center">
          {member.image ? (
            <div className="relative w-full h-80 md:h-full min-h-[340px]">
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}, ${member.specialty} at Rhode Hospital`}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
          ) : (
            <div className="relative w-full h-80 md:h-full min-h-[340px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
              {/* Anonymous Avatar Graphic */}
              <div
                className="w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white mb-4 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand-navy-mid), var(--brand-navy-dark))",
                }}
              >
                <span className="text-2xl font-black text-white tracking-wider">
                  {initials}
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-50 pointer-events-none" />
              </div>

              {/* Sub-label under avatar */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Rhode Hospital Staff</span>
              </div>
            </div>
          )}

          {/* Specialty overlay badge */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/85 via-slate-900/60 to-transparent p-5">
            <span
              className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm"
              style={{ backgroundColor: "var(--brand-maroon)" }}
            >
              {member.specialty}
            </span>
          </div>
        </div>

        {/* ── Column 2: Details & Bio ── */}
        <div className="p-8 md:p-10 flex flex-col gap-6">
          {/* Header info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {member.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {role}
                </span>
              ))}
              {member.department && member.department !== "—" && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md text-amber-900 bg-amber-50 border border-amber-200 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-amber-700" />
                  {member.department}
                </span>
              )}
            </div>

            <h2
              id={`${member.id}-name`}
              className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1"
            >
              {member.name}
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              {member.qualifications}
            </p>
          </div>

          {/* Contact & languages */}
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium border-y border-slate-100 py-4">
            <span className="flex items-center gap-1.5">
              <Mail
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
                style={{ color: "var(--brand-maroon-mid)" }}
              />
              <a
                href={`mailto:${member.email}`}
                className="transition-colors hover:underline hover:opacity-80"
              >
                {member.email}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
                style={{ color: "var(--brand-maroon-mid)" }}
              />
              <span>{member.languages}</span>
            </span>
          </div>

          {/* Full bio paragraphs */}
          <div className="flex flex-col gap-3.5">
            {member.bio.map((paragraph, i) => (
              <p key={i} className="text-slate-600 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key achievements / responsibilities */}
          {member.achievements && member.achievements.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                <Award
                  className="w-4 h-4"
                  aria-hidden="true"
                  style={{ color: "var(--brand-maroon)" }}
                />
                Key Responsibilities &amp; Highlights
              </h3>
              <ul className="flex flex-col gap-2">
                {member.achievements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span
                      className="mt-1.5 w-2 h-2 shrink-0 rounded-full"
                      aria-hidden="true"
                      style={{ backgroundColor: "var(--brand-maroon-mid)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
