"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Clock, Mail, Phone, Award, BookOpen } from "lucide-react";

/* ─────────────────────────────────────────────
   Doctor data
   id must match the anchor used in homepage cards:
   /staff-and-doctors#<id>
───────────────────────────────────────────── */
const doctors = [
  {
    id: "dr-james-okafor",
    name: "Dawodu Adegbola",
    specialty: "Cardiology",
    experience: "18 Years Experience",
    qualifications: "MBBCh, FWACP (Internal Medicine), Fellowship in Interventional Cardiology",
    languages: "English, Yoruba",
    email: "j.okafor@rhodehospital.com",
    phone: "+234 801 234 5678",
    image: "/staff/dr-james-okafor.png",
    bio: [
      "Dr. James Okafor is a board-certified cardiologist with over 18 years of distinguished experience in the diagnosis and management of cardiovascular disease. He completed his fellowship in Interventional Cardiology at one of West Africa's leading cardiac centres, and has since built a reputation for delivering precise, compassionate care to thousands of patients across the region.",
      "His clinical interests include complex coronary interventions, heart failure management, hypertension, and cardiac rehabilitation. Dr. Okafor is a firm believer in a patient-first approach — taking time to explain diagnoses clearly and involve patients in every step of their treatment plan.",
      "Beyond clinical practice, he is an active researcher and educator, having contributed to several peer-reviewed publications on cardiovascular outcomes in sub-Saharan Africa. He regularly supervises junior doctors and participates in national cardiology conferences.",
    ],
    achievements: [
      "Fellow of the West African College of Physicians (FWACP)",
      "Over 200 successful coronary interventions",
      "Published researcher in cardiovascular medicine",
      "Recipient of the National Healthcare Excellence Award (2021)",
    ],
  },
  {
    id: "dr-sarah-chen",
    name: "Dr. Sarah Chen",
    specialty: "Neurology",
    experience: "14 Years Experience",
    qualifications: "MBBS, MRCP (Neurology), MSc Neuroscience",
    languages: "English, Mandarin",
    email: "s.chen@rhodehospital.com",
    phone: "+234 802 345 6789",
    image: "/staff/dr-sarah-chen.png",
    bio: [
      "Dr. Sarah Chen is a highly regarded consultant neurologist specialising in stroke medicine, epilepsy, and neuro-rehabilitation. With 14 years of clinical and academic experience, she brings a thoughtful, evidence-based approach to the management of complex neurological conditions.",
      "She trained at leading institutions in the United Kingdom before returning to practice in West Africa, where she has been instrumental in establishing the hospital's stroke response protocol — significantly reducing patient disability rates following acute stroke events.",
      "Dr. Chen is particularly passionate about public education on stroke prevention and early recognition. She runs awareness campaigns within the community and mentors the next generation of neurologists through the hospital's residency programme.",
    ],
    achievements: [
      "Member of the Royal College of Physicians (MRCP) — Neurology",
      "Lead architect of the Hospital Stroke Fast-Track Protocol",
      "Speaker at the Pan-African Neurology Symposium (2022, 2023)",
      "Research published in the Journal of Neurological Sciences",
    ],
  },
  {
    id: "dr-michael-patel",
    name: "Dr. Michael Patel",
    specialty: "General Surgery",
    experience: "20 Years Experience",
    qualifications: "MBBCh, FWACS (Surgery), Fellowship in Minimally Invasive Surgery",
    languages: "English, Hindi",
    email: "m.patel@rhodehospital.com",
    phone: "+234 803 456 7890",
    image: "/staff/dr-michael-patel.png",
    bio: [
      "Dr. Michael Patel is one of the hospital's most experienced surgeons, with a two-decade career marked by exceptional outcomes in both elective and emergency procedures. He is a pioneer of minimally invasive laparoscopic surgery in the region, having introduced and championed techniques that significantly reduce patient recovery time and post-operative complications.",
      "His areas of expertise span gastrointestinal surgery, hernia repair, appendectomy, cholecystectomy, and trauma surgery. Dr. Patel leads the surgical department with a commitment to safety, innovation, and continuous improvement.",
      "A dedicated educator, he conducts regular surgical skills workshops for medical officers and has trained over 50 surgeons through his structured mentorship programme. He also serves as a peer reviewer for a leading African surgical journal.",
    ],
    achievements: [
      "Fellow of the West African College of Surgeons (FWACS)",
      "Performed over 2,000 laparoscopic procedures",
      "Founder of the Regional Minimally Invasive Surgery Training Programme",
      "Best Surgeon Award — National Medical Excellence Awards (2020)",
    ],
  },
  {
    id: "dr-amina-hassan",
    name: "Dr. Amina Hassan",
    specialty: "Paediatrics",
    experience: "11 Years Experience",
    qualifications: "MBBS, FWACP (Paediatrics), Diploma in Child Health",
    languages: "English, Hausa, Arabic",
    email: "a.hassan@rhodehospital.com",
    phone: "+234 804 567 8901",
    image: "/staff/dr-amina-hassan.png",
    bio: [
      "Dr. Amina Hassan is a compassionate and highly skilled paediatrician dedicated to the health and development of children from newborns to adolescents. In her 11 years of practice, she has cared for thousands of young patients, earning the trust of families across the community through her warm bedside manner and clinical excellence.",
      "She specialises in neonatal care, childhood infectious diseases, growth and developmental assessments, and childhood immunisation. Dr. Hassan is particularly committed to preventive paediatric care, running regular growth monitoring clinics and vaccination drives across underserved communities.",
      "Dr. Hassan is a strong advocate for maternal and child health policy and frequently engages with community health workers to bridge the gap between clinical care and public health outcomes.",
    ],
    achievements: [
      "Fellow of the West African College of Physicians — Paediatrics (FWACP)",
      "Led hospital's child immunisation campaign reaching 5,000+ children",
      "Certified in Integrated Management of Childhood Illness (IMCI)",
      "Community Health Champion Award — State Ministry of Health (2023)",
    ],
  },
];

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
