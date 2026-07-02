import type { Metadata } from "next";
import StaffAndDoctorsClient from "./_client";

export const metadata: Metadata = {
  title: "Our Doctors & Staff",
  description:
    "Meet Rhode Hospital's team of board-certified specialists in Cardiology, Neurology, General Surgery, Paediatrics, and more. Compassionate, experienced, and dedicated to your care.",
  alternates: {
    canonical: "/staff-and-doctors",
  },
  openGraph: {
    title: "Our Doctors & Staff | Rhode Hospital",
    description:
      "Meet our team of board-certified specialists: cardiologists, neurologists, surgeons, paediatricians, and more — all committed to exceptional patient care.",
    url: "https://www.rhodehospital.com/staff-and-doctors",
  },
  twitter: {
    title: "Our Doctors & Staff | Rhode Hospital",
    description:
      "Meet our team of board-certified specialists: cardiologists, neurologists, surgeons, paediatricians, and more — all committed to exceptional patient care.",
  },
};

export default function StaffAndDoctorsPage() {
  return <StaffAndDoctorsClient />;
}
