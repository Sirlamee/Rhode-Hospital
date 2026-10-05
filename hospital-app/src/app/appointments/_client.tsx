"use client";

import { Activity } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  UserCircle,
  CalendarSearch,
  ClipboardList,
  BellRing,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  HeadphonesIcon,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   Appointment steps
───────────────────────────────────────────────────────────────── */
const steps = [
  {
    icon: UserCircle,
    title: "Create or Log Into Your Account",
    description:
      "Visit the Patient Portal and sign in with your existing credentials, or register a new account in minutes using your email address and personal details.",
  },
  {
    icon: CalendarSearch,
    title: "Search for a Specialist or Service",
    description:
      "Browse our list of available doctors, departments, and medical services. Filter by specialty, date, or preferred doctor to find the right fit for your needs.",
  },
  {
    icon: ClipboardList,
    title: "Select a Date and Time Slot",
    description:
      "Choose from available appointment slots that suit your schedule. The portal displays real-time availability so you can book with confidence.",
  },
  {
    icon: BellRing,
    title: "Confirm and Receive Your Booking Details",
    description:
      "Review your appointment summary, confirm your booking, and instantly receive a confirmation notification via email or SMS with all relevant details.",
  },
  {
    icon: CheckCircle2,
    title: "Attend Your Appointment",
    description:
      "Arrive at the hospital at your scheduled time. You may also use the Patient Portal to reschedule, cancel, or view your medical history and past visits.",
  },
];

/* ─── Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function AppointmentsClient() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── Page Hero ── */}
      <section className="py-20 px-6 text-center" style={{ background: `linear-gradient(to bottom right, var(--brand-navy), var(--brand-navy-mid), var(--brand-navy-dark))` }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-white/30">
            <Activity className="w-4 h-4 mr-2" /> Appointments
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Book Your Appointment Through Our Patient Portal
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            All appointments at Rhode Hospital are securely managed through our
            dedicated Patient Portal — giving you faster access, real-time
            availability, and a more personalised booking experience.
          </p>
        </motion.div>
      </section>

      {/* ── Step-by-Step Guide ── */}
      <section
        className="py-24 px-6 max-w-7xl mx-auto"
        aria-labelledby="steps-heading"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2
            id="steps-heading"
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight"
          >
            How to Schedule Your Appointment
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Follow these five simple steps inside the Patient Portal to book
            your next appointment quickly and securely.
          </p>
        </motion.div>

        {/* Steps — vertical timeline */}
        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative max-w-2xl mx-auto w-full"
          aria-label="Appointment booking steps"
        >
          {/* Spine line */}
          <span
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: `linear-gradient(to bottom, var(--brand-maroon), #e8b4b4, transparent)` }}
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.li
                key={index}
                variants={stepVariant}
                className={`relative flex items-start gap-6 ${isLast ? "pb-0" : "pb-10"}`}
              >
                {/* Node */}
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-extrabold text-lg select-none" style={{ backgroundColor: "var(--brand-maroon)" }}>
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 group">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon
                      className="w-5 h-5 shrink-0"
                      aria-hidden="true"
                      style={{ color: "var(--brand-maroon)" }}
                    />
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:opacity-80 transition-opacity">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pl-7">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* ── Primary CTA ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="mt-16 flex flex-col items-center gap-3 text-center"
        >
          <Link
            href="/patient/login"
            className="inline-flex items-center gap-2.5 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90" style={{ backgroundColor: "var(--brand-maroon)", '--tw-ring-color': 'var(--brand-maroon)' } as React.CSSProperties}
            aria-label="Open the Rhode Hospital Patient Portal to book an appointment"
          >
            Open Patient Portal
            <ExternalLink className="w-5 h-5" aria-hidden="true" />
          </Link>
          <p className="text-slate-500 text-sm font-medium">
            You will be redirected to the secure Patient Portal web application.
          </p>
        </motion.div>
      </section>

      {/* ── Support Banner ── */}
      <section
        className="bg-slate-50 border-t border-slate-100 py-16 px-6"
        aria-labelledby="support-heading"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="max-w-2xl mx-auto flex flex-col items-center text-center gap-5"
        >
          {/* Icon */}
          <div
            className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm"
            aria-hidden="true"
          >
            <HeadphonesIcon className="w-7 h-7" aria-hidden="true" style={{ color: "var(--brand-navy)" }} />
          </div>

          <h2
            id="support-heading"
            className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight"
          >
            Need Help?
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-lg">
            If you experience any difficulty accessing the Patient Portal, have
            questions about booking your appointment, or require assistance with
            scheduling, our friendly support team is ready to help. Don&apos;t
            hesitate to reach out.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90" style={{ backgroundColor: "var(--brand-navy)", borderColor: "var(--brand-navy)", '--tw-ring-color': 'var(--brand-navy)' } as React.CSSProperties}
            aria-label="Contact Rhode Hospital support team"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
