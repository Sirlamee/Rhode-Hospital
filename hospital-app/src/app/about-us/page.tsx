import type { Metadata } from "next";
import AboutUsClient from "./_client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rhode Hospital's mission, values, and 5+ years of dedicated service providing compassionate, high-quality healthcare across our 7+ specialized departments in Ikotun, Lagos.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Rhode Hospital",
    description:
      "Discover Rhode Hospital's 5+ years of compassionate healthcare, modern diagnostics, and patient-centered clinical excellence in Ikotun, Lagos.",
    url: "https://www.rhodehospital.com/about-us",
  },
  twitter: {
    title: "About Us | Rhode Hospital",
    description:
      "Discover Rhode Hospital's 5+ years of compassionate healthcare, modern diagnostics, and patient-centered clinical excellence in Ikotun, Lagos.",
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
