"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Shield, Lightbulb, Users, UserCheck, CheckCircle2, ChevronRight, Plus, Minus } from "lucide-react";

// --- Data ---
const milestones = [
  { year: "1998", title: "Hospital Founded", description: "Rhode Hospital opened its doors with a mission to provide exceptional care." },
  { year: "2005", title: "New Wing Expanded", description: "Added the state-of-the-art cardiovascular and neurology departments." },
  { year: "2012", title: "Research Center", description: "Launched our dedicated medical research and clinical trials center." },
  { year: "2018", title: "Tech Integration", description: "Implemented fully digital patient records and robotic surgery assistance." },
  { year: "2023", title: "Global Recognition", description: "Awarded top 100 international hospitals for patient safety and care quality." },
];

const coreValues = [
  { icon: Heart, title: "Compassion", desc: "We treat every patient with empathy and kindness." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in medical care." },
  { icon: Shield, title: "Integrity", desc: "We are honest, transparent, and ethical in all we do." },
  { icon: Users, title: "Teamwork", desc: "We collaborate across disciplines for comprehensive care." },
];

const faqData = [
  {
    question: "What are your opening and visiting hours?",
    answer: "Rhode Hospital is open 24 hours everyday (24/7) for general medical care, specialist consultations, and emergency services."
  },
  {
    question: "Do I need an appointment for the emergency room?",
    answer: "No, our Emergency Department is open 24/7 for critical and life-threatening conditions. No appointment is necessary."
  },
  {
    question: "Which insurance plans do you accept?",
    answer: "We accept most major insurance plans, including Medicare and Medicaid. We recommend contacting your insurance provider or our billing department for specific coverage details."
  },
  {
    question: "How can I access my medical records?",
    answer: "You can easily access your medical records, test results, and appointment history securely through our online Patient Portal."
  },
  {
    question: "Is parking available at the hospital?",
    answer: "Yes, we offer a multi-level parking garage for patients and visitors, with valet parking services available at the main entrance."
  }
];

function FAQItem({ faq }: { faq: { question: string, answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-900">{faq.question}</span>
        {isOpen ? <Minus className="w-5 h-5 shrink-0" style={{ color: "var(--brand-maroon)" }} /> : <Plus className="w-5 h-5 shrink-0" style={{ color: "var(--brand-maroon)" }} />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-slate-600 leading-relaxed font-medium">
          {faq.answer}
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutUsClient() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: "var(--brand-navy)" }}>
          <Image src="/hero/hero-one.png" alt="Rhode Hospital" fill className="object-cover opacity-60 mix-blend-overlay" priority />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-white/80 font-bold mb-6 uppercase tracking-widest text-sm bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md"
          >
            About Our Hospital
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl drop-shadow-sm"
          >
            Committed to compassionate, patient-centered healthcare, cutting-edge medical research, and serving our community with excellence.
          </motion.p>
        </div>
      </section>

      {/* 2. Hospital Overview Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="font-bold uppercase tracking-wider text-sm" style={{ color: "var(--brand-maroon)" }}>Our Overview</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              A Legacy of Excellence in Healthcare
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mt-2">
              Founded in 1998, Rhode Hospital has grown from a small community clinic into a leading international medical center. We offer specialized care across more than 40 departments, ensuring that every patient receives personalized, state-of-the-art treatment.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Our dedicated professionals work tirelessly to bring healing, comfort, and hope. By combining advanced technology with a deeply human touch, we continue to set new standards in patient care and clinical outcomes.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { label: "Years of Service", value: "25+" },
                { label: "Specialized Depts", value: "40+" },
                { label: "Medical Specialists", value: "150+" },
                { label: "Patients Served", value: "1M+" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: "rgba(128,0,0,0.04)", borderColor: "#e8b4b4" }}>
                  <span className="text-3xl font-extrabold mb-1" style={{ color: "var(--brand-maroon)" }}>{stat.value}</span>
                  <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center"
          >
            {/* Thick borders decorator */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 border-t-8 border-r-16 rounded-tr-3xl z-0 transition-all duration-500 hover:scale-105" style={{ borderColor: "var(--brand-maroon)" }}></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 border-b-8 border-l-16 rounded-bl-3xl z-0 transition-all duration-500 hover:scale-105" style={{ borderColor: "var(--brand-navy)" }}></div>
            
            {/* Image Container */}
            <div className="absolute inset-4 sm:inset-6 md:inset-8 z-10 overflow-hidden rounded-2xl shadow-2xl bg-white">
              <Image src="/about_overview.png" alt="Doctor and Patient" fill className="object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Story Vertical Timeline */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="font-bold uppercase tracking-wider text-sm" style={{ color: "var(--brand-maroon)" }}>Our History</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">The Rhode Hospital Story</h2>
          </div>
          
          <div className="relative border-l-2 md:border-l-0 md:border-t-0 md:before:absolute md:before:inset-y-0 md:before:left-1/2 md:before:w-0.5 ml-4 md:ml-0" style={{ borderColor: "#e8b4b4" }}>
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-sm mt-1.5 md:mt-0 z-10" style={{ backgroundColor: "var(--brand-maroon)" }} />
                
                {/* Content Box */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="font-extrabold text-2xl mb-2 block" style={{ color: "var(--brand-maroon)" }}>{milestone.year}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission, Vision & Core Values Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-bold uppercase tracking-wider text-sm" style={{ color: "var(--brand-maroon)" }}>Purpose & Values</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">What Drives Us Every Day</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white p-12 rounded-3xl shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: "var(--brand-navy)" }}
            >
              <Target className="w-16 h-16 mb-8 opacity-80 group-hover:scale-110 transition-transform duration-500" style={{ color: "var(--brand-maroon-pale)" }} />
              <h3 className="text-3xl font-extrabold mb-4">Our Mission</h3>
              <p className="text-white/80 text-xl leading-relaxed font-medium">
                To improve the health and well-being of our community by providing exceptional, compassionate, and accessible patient-centered care.
              </p>
              {/* Decorative circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-50 pointer-events-none" style={{ backgroundColor: "var(--brand-navy-mid)" }} />
            </motion.div>
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 text-white p-12 rounded-3xl shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <Eye className="w-16 h-16 text-slate-400 mb-8 opacity-80 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-3xl font-extrabold mb-4">Our Vision</h3>
              <p className="text-slate-300 text-xl leading-relaxed font-medium">
                To be the region&apos;s leading healthcare provider, recognized globally for clinical excellence, continuous innovation, and outstanding patient outcomes.
              </p>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 pointer-events-none" />
            </motion.div>
          </div>
          
          {/* Core Values Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-slate-200 p-8 md:p-16 rounded-3xl shadow-xl"
          >
            <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {coreValues.map((value, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm border hover:text-white hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: "var(--brand-maroon-pale)", color: "var(--brand-maroon)", borderColor: "#e8b4b4" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-maroon)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand-maroon-pale)'; (e.currentTarget as HTMLElement).style.color = 'var(--brand-maroon)'; }}>
                    <value.icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-bold uppercase tracking-wider text-sm" style={{ color: "var(--brand-maroon)" }}>Have Questions?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqData.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
