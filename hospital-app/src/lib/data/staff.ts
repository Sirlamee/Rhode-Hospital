/**
 * lib/data/staff.ts
 *
 * Single source of truth for all hospital staff, doctors, nurses, and administrative specialists.
 *
 * Two shapes are exported:
 *  - StaffMember (or Doctor) – full profile used on the /staff-and-doctors detail page
 *  - Specialist – summary card used on the homepage "Meet Our Specialists" section
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Full staff / doctor profile — used on /staff-and-doctors */
export interface StaffMember {
  /** URL-safe id; used for deep-linking: /staff-and-doctors#<id> */
  id: string;
  name: string;
  roles: string[];
  department: string;
  specialty: string;
  qualifications: string;
  languages: string;
  email: string;
  /** Path relative to /public, e.g. "/staff/dejidoctor.jpg" or null if anonymous */
  image: string | null;
  /** Each entry is one paragraph in the bio section */
  bio: string[];
  achievements: string[];
}

export type Doctor = StaffMember;

/** Lightweight card used on the homepage specialist section */
export interface Specialist {
  name: string;
  roles: string[];
  specialty: string;
  bio: string;
  image: string | null;
  /** href that deep-links to the staff member's anchor on the staff page */
  profileHref: string;
}

// ---------------------------------------------------------------------------
// Data — full profiles
// ---------------------------------------------------------------------------

export const doctors: StaffMember[] = [
  {
    id: "odebiyi-jubril",
    name: "Dr. Jubril Odebiyi",
    roles: ["Medical Director", "Doctor"],
    department: "Internal Medicine",
    specialty: "Internal Medicine & Clinical Leadership",
    qualifications:
      "MBBS, FWACP (Internal Medicine), Certified Healthcare Operations",
    languages: "English, Yoruba",
    email: "medicsjibril@gmail.com",
    image: null,
    bio: [
      "Dr. Jubril Odebiyi is the Medical Director and Consultant Physician in Internal Medicine at Rhode Hospital. As the clinical head of the hospital, Dr. Jubril steers medical governance, clinical quality assurance, and healthcare operations across all medical units.",
      "In clinical practice, Dr. Jubril delivers comprehensive diagnostic evaluations and evidence-based treatment plans for acute and chronic internal medical conditions.",
      "He champions patient safety, multidisciplinary teamwork, and the continuous adoption of modern healthcare standards to ensure Rhode Hospital maintains its commitment to medical excellence.",
    ],
    achievements: [
      "Medical Director & Consultant Physician in Internal Medicine",
      "Fellow of the West African College of Physicians (FWACP)",
      "Head of Medical Governance and Clinical Quality Assurance",
      "Leader in Integrated Patient-Centered Healthcare Delivery",
    ],
  },
  {
    id: "oladeji-salami",
    name: "Dr. Oladeji Salami",
    roles: ["Doctor"],
    department: "Internal Medicine",
    specialty: "Internal Medicine & Oncology Focus",
    qualifications:
      "MBBS, FWACP (Internal Medicine), Fellowship in Interventional Medicine",
    languages: "English, Yoruba",
    email: "oladeji.salami1234@gmail.com",
    image: "/staff/dejidoctor.jpg",
    bio: [
      "Dr. Oladeji Salami is an experienced physician in Internal Medicine and an Aspiring Onchologist at Rhode Hospital. He delivers exemplary clinical diagnosis, chronic disease management, and compassionate patient care across diverse adult medical conditions.",
      "With deep clinical interest and ongoing focus in oncology and internal medicine, Dr. Salami is dedicated to advancing cancer care, early disease detection, and holistic patient support.",
      "He strongly advocates for patient education and proactive preventative medicine, taking time to guide patients and their families through personalized treatment and recovery plans.",
    ],
    achievements: [
      "Consultant Physician in Internal Medicine & Aspiring Onchologist",
      "Fellow of the West African College of Physicians (FWACP)",
      "Distinguished clinical background in internal and preventative healthcare",
      "Champion of Compassionate, Patient-Centered Clinical Care",
    ],
  },
  {
    id: "adejumo-waliyat",
    name: "Adejumo Waliyat",
    roles: ["Nurse"],
    department: "Internal Medicine",
    specialty: "Clinical Nursing & Patient Care",
    qualifications: "Registered Nurse (RN), Registered Midwife (RM)",
    languages: "English, Yoruba",
    email: "waladetemia@gmail.com",
    image: "/staff/waliyat.jpeg",
    bio: [
      "Adejumo Waliyat is a dedicated Registered Nurse in the Department of Internal Medicine at Rhode Hospital. She brings extensive experience in administering prescribed medical regimens, monitoring inpatient vital parameters, and delivering compassionate bedside support.",
      "Nurse Waliyat specializes in adult patient care, health education, and emergency triage. Her patient-centered methodology ensures patients and their families feel informed, comforted, and supported throughout the healing journey.",
    ],
    achievements: [
      "Certified in Basic Life Support (BLS) and Emergency Nursing Triage",
      "Excellence in Inpatient Care Coordination and Clinical Monitoring",
      "Active Advocate for Patient Health Education & Infection Control",
    ],
  },
  {
    id: "biobaku-aminat",
    name: "Biobaku Aminat",
    roles: ["Nurse"],
    department: "Internal Medicine",
    specialty: "Inpatient Nursing & Clinical Support",
    qualifications: "Registered Nurse (RN)",
    languages: "English, Yoruba",
    email: "aminatbiobaku4@gmail.com",
    image: null,
    bio: [
      "Biobaku Aminat is an empathetic Registered Nurse serving in the Internal Medicine ward at Rhode Hospital. She is responsible for direct patient assessment, medication management, and supporting diagnostic procedures.",
      "With a keen eye for patient comfort and safety, Nurse Aminat works collaboratively with physicians and specialists to guarantee seamless post-admission care and rapid patient recovery.",
    ],
    achievements: [
      "Registered Nurse with comprehensive clinical ward experience",
      "Trained in Advanced Vital Monitoring and Medication Administration",
      "Commended for Patient Empathy and Diligent Bedside Care",
    ],
  },
  {
    id: "owolabi-suliat",
    name: "Owolabi Suliat",
    roles: ["Nurse"],
    department: "Internal Medicine",
    specialty: "General Nursing & Patient Recovery",
    qualifications: "Registered Nurse (RN)",
    languages: "English, Yoruba",
    email: "owolabisuliat22@gmail.com",
    image: null,
    bio: [
      "Owolabi Suliat is a compassionate and skilled Registered Nurse at Rhode Hospital. Working within Internal Medicine, she delivers personalized nursing care, ensures strict adherence to clinical care plans, and monitors patient vitals.",
      "Nurse Suliat is known for her calm demeanor, prompt clinical responsiveness, and dedication to maintaining high standards of clinical hygiene and patient safety.",
    ],
    achievements: [
      "Registered Nurse specializing in Internal Medicine Ward Care",
      "Certified in Routine Clinical Protocols & Patient Triage",
      "Dedicated to Compassionate and Evidence-Based Bedside Nursing",
    ],
  },
  {
    id: "precious-akinwunmi",
    name: "Precious Akinwunmi",
    roles: ["Nurse"],
    department: "Internal Medicine",
    specialty: "Clinical Nursing & Patient Advocacy",
    qualifications: "Registered Nurse (RN), Registered Midwife (RM)",
    languages: "English, Yoruba",
    email: "ibukunoluwaakinwunmi@gmail.com",
    image: null,
    bio: [
      "Precious Akinwunmi is an accomplished Registered Nurse with extensive experience in clinical nursing and patient rehabilitation in the Internal Medicine department.",
      "She excels in managing therapeutic interventions, counseling patients on post-discharge self-care, and coordinating multi-disciplinary ward routines with warmth and clinical precision.",
    ],
    achievements: [
      "Double Certified Registered Nurse and Registered Midwife (RN, RM)",
      "Proactive Contributor to Clinical Care Standards & Quality Improvement",
      "Specialist in Adult Inpatient Recovery & Patient Wellness Counseling",
    ],
  },
  {
    id: "samuel-adeola",
    name: "Samuel Adeola",
    roles: ["Pharmacist", "Lab Tech"],
    department: "Pharmacy & Diagnostic Laboratory",
    specialty: "Pharmaceuticals & Diagnostic Testing",
    qualifications:
      "B.Pharm, Certified Medical Laboratory Technician (MLT)",
    languages: "English, Yoruba, Igbo",
    email: "igwebuikeadeola@gmail.com",
    image: null,
    bio: [
      "Samuel Adeola is a multi-disciplinary healthcare practitioner serving as a Pharmacist and Medical Laboratory Technician at Rhode Hospital. He oversees the safe dispensing of medications, prescription audits, and accurate diagnostic laboratory evaluations.",
      "His dual expertise in pharmaceutical care and clinical diagnostics provides crucial support to doctors in establishing precise diagnoses and optimal medication therapies.",
    ],
    achievements: [
      "Licensed Pharmacist and Certified Medical Laboratory Specialist",
      "High Accuracy in Clinical Pathological Analysis and Quality Control",
      "Champion of Rational Drug Therapy and Medication Safety Protocols",
    ],
  },
  {
    id: "kolade-abdulganiyu",
    name: "Kolade AbdulGaniyu",
    roles: ["Billing Officer"],
    department: "Hospital Administration & Billing",
    specialty: "Hospital Billing & Patient Accounts",
    qualifications:
      "B.Sc Health Information Management / IT, ITIL Certified",
    languages: "English, Yoruba",
    email: "success4myfuture@gmail.com",
    image: null,
    bio: [
      "Kolade AbdulGaniyu manages hospital billing operations and financial workflows at Rhode Hospital. He ensures the security, accuracy, and efficiency of patient account records and payment procedures.",
      "His expertise in billing management and data accuracy facilitates frictionless patient account reconciliation and transparent administrative service for all patients.",
    ],
    achievements: [
      "Lead Hospital Billing and Patient Accounts Coordinator",
      "Streamlined Digital Patient Billing and Financial Record Audits",
      "Ensures Prompt and Transparent Billing Support for Hospital Visitors",
    ],
  },
  {
    id: "oyero-kamalideen",
    name: "Oyero Kamalideen",
    roles: ["Receptionist", "HMO Officer"],
    department: "Patient Relations & HMO Desk",
    specialty: "Front Desk Operations & HMO Coordination",
    qualifications: "B.Sc / Diploma in Health Administration & Public Relations",
    languages: "English, Yoruba",
    email: "kamalideenoyero30@gmail.com",
    image: "/staff/oyero.jpg",
    bio: [
      "Oyero Kamalideen is the front-desk coordinator and HMO Officer at Rhode Hospital. He oversees patient check-ins, insurance pre-authorizations, inquiries, and Health Maintenance Organization (HMO) claims processing.",
      "With exceptional customer relation skills and thorough understanding of healthcare insurance frameworks, he ensures patients experience swift, stress-free admissions and HMO verifications.",
    ],
    achievements: [
      "Lead HMO Claims Verification and Pre-authorization Officer",
      "Commended for Outstanding Front Desk Hospitality and Patient Experience",
      "Coordinates Efficient Patient Admissions and Department Triage Routing",
    ],
  },
];

// ---------------------------------------------------------------------------
// Data — homepage summary cards
// ---------------------------------------------------------------------------

export const specialists: Specialist[] = [
  {
    name: "Dr. Jubril Odebiyi",
    roles: ["Medical Director", "Doctor"],
    specialty: "Internal Medicine & Clinical Leadership",
    bio: "Medical Director and Consultant Physician leading medical governance, comprehensive diagnostic care, and clinical excellence.",
    image: null,
    profileHref: "/staff-and-doctors#odebiyi-jubril",
  },
  {
    name: "Dr. Oladeji Salami",
    roles: ["Doctor"],
    specialty: "Internal Medicine & Oncology Focus",
    bio: "Experienced physician in Internal Medicine and an Aspiring Onchologist delivering exemplary diagnostic care and compassionate disease management.",
    image: "/staff/dejidoctor.jpg",
    profileHref: "/staff-and-doctors#oladeji-salami",
  },
  {
    name: "Adejumo Waliyat",
    roles: ["Nurse"],
    specialty: "Clinical Nursing & Patient Care",
    bio: "Compassionate Registered Nurse delivering comprehensive inpatient nursing, vital monitoring, and patient wellness education.",
    image: "/staff/waliyat.jpeg",
    profileHref: "/staff-and-doctors#adejumo-waliyat",
  },
  {
    name: "Samuel Adeola",
    roles: ["Pharmacist", "Lab Tech"],
    specialty: "Pharmacy & Diagnostic Laboratory",
    bio: "Multi-skilled professional managing pharmaceutical dispensing, medication safety, and clinical diagnostic lab testing.",
    image: null,
    profileHref: "/staff-and-doctors#samuel-adeola",
  },
];
