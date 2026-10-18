import type { Metadata } from "next";
import StaffAndDoctorsClient from "./_client";

export const metadata: Metadata = {
  title: "Our Doctors & Staff",
  description:
    "Meet Rhode Hospital's dedicated team of consultant physicians, registered nurses, laboratory scientists, pharmacists, and administrative specialists committed to your care.",
  alternates: {
    canonical: "/staff-and-doctors",
  },
  openGraph: {
    title: "Our Doctors & Staff | Rhode Hospital",
    description:
      "Meet Rhode Hospital's dedicated healthcare team: consultant physicians, registered nurses, laboratory scientists, pharmacists, and patient support specialists.",
    url: "https://www.rhodehospital.com/staff-and-doctors",
  },
  twitter: {
    title: "Our Doctors & Staff | Rhode Hospital",
    description:
      "Meet Rhode Hospital's dedicated healthcare team: consultant physicians, registered nurses, laboratory scientists, pharmacists, and patient support specialists.",
  },
};

export default function StaffAndDoctorsPage() {
  return <StaffAndDoctorsClient />;
}
