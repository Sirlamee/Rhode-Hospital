/**
 * lib/data/staff.ts
 *
 * Single source of truth for all doctor / specialist data.
 *
 * Two shapes are exported:
 *  - Doctor     – full profile used on the /staff-and-doctors detail page
 *  - Specialist – summary card used on the homepage "Meet Our Specialists" section
 *
 * To update a doctor's information (e.g. after a resignation or new hire),
 * edit only this file — no need to touch any page or component.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Full doctor profile — used on /staff-and-doctors */
export interface Doctor {
  /** URL-safe id; must match the anchor used in homepage cards: /staff-and-doctors#<id> */
  id: string;
  name: string;
  specialty: string;
  /** e.g. "18 Years Experience" */
  experience: string;
  /** e.g. "MBBCh, FWACP (Internal Medicine), Fellowship in Interventional Cardiology" */
  qualifications: string;
  languages: string;
  email: string;
  phone: string;
  /** Path relative to /public, e.g. "/staff/dr-james-okafor.png" */
  image: string;
  /** Each entry is one paragraph in the bio section */
  bio: string[];
  achievements: string[];
}

/** Lightweight card used on the homepage specialist section */
export interface Specialist {
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  /** href that deep-links to the doctor's anchor on the staff page */
  profileHref: string;
}

// ---------------------------------------------------------------------------
// Data — full profiles
// ---------------------------------------------------------------------------

export const doctors: Doctor[] = [
  {
    id: "dr-james-okafor",
    name: "Dawodu Adegbola",
    specialty: "Cardiology",
    experience: "18 Years Experience",
    qualifications:
      "MBBCh, FWACP (Internal Medicine), Fellowship in Interventional Cardiology",
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
    qualifications:
      "MBBCh, FWACS (Surgery), Fellowship in Minimally Invasive Surgery",
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

// ---------------------------------------------------------------------------
// Data — homepage summary cards
// ---------------------------------------------------------------------------

export const specialists: Specialist[] = [
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
